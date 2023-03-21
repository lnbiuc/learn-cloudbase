# Cloudbase Node.js

## doc

[文档地址](https://docs.cloudbase.net/)

## 常用命令

```shell
# 安装cloudbase cli
npm i -g @cloudbase/cli
# 查看版本信息
tcb -h
# login
tcb login
# 创建一个新的function
tcb new <function name>
# 首次部署function，注：需要到cloudbaserc.json文件目录下部署
tcb fn deploy <function name>
# 查看已经部署的function
tcb fn list
# 更新function code
tcb fn code update <function name>
# 出发function
tcb fn invoke <function name>
```

## 其他命令

```shell
# 查看帮助
tcb fn -h
# 查看环境列表
tcb env list
# 安装依赖，注：需要在具体function文件夹下
npm i @cloudbase/node-sdk
```