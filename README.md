# Cloudbase Node.js

## doc

[文档地址](https://docs.cloudbase.net/)
[数据库文档](https://docs.cloudbase.net/api-reference/server/node-sdk/database/database)

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

## 2023/03/21

由于tencent对于云开发的更新和维护较少，同时云开发成本较高，每月最低二十元的费用并不低也不划算，cloudbase vue插件甚至不支持vue3，所以决定暂时放弃云开发，等待后续cloudbase vue插件支持vue3或者云开发能降价到时候会再考虑使用云开发。目前来说还是自建服务器比较划算。