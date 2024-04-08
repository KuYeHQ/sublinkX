package node

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"strings"

	"gopkg.in/yaml.v3"
)

type Proxy struct {
	Name               string                 `yaml:"name,omitempty"`
	Type               string                 `yaml:"type,omitempty"`
	Server             string                 `yaml:"server,omitempty"`
	Port               int                    `yaml:"port,omitempty"`
	Cipher             string                 `yaml:"cipher,omitempty"`
	Password           string                 `yaml:"password,omitempty"`
	Client_fingerprint string                 `yaml:"client-fingerprint,omitempty"`
	Tfo                bool                   `yaml:"tfo,omitempty"`
	Udp                bool                   `yaml:"udp,omitempty"`
	Skip_cert_verify   bool                   `yaml:"skip-cert-verify,omitempty"`
	Tls                string                 `yaml:"tls,omitempty"`
	Servername         string                 `yaml:"servername,omitempty"`
	Flow               string                 `yaml:"flow,omitempty"`
	AlterId            int                    `yaml:"alterId,omitempty"`
	Network            string                 `yaml:"network,omitempty"`
	Reality_opts       map[string]interface{} `yaml:"reality-opts,omitempty"`
	Ws_opts            map[string]interface{} `yaml:"ws-opts,omitempty"`
	Auth_str           string                 `yaml:"auth_str,omitempty"`
	Up                 int                    `yaml:"up,omitempty"`
	Down               int                    `yaml:"down,omitempty"`
	Alpn               string                 `yaml:"alpn,omitempty"`
	Sni                string                 `yaml:"sni,omitempty"`
	Obfs               string                 `yaml:"obfs,omitempty"`
	Obfs_password      string                 `yaml:"obfs-password,omitempty"`
	Protocol           string                 `yaml:"protocol,omitempty"`
	Uuid               string                 `yaml:"uuid,omitempty"`
	Peer               string                 `yaml:"peer,omitempty"`
}

type ProxyGroup struct {
	Proxies []string `yaml:"proxies"`
}
type Config struct {
	Proxies      []Proxy      `yaml:"proxies"`
	Proxy_groups []ProxyGroup `yaml:"proxy-groups"`
}
type SqlConfig struct {
	Clash string `json:"clash"`
	Udp   bool   `json:"udp"`
	Cert  bool   `json:"cert"`
}

