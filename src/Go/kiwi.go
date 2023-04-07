package main

// 导入fmt包
import (
	"fmt"
	"regexp"
)

// 邮箱正则
var emailRegexp = regexp.MustCompile(`^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$`)

// 验证邮箱
func validateEmail(email string) bool {
	return emailRegexp.MatchString(email)
}

// 执行
func main() {
	fmt.Println(validateEmail("223427@ee.com"))
	fmt.Println(validateEmail("223427@ee"))
}
