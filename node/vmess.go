package node

import (
	"encoding/json"
	"fmt"
	"strconv"
	"strings"
)

type Vmess struct {
	Add  string `json:"add,omitempty"` // 服务器地址
	Aid  int    `json:"aid,omitempty"`
	Alpn string `json:"alpn,omitempty"`
	Fp   string `json:"fp,omitempty"`
	Host string `json:"host,omitempty"`
	Id   string `json:"id,omitempty"`
	Net  string `json:"net,omitempty"`
	Path string `json:"path,omitempty"`
	Port int    `json:"port,omitempty"`
	Ps   string `json:"ps,omitempty"`
	Scy  string `json:"scy,omitempty"`
	Sni  string `json:"sni,omitempty"`
	Tls  string `json:"tls,omitempty"`
	Type string `json:"type,omitempty"`
	V    string `json:"v,omitempty"`
}

// 开发者测试
func CallVmessURL() {
	vmess := Vmess{
		Add:  "xx.xxx.ru",
		Port: 2095,
		Aid:  0,
		Scy:  "auto",
		Net:  "ws",
		Type: "none",
		Id:   "7a737f41-b792-4260-94ff-3d864da67380",
		Host: "xx.xxx.ru",
		Path: "/",
		Tls:  "",
	}
	fmt.Println(EncodeVmessURL(vmess))
}

// vmess 编码
func EncodeVmessURL(v Vmess) string {
	// 如果备注为空，则使用服务器地址+端口
	if v.Ps == "" {
		v.Ps = v.Add + ":" + strconv.Itoa(v.Port)
	}
	// 如果版本为空，则默认为2
	if v.V == "" {
		v.V = "2"
	}
	param, _ := json.Marshal(v)
	return "vmess://" + Base64Encode(string(param))
}

// vmess 解码
func DecodeVMESSURL(s string) (Vmess, error) {
	if !strings.Contains(s, "vmess://") {
		return Vmess{}, fmt.Errorf("非vmess协议:%s", s)
	}
	param := Base64Decode(strings.Split(s, "://")[1])
	fmt.Println(param)
	var vmess Vmess
	err := json.Unmarshal([]byte(param), &vmess)
	if err != nil {
		fmt.Println(err)
		return Vmess{}, fmt.Errorf("json格式化失败:%s", s)
	}
	if CheckEnvironment() {
		fmt.Println("服务器地址", vmess.Add)
		fmt.Println("端口", vmess.Port)
		fmt.Println("path", vmess.Path)
		fmt.Println("uuid", vmess.Id)
		fmt.Println("alterId", vmess.Aid)
		fmt.Println("cipher", vmess.Scy)
		fmt.Println("client-fingerprint", vmess.Fp)
		fmt.Println("network", vmess.Net)
		fmt.Println("tls", vmess.Tls)
		fmt.Println("备注", vmess.Ps)
	}
	return vmess, nil
}
