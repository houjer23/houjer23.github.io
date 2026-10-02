# Jianyu Hou — 个人网站设计方案

本文件保留最初的设计提案，以下内容不代表最终页面。当前实现以 `index.html` 和 `assets/` 为准：仅保留简介、Publications 和四段 Experience；Hao Su Lab 为 Present，DexSeed 不显示会议状态，每段经历附技能标签，不含 CV。

## 定位

一个英文个人主页，同时服务研究合作、研究生申请和工程岗位招聘。
核心叙事是「机器人学习研究者，具备把系统落地的工程经验」。
以姓名作为网站品牌：Jianyu (Jerry) Hou；浏览器标题：Jianyu Hou | Robotics & AI。

内容依据：Jianyu Jerry Hou Resume v7.pdf。正式上线前核对论文作者列表、会议状态及可公开的项目素材。

## 视觉方向

采用简洁、现代的学术个人主页风格。阅读顺序清晰，论文、项目与经历是视觉重点。

- 背景：暖白 #FAF9F6；正文：深灰 #202420；次要文字：#586159。
- 强调色：蓝色 #245BDB，用于链接、选中状态和主要按钮。
- 分隔线：#E2E5DF；尽量少用阴影，通过留白和细线组织信息。
- 正文字体：系统 sans-serif；姓名标题：Georgia 或系统 serif，形成轻微对比。
- 页面最大宽度约 1080px，正文 16–18px；移动端左右留白 20px。
- 桌面端首页采用左侧介绍、右侧真实个人照片；没有照片时采用文字布局，不生成替代人像。
- 研究条目优先使用真实机器人实验图、论文图或短视频；素材尚未提供时保持文字条目。
- 轻量悬停效果即可；支持 prefers-reduced-motion，无强制动画或自动播放声音。

## 页面结构

第一版使用单页，导航锚点为 Research / Experience / Projects / About，另提供 CV 链接。

### 1. 首页介绍

姓名：Jianyu (Jerry) Hou

身份行：Computer Science @ UC San Diego

建议英文简介：

> I’m a computer science undergraduate at UC San Diego, interested in robot learning and dexterous manipulation. My work spans vision-based manipulation, real-world robotics systems, and software infrastructure. I previously conducted research in Hao Su’s lab and interned at Google.

链接：Research、CV、GitHub、LinkedIn、Email。

不要把 2026 年 6 月结束的研究经历或 9 月结束的实习写为当前任职。学位预计 2027 年 3 月完成，因此现阶段仍写 undergraduate。

### 2. Selected Research

放在首页介绍之后，以便访问者快速看到研究成果。

每条包含：真实配图（若有）、论文完整标题、作者列表、会议与状态、贡献说明，以及已确认的 Paper / Project / Code 链接。突出自己的姓名。

当前简历提供的条目：

| 简称 | 会议与状态（按简历） | 署名角色 |
| --- | --- | --- |
| EgoThumb | IEEE/RSJ IROS 2026 · Accepted | Co-first author |
| DexFLEX | CoRL 2026 · Accepted | Third author |
| DexSeed | ICLR 2027 · Submitted | Third author |

简历没有给出论文完整标题、摘要、作者列表或链接；这些内容需补齐，不能从简称推测。Submitted 明确显示为投稿状态。

### 3. Experience

采用紧凑的纵向列表，桌面端右侧显示日期。每段精选 1–2 句，突出工作内容。

- Google — Software Engineer Intern · Jun–Sep 2026：C++ identity provisioning service migration and end-to-end integration testing。
- Hao Su Lab — Undergraduate Researcher · Jul 2025–Jun 2026：vision-based dexterous manipulation、机器人数据采集和部署系统。
- AgenticEDU — Founder · May–Nov 2025：AI iPad note-taking app；LangGraph、Cloud Run 与 Firebase 后端。
- BioPACIFIC MIP — App Developer · May 2024–Jul 2025：scientific data analysis software、Swift 移动端与 backend APIs。
- Geoming AI — Software Engineer · Jun–Jul 2024：LLM-powered automation agents。
- Tsinghua University — Operating System Engineer · Jun–Sep 2023：Rust / ArceOS、内存管理、并发和 Raspberry Pi 机器人控制。

