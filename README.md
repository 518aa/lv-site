# lv 官网 — 部署指南

AI Studio 风格（极简 / 留白 / 金色点缀）的单页落地站。
三语（日/英/中）i18n 自动切换，APK 直链下载。

```
site/
├── index.html              # 主页（所有文案通过 i18n.js 渲染）
├── 404.html                # 兜底页
├── firebase.json           # Firebase Hosting 配置（缓存/安全头）
├── .firebaserc             # Firebase 项目名（待改名）
├── assets/
│   ├── css/style.css       # 单一样式表
│   ├── js/i18n.js          # 日/英/中 文案
│   ├── js/main.js          # 滚动 / 截图轮播 / FAQ 手风琴
│   └── img/
│       ├── icon.svg        # App 图标（来自 ic_launcher.xml）
│       ├── favicon.svg
│       └── screenshots/    # 主屏 / 设置 / 锁屏 / 密码
└── public/
    └── app-release.apk     # 待分发 APK（来自 ../app/build/outputs/apk/release/）
```

---

## 🚀 部署到 Firebase Hosting（免费 web.app 子域名）

> Firebase 在中国的可达性：`web.app` CDN 可达，但 `firebase.google.com` / `firebase.googleapis.com` 被 GFW 拦截。
> 若你在中国大陆且无代理，部署 CLI 跑不起来；切换到 **GitHub Actions 自动部署** 或手动上传。

### 准备工作
1. 注册 Google 账号 → 打开 [Firebase 控制台](https://console.firebase.google.com/)
2. 新建项目（名字随你，比如 `lv-recorder`）
3. 把 `.firebaserc` 里的 `default` 改成你的 Firebase 项目 ID

### 方式 A：本机一键部署（需要能访问 Google）

```bash
cd site
npm i -g firebase-tools        # 安装 CLI
firebase login                 # 浏览器登录
firebase use --add             # 选刚建好的项目
firebase deploy --only hosting
```

部署成功后会得到 `https://lv-recorder.web.app`。

### 方式 B：GitHub Actions 自动部署（推荐，国内也能用）

把 `site/` 整个推到 GitHub，workflow 文件 `.github/workflows/firebase-deploy.yml`：

```yaml
name: Deploy to Firebase Hosting
on:
  push:
    branches: [ main ]
    paths: [ 'site/**' ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: w9jds/firebase-action@v3
        with:
          args: deploy --only hosting --project lv-recorder
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```

1. 在本地 `firebase login:ci` 拿到 token
2. 推到 GitHub → Settings → Secrets → 新建 `FIREBASE_TOKEN`
3. 以后改 `site/` 下的文件，push 即自动部署

---

## 🌐 绑定自定义域名

**Firebase Hosting 自定义域**（免费，自动 HTTPS）：
1. 控制台 → Hosting → Add custom domain
2. 输入 `lv-app.com`（或你想要的）
3. 去域名注册商（Cloudflare Registrar / 阿里云 / Porkbun）加 DNS：
   - `lv-app.com` → A 记录 → `151.101.1.195` 和 `151.101.65.195`
   - `www` → CNAME → `lv-recorder.web.app`
4. 等几分钟，Firebase 自动签发 Let's Encrypt 证书

**Google 域名替代方案**：
- 如果你买的是 `*.dev` / `*.app` 后缀（HSTS 强制 HTTPS），直接 A 记录即可
- 不想花钱用域名：直接用免费的 `*.web.app`，已默认 HTTPS

---

## 📦 重新构建并替换 APK

每次改完源码后：
```bash
cd ..
./gradlew assembleRelease
cp app/build/outputs/apk/release/app-release.apk site/public/app-release.apk
```

也可以加个 gradle task 自动复制：
```kotlin
// app/build.gradle.kts 末尾
tasks.register("copyApkToSite") {
    dependsOn("assembleRelease")
    doLast {
        copy {
            from("build/outputs/apk/release/app-release.apk")
            into("../site/public/")
        }
    }
}
```

---

## ✏️ 改文案

所有可见文案都在 `assets/js/i18n.js` 的 `STRINGS` 对象里。
改完刷新页面即可（Ctrl+Shift+R 强制清缓存）。

要新增语言：在 `STRINGS` 里加一个 key（`fr`, `ko`, …），然后在 `supported` 数组和顶栏 `.lang-switch` 加按钮。

---

## 🎨 替换为 AI Studio / Stitch 生成的版本

如果你之后在能访问 Google 的环境里用 AI Studio 重新生成：
1. 把 `index.html` / `assets/css/style.css` 整组覆盖
2. **保留 `assets/js/i18n.js`** — 替换版本里 `<span data-i18n="...">` 的 key 即可
3. `assets/img/screenshots/` 几张图也保留，这是和 app 实际界面一致的素材

---

## ⚠ 法律声明

落地页里有「严禁偷拍」的高亮警告。
如果面向中国大陆，请额外加入：
- 公安备案号（域名 ICP 备案）
- 软件著作权登记号（可选但建议）

**中国大陆分发 APK 的合规提醒**：
- 直接挂 APK 链接下载在国内属于违规应用分发
- 需要走应用商店（华为/小米/OPPO/VIVO/应用宝…）上架或企业签名
- 或通过 Google Play / 海外渠道面向海外用户