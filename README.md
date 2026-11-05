# 知行 Agent · zhixing-agent

**研发与维护：nowtime**

知行 Agent 是由 nowtime 研发与维护的中文 AI Agent 平台，整合开源智能体框架，提供智能对话、自主任务、知识检索和可视化工作流，以及模型配置、权限和运行治理。

- 项目仓库：https://github.com/nowtime306/zhixing-agent
- 研发署名：**nowtime**（GitHub：[@nowtime306](https://github.com/nowtime306)）
- 开发分支：`onwer_agent`
- 平台版本：`0.2.0`

## 平台能力

- **智能对话**：模型选择、会话历史、附件与图片输入、联网接入、SSE 事件及用量统计。
- **模型管理**：通过中文页面维护模型用途、服务商、协议、密钥和启停状态，密钥加密保存。
- **知识与工具**：文档管理、向量与混合检索、重排、MCP、Skills 和知识资源授权。
- **自主任务**：持久任务、隔离执行、审批、预算控制、恢复和成果管理。
- **可视化工作流**：画布配置、节点调试、运行记录、版本发布、历史恢复与复制。
- **平台治理**：注册与权限、组织管理、资源引用追溯、运行审计和 Token 用量。
- **评测**：DeepEval 集成及受控 CLI 场景验证。

上述能力描述代码范围；具体部署的开放状态和验收边界以交付记录为准。当前受限部署仍关闭 Work、自动任务、评测和媒体后台；平台持久评测驱动、完整 A20 准入、B100 与部分正式页面验收尚未完成，不将受控案例或接口测试视为全平台验收。

## 工程目录

- `apps/web/`：中文 Web 界面，基于 Next.js、React 和 Agent Chat UI 改造。
- `services/api/`：FastAPI 平台服务、认证权限、业务资源和执行调度。
- `services/evaluation/`：独立评测运行器与受控场景。
- `services/sandbox/`：OpenSandbox 本地执行环境相关配置。
- `libs/`：保留的 Deep Agents SDK 与上游组件。
- `docs/`：需求、开发、测试、部署和版本记录。

## 开发与部署文档

- [开发实施文档](docs/development-plan.md)
- [系统部署文档](docs/system-deployment.md)
- [本轮交付范围与未验项目](docs/remaining-cases-release-plan-2026-11-05.md)
- [独立测试记录](docs/remaining-cases-independent-qa-2026-11-05.md)
- [部署验证记录](docs/remaining-cases-production-deployment-2026-11-05.md)
- [版本与提交历史](docs/releases/history.md)
- [项目更名与发布记录](docs/project-identity.md)

仓库不包含本机数据库、模型密钥、账号凭据和私有运行证据。部署时应配置独立的数据库、存储、密钥和运行权限，不将开发环境的路径或端口约定直接当成通用部署配置。

## 开源基础与署名

知行 Agent 的平台层新增实现、中文交互与业务集成由 **nowtime** 研发和维护。本仓库在 [LangChain Deep Agents](https://github.com/langchain-ai/deepagents) 源码基础上扩展，前端基于 [Agent Chat UI](https://github.com/langchain-ai/agent-chat-ui) 改造，并使用 LangGraph、LangChain、OpenSandbox、DeepEval 等组件。

保留上游原有作者、提交历史和许可证。平台署名不替代上游组件的署名；详见 [来源与贡献说明](NOTICE.md)、[根许可证](LICENSE) 及 [Agent Chat UI 许可证](apps/web/LICENSE)。