Google 部分仅采用可公开的高层描述。简历中的 live traffic migration 是 planning，不写成已经完成的上线成果。

### 4. Selected Projects

桌面端两列，手机端单列。每个项目提供用途、一句技术贡献和真实链接。

优先选择 AgenticEDU、科学软件 / Swift App、ArceOS 机器人系统。研究项目已在 Research 展示，可用链接连接相关工程贡献，避免重复长篇介绍。

项目没有公开代码或演示时，直接省略对应按钮；不放空链接、虚构截图或编造使用数据。

### 5. About / Education / Honors

简短展示：UCSD B.S. Computer Science（expected Mar 2027）、UCSB transfer coursework，以及研究兴趣。

精选荣誉：UCSD Regents Scholarship、USACO Platinum。其他荣誉可放入简短列表。

技能融入经历和项目描述；若保留独立 Skills，按 Robotics & ML / Systems / Product 分组，使用文字而非熟练度进度条。

### 6. 联系与页脚

GitHub：https://github.com/houjer23

LinkedIn：https://www.linkedin.com/in/jianyu-hou

Email：jerryhoujy@gmail.com（使用 mailto 链接）。不展示个人手机号。

## 桌面端布局草图

```text
Jianyu Hou                    Research  Experience  Projects  About  CV
──────────────────────────────────────────────────────────────────────

Jianyu (Jerry) Hou                              [真实个人照片，可选]
Computer Science @ UC San Diego
简短介绍，约 3–4 行
Research →    CV    GitHub    LinkedIn    Email

Selected Research
[实验图，可选]  EgoThumb   /  IROS 2026 · Accepted
                完整标题、作者、贡献、真实链接
[实验图，可选]  DexFLEX    /  CoRL 2026 · Accepted
[实验图，可选]  DexSeed    /  ICLR 2027 · Submitted

Experience
Google          Software Engineer Intern                  Jun–Sep 2026
Hao Su Lab      Undergraduate Researcher                Jul 2025–Jun 2026
其他经历……

Selected Projects
[AgenticEDU]                   [Scientific Software / Swift App]
[ArceOS Robotics]

About / Education / Honors

Email    GitHub    LinkedIn
```

## 第一版实现

采用原生 HTML / CSS 和少量 JavaScript，以静态文件直接发布到 GitHub Pages。当前页面规模无需额外框架或构建流程。

建议目录：

```text
index.html
assets/
  css/style.css
  js/main.js           # 仅在确实需要交互时添加
  images/              # 真实头像、研究和项目素材
  cv/jianyu-hou-cv.pdf
.nojekyll
README.md
DESIGN.md
```

基础要求：语义化 HTML、键盘可操作、清晰焦点状态、移动端导航、图片替代文本、足够的颜色对比、手机布局检查，以及页面 title / description / Open Graph 元信息。

GitHub Pages 的发布设置选择 main 分支根目录，目标地址为 https://houjer23.github.io。未来可绑定独立域名。

## 实施顺序与素材

1. 先实现文字完整、手机可读的单页，确保导航、CV 和联系方式有效。
2. 补齐三篇论文完整标题、作者、状态与公开链接。
3. 加入真实个人照片和研究 / 项目图片；按实际授权情况添加实验短视频。
4. 检查事实、链接、移动端和可访问性，然后配置 GitHub Pages 发布。

HTML/CSS 已实现，论文采用参考页的真实标题、作者和预览图，并将 EgoThumb 放在首位。原始简历仍在用户提供的 Desktop 路径，网站不包含 PDF 副本。