// EncodeClash 用于生成 Clash 配置文件
func EncodeClash(urls []string, sqlconfig SqlConfig) ([]byte, error) {
	// 传入urls，解析urls，生成proxys
	// yamlfile 为模板文件
	var proxys []Proxy

	for _, link := range urls {
		u, err := url.Parse(link)
		if err != nil {
			log.Println(err)
		}
		switch {
		case u.Scheme == "ss":
			ss, err := DecodeSSURL(link)
			if err != nil {
				log.Println(err)
				continue
			}
			// 如果没有名字，就用服务器地址作为名字
			if ss.Name == "" {
				ss.Name = fmt.Sprintf("%s:%d", ss.Server, ss.Port)
			}
			ssproxy := Proxy{
				Name:             ss.Name,
				Type:             "ss",
				Server:           ss.Server,
				Port:             ss.Port,
				Cipher:           ss.Param.Cipher,
				Password:         ss.Param.Password,
				Udp:              sqlconfig.Udp,
				Skip_cert_verify: sqlconfig.Cert,
			}
			proxys = append(proxys, ssproxy)
		case u.Scheme == "ssr":
			ssr, err := DecodeSSRURL(link)
			if err != nil {
				log.Println(err)
			}
			// 如果没有名字，就用服务器地址作为名字
			if ssr.Qurey.Remarks == "" {
				ssr.Qurey.Remarks = fmt.Sprintf("%s:%d", ssr.Server, ssr.Port)
			}
			ssrproxy := Proxy{
				Name:             ssr.Qurey.Remarks,
				Type:             "ssr",
				Server:           ssr.Server,
				Port:             ssr.Port,
				Cipher:           ssr.Method,
				Password:         ssr.Password,
				Obfs:             ssr.Obfs,
				Obfs_password:    ssr.Qurey.Obfsparam,
				Protocol:         ssr.Protocol,
				Udp:              sqlconfig.Udp,
				Skip_cert_verify: sqlconfig.Cert,
			}
			proxys = append(proxys, ssrproxy)
		case u.Scheme == "trojan":
			trojan, err := DecodeTrojanURL(link)
			if err != nil {
				log.Println(err)
				continue
			}
			// 如果没有名字，就用服务器地址作为名字
			if trojan.Name == "" {
				trojan.Name = fmt.Sprintf("%s:%d", trojan.Hostname, trojan.Port)
			}
			ws_opts := map[string]interface{}{
				"path": trojan.Query.Path,
				"headers": map[string]interface{}{
					"Host": trojan.Query.Host,
				},
			}
			trojanproxy := Proxy{
				Name:               trojan.Name,
				Type:               "trojan",
				Server:             trojan.Hostname,
				Port:               trojan.Port,
				Password:           trojan.Password,
				Client_fingerprint: trojan.Query.Fp,
				Sni:                trojan.Query.Sni,
				Network:            trojan.Query.Type,
				Flow:               trojan.Query.Flow,
				Ws_opts:            ws_opts,
				Udp:                sqlconfig.Udp,
				Skip_cert_verify:   sqlconfig.Cert,
			}
			proxys = append(proxys, trojanproxy)
		case u.Scheme == "vmess":
			vmess, err := DecodeVMESSURL(link)
			if err != nil {
				log.Println(err)
				continue
			}
			// 如果没有名字，就用服务器地址作为名字
			if vmess.Ps == "" {
				vmess.Ps = fmt.Sprintf("%s:%d", vmess.Add, vmess.Port)
			}
			ws_opts := map[string]interface{}{
				"path": vmess.Path,
				"headers": map[string]interface{}{
					"Host": vmess.Host,
				},
			}
			vmessproxy := Proxy{
				Name:             vmess.Ps,
				Type:             "vmess",
				Server:           vmess.Add,
				Port:             vmess.Port,
				Cipher:           vmess.Scy,
				Uuid:             vmess.Id,
				AlterId:          vmess.Aid,
				Network:          vmess.Net,
				Tls:              vmess.Tls,
				Ws_opts:          ws_opts,
				Udp:              sqlconfig.Udp,
				Skip_cert_verify: sqlconfig.Cert,
			}
			proxys = append(proxys, vmessproxy)
		case u.Scheme == "vless":
			vless, err := DecodeVLESSURL(link)
			if err != nil {
				log.Println(err)
				continue
			}
			// 如果没有名字，就用服务器地址作为名字
			if vless.Name == "" {
				vless.Name = fmt.Sprintf("%s:%d", vless.Server, vless.Port)
			}
			ws_opts := map[string]interface{}{
				"path": vless.Query.Path,
				"headers": map[string]interface{}{
					"Host": vless.Query.Host,
				},
			}
			reality_opts := map[string]interface{}{
				"public-key": vless.Query.Pbk,
				"short-id":   vless.Query.Sid,
			}
			vlessproxy := Proxy{
				Name:               vless.Name,
				Type:               "vless",
				Server:             vless.Server,
				Port:               vless.Port,
				Servername:         vless.Query.Sni,
				Uuid:               vless.Uuid,
				Client_fingerprint: vless.Query.Fp,
				Network:            vless.Query.Type,
				Flow:               vless.Query.Flow,
				Ws_opts:            ws_opts,
				Reality_opts:       reality_opts,
				Udp:                sqlconfig.Udp,
				Skip_cert_verify:   sqlconfig.Cert,
			}
			proxys = append(proxys, vlessproxy)
		case u.Scheme == "hy" || u.Scheme == "hysteria":
			hy, err := DecodeHYURL(link)
			if err != nil {
				log.Println(err)
				continue
			}
			// 如果没有名字，就用服务器地址作为名字
			if hy.Name == "" {
				hy.Name = fmt.Sprintf("%s:%d", hy.Host, hy.Port)
			}
			hyproxy := Proxy{
				Name:             hy.Name,
				Type:             "hysteria",
				Server:           hy.Host,
				Port:             hy.Port,
				Auth_str:         hy.Auth,
				Up:               hy.UpMbps,
				Down:             hy.DownMbps,
				Alpn:             hy.ALPN,
				Peer:             hy.Peer,
				Udp:              sqlconfig.Udp,
				Skip_cert_verify: sqlconfig.Cert,
			}
			proxys = append(proxys, hyproxy)
		case u.Scheme == "hy2" || u.Scheme == "hysteria2":
			hy2, err := DecodeHY2URL(link)
			if err != nil {
				log.Println(err)
				continue
			}
			// 如果没有名字，就用服务器地址作为名字
			if hy2.Name == "" {
				hy2.Name = fmt.Sprintf("%s:%d", hy2.Host, hy2.Port)
			}
			hyproxy2 := Proxy{
				Name:             hy2.Name,
				Type:             "hysteria2",
				Server:           hy2.Host,
				Port:             hy2.Port,
				Auth_str:         hy2.Auth,
				Sni:              hy2.Sni,
				Obfs:             hy2.Obfs,
				Obfs_password:    hy2.ObfsPassword,
				Udp:              sqlconfig.Udp,
				Skip_cert_verify: sqlconfig.Cert,
			}
			proxys = append(proxys, hyproxy2)
		}
	}
	// 生成Clash配置文件
	return DecodeClash(proxys, sqlconfig.Clash)
}

