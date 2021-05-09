# GitHub 组织成员墙

> 一家人就要整整齐齐

思路参考了[GitHubUsersWallOnREADME](https://github.com/AdlerED/GitHubUsersWallOnREADME)

差不多是 Node 版的实现，可以生成完整的 Markdown，支持过滤单个 Team 和 User

## 效果

## Developers2017

|                                                                 👷                                                                 |                                                                 👷                                                                 |                                                                 👷                                                                 |
| :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| <img height='48' width='48' src='https://avatars.githubusercontent.com/u/38371763?u=f2591d5ce6eb12505555c125d4aa1f7b2f52b7a6&v=4'> | <img height='48' width='48' src='https://avatars.githubusercontent.com/u/38653369?u=875b289f60c499d8cab93e644279a6457687d357&v=4'> | <img height='48' width='48' src='https://avatars.githubusercontent.com/u/38729424?u=043705d0497e11a50e6f34bea19a618d4fa0c9b3&v=4'> |
|                                            [@LijinPengT](https://github.com/LijinPengT)                                            |                                                [@Suvern](https://github.com/Suvern)                                                |                                             [@notlional](https://github.com/notlional)                                             |

## Developers2018

|                                                                 👷                                                                 |                                                                 👷                                                                 |                                                                 👷                                                                 |                                           👷                                            |                                           👷                                            |
| :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| <img height='48' width='48' src='https://avatars.githubusercontent.com/u/43375666?u=24ddb8566a26640affcd5a07b15ef6edc8e2e094&v=4'> | <img height='48' width='48' src='https://avatars.githubusercontent.com/u/44723574?u=1e7fec2ab19bfa58ffee8ce829f0219f962c8557&v=4'> | <img height='48' width='48' src='https://avatars.githubusercontent.com/u/45503859?u=747ed36415512121c45cd81ddd088e28599c2105&v=4'> | <img height='48' width='48' src='https://avatars.githubusercontent.com/u/62798068?v=4'> | <img height='48' width='48' src='https://avatars.githubusercontent.com/u/73732231?v=4'> |
|                                             [@LiuHao321](https://github.com/LiuHao321)                                             |                                             [@HiganFish](https://github.com/HiganFish)                                             |                                             [@abiscuit9](https://github.com/abiscuit9)                                             |                       [@leomaokai](https://github.com/leomaokai)                        |                       [@fuqinghan](https://github.com/fuqinghan)                        |

## 如何使用

### Clone 项目:

```shell
git clone https://github.com/Suvern/github-org-users-wall
```

### 安装依赖(需要 Node 环境):

```shell
npm i
```

### 获取 Personal Access Token

去[这里](https://github.com/settings/tokens)获取一个 token,权限只用勾上`read:org`就行,请保管好这个 token

### 配置

在项目根目录下的`config.js`里填写刚才的 token 和其他信息

### Run

执行,等待结果

```shell
npm run start
```
