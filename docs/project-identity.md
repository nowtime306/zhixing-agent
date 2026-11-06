# 知行 Agent 项目名称与研发署名

日期：2026-11-06  
项目名称：**知行 Agent（zhixing-agent）**  
研发与维护：**nowtime**  
GitHub：https://github.com/nowtime306/zhixing-agent  

- 主分支与默认展示分支：`main`
- 发布分支：`dev`
- 既有开发分支：`onwer_agent`（保留）

## 发布方式

按用户指定名称建立独立 GitHub 项目仓库，沿用现有开发分支及完整 Git 祖先历史；原仓库 `nowtime306/deepagents` 保留。新仓库沿用原仓库的公开可见性。新仓库首页展示知行 Agent 的功能、目录、开发部署记录和实际未验边界。

本地 `origin` 指向新仓库，`legacy` 保留原仓库地址。开发目录仍为 `D:\project\my_agent\deepagents`，避免改变正在运行服务的路径和数据归属。历史记录中的原仓库链接继续保留。

## 本次修改

- 根 README 改为知行 Agent 项目介绍，研发署名 nowtime。
- 平台发布元数据登记 `zhixing-agent`、nowtime 及新仓库地址；平台版本和内部组件标识保持。
- 前端包公开名称改为 `zhixing-agent-web`，更新仓库、首页、README 地址和作者；页面元数据增加产品名及 nowtime 作者。
- 自研 API 与评测包增加 nowtime 作者和知行项目说明；保留现有包名、导入名、版本及依赖。
- 根许可证保留 LangChain 原始版权与 MIT 条款，增加 nowtime 对平台新增部分的版权署名；Agent Chat UI 及 SDK 原许可证保持。
- 新增 `NOTICE.md` 说明平台贡献和上游来源。既有提交作者与历史不改写；本次及后续本仓库本地提交使用 nowtime 名称和当前 GitHub 账号的 no-reply 邮箱。

## 自动化与验证

新仓库暂不启用继承的上游 GitHub Actions 自动发布与定时任务，工作流文件保留，待针对本平台配置后再启用；本次没有触发 SDK 包发布。

已检查 JSON/TOML 元数据、平台作者、上游许可证及依赖保持；前端使用项目已有 TypeScript 6 完成 `--noEmit` 检查。改名不涉及数据库迁移、模型密钥、业务逻辑或现有正式服务切换，不据此生成新功能验收结果。

实际推送分支、提交 SHA、远端 HEAD 与默认分支校验另保存在本机私有 `.local/project-identity-20261106/` 回执中；根 `docs/releases/history.md` 记录本次名称变更。


## 2026-11-06 分支角色调整

按用户要求，`main` 是项目主分支及 GitHub 默认分支，`dev` 是发布分支。既有 `onwer_agent` 分支和完整历史保留。首次调整将当前平台代码及本次分支说明同步为 main/dev 的共同起点；本地原 main 是其祖先，仅做快进，不改写历史。

开发内容先合入 main，发布时选择已经验收的主分支提交推进 dev，并在发布记录中绑定版本、提交和验收结果。分支角色不自动授予部署或功能开放，也不把当前受限版本认定为完整验收。继承的上游自动工作流保持未启用。

仓库 README、前端 README 地址和平台发布分支元数据同步更新。本次没有删除其他远端分支、强制推送或改变现有运行服务。实际 refs、远端默认分支和本地当前分支的核验回执单独存本机 `.local/project-identity-20261106/`。