// DecodeClash 用于解析 Clash 配置文件
func DecodeClash(proxys []Proxy, yamlfile string) ([]byte, error) {
	// 读取 YAML 文件
	var data []byte
	var err error
	if strings.Contains(yamlfile, "://") {
		resp, err := http.Get(yamlfile)
		if err != nil {
			log.Println("http.Get error", err)
			return nil, err
		}
		defer resp.Body.Close()
		data, err = ioutil.ReadAll(resp.Body)
		if err != nil {
			log.Printf("error: %v", err)
			return nil, err
		}
	} else {
		data, err = ioutil.ReadFile(yamlfile)
		if err != nil {
			log.Printf("error: %v", err)
			return nil, err
		}
	}
	// 解析 YAML 文件
	config := make(map[interface{}]interface{})
	err = yaml.Unmarshal(data, &config)
	if err != nil {
		log.Printf("error: %v", err)
		return nil, err
	}

	// 检查 "proxies" 键是否存在于 config 中
	proxies, ok := config["proxies"].([]interface{})
	if !ok {
		// 如果 "proxies" 键不存在，创建一个新的切片
		proxies = []interface{}{}
	}
	// 定义一个代理列表名字
	ProxiesNameList := []string{}
	// 添加新代理
	for _, p := range proxys {
		ProxiesNameList = append(ProxiesNameList, p.Name)
		proxies = append(proxies, p)
	}
	// proxies = append(proxies, newProxy)
	config["proxies"] = proxies
	// 往ProxyGroup中插入代理列表
	// ProxiesNameList := []string{"newProxy", "ceshi"}
	proxyGroups := config["proxy-groups"].([]interface{})
	for i, pg := range proxyGroups {
		proxyGroup, ok := pg.(map[string]interface{})
		if !ok {
			continue
		}
		// 如果 proxyGroup["proxies"] 是 nil，初始化它为一个空的切片
		if proxyGroup["proxies"] == nil {
			proxyGroup["proxies"] = []interface{}{}
		}

		// 清除 nil 值
		var validProxies []interface{}
		for _, p := range proxyGroup["proxies"].([]interface{}) {
			if p != nil {
				validProxies = append(validProxies, p)
			}
		}
		// 添加新代理
		for _, newProxy := range ProxiesNameList {
			validProxies = append(validProxies, newProxy)
		}
		proxyGroup["proxies"] = validProxies
		proxyGroups[i] = proxyGroup
	}

	config["proxy-groups"] = proxyGroups

	// 将修改后的内容写回文件
	newData, err := yaml.Marshal(config)
	if err != nil {
		log.Printf("error: %v", err)
	}
	return newData, nil
}
