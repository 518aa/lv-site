// 三语 i18n — 日语默认 / 简中 / English
// 用法：window.t('hero.title') 自动按当前语言返回字符串
// 切换语言：window.setLang('ja' | 'en' | 'zh')

(function () {
  const STRINGS = {
    ja: {
      'meta.title': 'lv — ロック画面でも録れる、証拠保全レコーダー',
      'meta.description': '音量キー・シェイク・ユーザー補助でいつでも録音/録画開始。パスワード保護付き。Android 7+対応。',
      'nav.features': '機能',
      'nav.screens': '画面',
      'nav.pricing': '価格',
      'nav.faq': 'FAQ',
      'nav.download': 'ダウンロード',
      'hero.badge': 'v1.0 · Android 7+',
      'hero.title': 'ロック画面でも、もう一台の録音を。',
      'hero.subtitle': '音量キー・シェイク・ユーザー補助キーで、待ち時間ゼロで録音/録画開始。証拠保全のための自己防衛ツール。',
      'hero.cta': '無料でダウンロード',
      'hero.cta.sub': 'APK直接 · 3.0MB · 試用回数つき',
      'hero.alt': '別のインストール方法',
      'features.eyebrow': '機能',
      'features.title': '「録りたい瞬間」を絶対逃さない設計',
      'features.subtitle': '画面を見なくても、片手ですぐに録れる。残す証拠の質に直結する6つの機能。',
      'f1.title': 'ロック画面・バックグラウンドでも録音',
      'f1.desc': '音量+の2回押しやユーザー補助ショートカットで、画面ロック中でも即座に録音開始。取り逃しゼロ。',
      'f2.title': '音量キー / シェイク / イヤホン',
      'f2.desc': '物理ボタン、シェイク、ヘッドセットのセンターボタン、Bluetooth再生キー — 好みの発火方法を選べます。',
      'f3.title': 'パスワード保護',
      'f3.desc': 'アプリ起動とファイル閲覧にパスワード必須。失敗回数でロックアウト。端末を他人に渡しても安全。',
      'f4.title': '音声 + 動画の二刀流',
      'f4.desc': 'CameraX で高画質録画。前面 / 背面カメラ切替。音声だけ録りたい時はマイクだけ起動。',
      'f5.title': '証拠保全に強いファイル形式',
      'f5.desc': '端末内のプライベート領域に保存、共有は明示的に。タイムスタンプ込み、SDカードに出して保全可能。',
      'f6.title': '一生に一度の買い切り',
      'f6.desc': '無料試用 → 19.8 USDT（3チェーン対応）で永久ロック解除。再課金なし、サブスクなし。',
      'screens.eyebrow': '画面',
      'screens.title': 'シンプルな操作と、わかる安心',
      'use.title': 'どんな場面で使えますか',
      'use.subtitle': '本ツールは<strong>自己防衛・合法的証拠保全</strong>専用です。下記以外の用途は利用規約で禁止。',
      'u1.title': '商談・契約交渉',
      'u1.desc': '口約束だけで進みがちな交渉現場で、後日の議事録として。',
      'u2.title': '取材・インタビュー',
      'u2.desc': '取材相手の許諾を取り、録音で正確な記録を残す。',
      'u3.title': '被害届の添付資料',
      'u3.desc': '騒音・迷惑行為・セクハラなどの証拠を確実に押さえる。',
      'u4.title': '日常生活の記録',
      'u4.desc': '介護現場、通院時、学校面談など、第三者の同席が心強い場面。',
      'pricing.eyebrow': '価格',
      'pricing.title': '試して、納得してから買う',
      'pricing.subtitle': '最初に何回か無料で使えます。続けて使う場合に限り、永久ライセンス料をお支払いください。',
      'p1.name': '無料試用',
      'p1.price': '¥0',
      'p1.desc': 'アプリ起動直後から使えます',
      'p1.f1': '音声 / 動画 録音が回数制限つき',
      'p1.f2': '全機能（パスワード・ショートカット含む）が使い放題',
      'p1.f3': '回数を使い切ると「永久ライセンス」に誘導',
      'p1.cta': 'ダウンロード',
      'p2.name': '永久ライセンス',
      'p2.price': '19.8 USDT',
      'p2.desc': '一回払いでずっと使えます',
      'p2.f1': '回数制限なし、永久',
      'p2.f2': '3チェーン（TRC20 / ERC20 / BEP20）対応',
      'p2.f3': '支払い後10秒以内に自動反映',
      'p2.f4': '将来のアップデートも追加課金なし',
      'p2.cta': 'アプリ内で購入',
      'p2.cta.hint': '（アプリを開いて設定 → 購入状態から）',
      'faq.title': 'よくある質問',
      'q1.q': 'Google Play からインストールできますか？',
      'q1.a': 'いいえ、本ツールは自己防衛目的のため Play ストアのガイドラインに一部合わず、現状は APK 直接配布のみです。apkpure 等のミラーを通じてインストールできます。',
      'q2.q': '「未知のソース」のインストール警告が出ますが大丈夫？',
      'q2.a': 'はい、本APKはデバッグキーストアで署名された配布用ビルドです。中身はソースコード公開予定。自己責任でインストールいただければ、改竄のリスクはありません。',
      'q3.q': '音は自動で録れますか？常に聞き耳を立てる感じですか？',
      'q3.a': 'いいえ。明示的にショートカット（音量+の2回押し等）を発火した瞬間にのみ録音が開始されます。常時監視・自動起動は一切ありません。',
      'q4.q': 'USB ケーブルで PC にファイルを取り出せますか？',
      'q4.a': 'はい、設定 → ファイルの「共有」メニューから、共通ディレクトリ（SDカードやDownloads）にコピーできます。',
      'q5.q': '録音データはネットに送信されますか？',
      'q5.a': 'いいえ、本アプリはオフライン専用です。インターネット権限は将来のアップデート用通知受信のためだけ。録音データが外部に送信されることはありません。',
      'q6.q': '19.8 USDT の支払い後、反映されない場合は？',
      'q6.a': 'アプリ内の「取引ハッシュ（TXID）」を手動入力することで即時検証できます。ハッシュなしでも数十秒で自動検出されます。',
      'legal.title': '⚠ 本ツールの正しい使い方',
      'legal.body': '本ツールは<strong>自己防衛・合法的証拠保全</strong>専用です。商取引交渉、取材、被害届、日常の記録など、<strong>自分が録音していることを相手に明示できる場面</strong>でご利用ください。<br><br>他者を盗撮・盗録する行為は、利用規約および多くの国・地域の法令で禁じられています。違反によって生じた法的責任はすべて使用者に帰属し、開発者は一切責任を負いません。',
      'legal.terms': '利用規約',
      'legal.privacy': 'プライバシーポリシー',
      'final.title': 'いますぐ、1分以内に録音を始められます',
      'final.subtitle': 'ダウンロードして、設定から音量+2回押しを選ぶだけ。最初の数回は完全無料です。',
      'final.cta': 'lv をダウンロード',
      'footer.copyright': '© 2026 lv',
      'footer.legal': '規約',
      'footer.contact': 'お問い合わせ',
    },
    en: {
      'meta.title': 'lv — Record from the lock screen. Stay protected.',
      'meta.description': 'Volume key, shake, or accessibility shortcut — start recording instantly without unlocking your phone. Self-defense recorder for Android 7+.',
      'nav.features': 'Features',
      'nav.screens': 'Screens',
      'nav.pricing': 'Pricing',
      'nav.faq': 'FAQ',
      'nav.download': 'Download',
      'hero.badge': 'v1.0 · Android 7+',
      'hero.title': 'Record from the lock screen. Without missing a beat.',
      'hero.subtitle': 'Start audio or video in under a second — even with the screen locked, even when you’re in another app. A self-defense recorder built for evidence preservation.',
      'hero.cta': 'Free download',
      'hero.cta.sub': 'Direct APK · 3.0 MB · Free trial included',
      'hero.alt': 'Other install methods',
      'features.eyebrow': 'Features',
      'features.title': 'Designed for the moments you can’t afford to miss',
      'features.subtitle': 'One-handed, eyes-free recording. Six features that turn your phone into a dependable witness.',
      'f1.title': 'Record from the lock screen & background',
      'f1.desc': 'Volume-up double-tap or accessibility shortcut. Start recording instantly without unlocking or even looking at the phone.',
      'f2.title': 'Volume keys · Shake · Headset button',
      'f2.desc': 'Pick the trigger that fits the moment: physical buttons, shake, wired headset, or Bluetooth play/pause.',
      'f3.title': 'Password protected',
      'f3.desc': 'App launch and file access both require a password. Auto lockout after repeated failures. Safe even if someone takes your phone.',
      'f4.title': 'Audio + video, both',
      'f4.desc': 'CameraX-powered recording with front / rear switch. Mic-only mode when you don’t need video.',
      'f5.title': 'Evidence-grade file handling',
      'f5.desc': 'Files stored in private app storage; explicit share only. Export to SD card with timestamp preserved.',
      'f6.title': 'One-time license. No subscription.',
      'f6.desc': 'Try free for a few recordings. Unlock forever for 19.8 USDT (3 chains). Never pay again.',
      'screens.eyebrow': 'Screens',
      'screens.title': 'Simple to use, hard to misuse',
      'use.title': 'What it’s for',
      'use.subtitle': 'This tool is for <strong>self-defense and lawful evidence preservation only</strong>. All other uses are prohibited by the terms.',
      'u1.title': 'Business & contract negotiations',
      'u1.desc': 'Verbal-only agreements are fragile. A timestamped recording is your safety net.',
      'u2.title': 'Interviews & journalism',
      'u2.desc': 'Capture the full quote, not your paraphrase. Standard practice in serious reporting.',
      'u3.title': 'Evidence for complaints',
      'u3.desc': 'Harassment, noise complaints, disputes — recording first, deciding later.',
      'u4.title': 'Everyday protection',
      'u4.desc': 'Medical appointments, school meetings, caregiver situations — anywhere a third-party witness helps.',
      'pricing.eyebrow': 'Pricing',
      'pricing.title': 'Try it free. Pay once if you keep it.',
      'pricing.subtitle': 'A few free recordings on first install. If you find it useful, unlock forever for 19.8 USDT.',
      'p1.name': 'Free trial',
      'p1.price': '¥0',
      'p1.desc': 'Available immediately after install',
      'p1.f1': 'Audio / video recording with a usage cap',
      'p1.f2': 'All features unlocked during trial',
      'p1.f3': 'Once you hit the cap, prompted to upgrade',
      'p1.cta': 'Download',
      'p2.name': 'Lifetime license',
      'p2.price': '19.8 USDT',
      'p2.desc': 'Pay once, use forever',
      'p2.f1': 'No cap. Forever.',
      'p2.f2': 'TRC20 / ERC20 / BEP20 supported',
      'p2.f3': 'Auto-detected within seconds',
      'p2.f4': 'All future updates included',
      'p2.cta': 'Unlock inside the app',
      'p2.cta.hint': '(Open the app → Settings → Purchase)',
      'faq.title': 'FAQ',
      'q1.q': 'Can I install it from Google Play?',
      'q1.a': 'Not yet. The app doesn’t fit a few Play Store policies for self-defense tools, so it ships as a direct APK. Mirrors (e.g. APKPure) work too.',
      'q2.q': 'I get a warning about "unknown sources". Is this safe?',
      'q2.a': 'Yes — the APK is signed with a stable debug keystore. The source will be public. Verify by checking the SHA-256 of the file before installing.',
      'q3.q': 'Does it always listen in the background?',
      'q3.a': 'No. Recording starts only when you press the configured shortcut. No passive monitoring, no always-on capture.',
      'q4.q': 'How do I get the files onto my PC?',
      'q4.a': 'Use the in-app Share menu to copy to a public folder (Downloads / SD card), then transfer via USB.',
      'q5.q': 'Are recordings uploaded anywhere?',
      'q5.a': 'No. The app is offline-first. INTERNET permission exists only for future update notifications. No audio or video leaves your device.',
      'q6.q': 'I paid in USDT but the app didn’t unlock.',
      'q6.a': 'Open the unlock screen in the app and paste your transaction hash. Verification is instant. Most payments auto-detect in under a minute.',
      'legal.title': '⚠ Use this tool correctly',
      'legal.body': 'This tool is for <strong>self-defense and lawful evidence preservation only</strong>. Use it where you would announce the recording out loud — contract talks, interviews, formal meetings. <br><br>Secretly recording others in places where they have a reasonable expectation of privacy may violate local laws. All liability rests with the user.',
      'legal.terms': 'Terms',
      'legal.privacy': 'Privacy',
      'final.title': 'Start recording in under a minute',
      'final.subtitle': 'Download, set your shortcut, try a few recordings. Free.',
      'final.cta': 'Download lv',
      'footer.copyright': '© 2026 lv',
      'footer.legal': 'Terms',
      'footer.contact': 'Contact',
    },
    zh: {
      'meta.title': 'lv — 锁屏也能录，留证专用录音录像 App',
      'meta.description': '音量键/摇一摇/无障碍快捷键，一秒开始录制，锁屏后台也能用。Android 7+。',
      'nav.features': '功能',
      'nav.screens': '界面',
      'nav.pricing': '价格',
      'nav.faq': '常见问题',
      'nav.download': '下载',
      'hero.badge': 'v1.0 · Android 7+',
      'hero.title': '锁屏也能录，再不漏关键那一秒。',
      'hero.subtitle': '音量键双击 / 摇一摇 / 无障碍快捷键，三种方式一秒开录。专为自我保护和合法留证而生。',
      'hero.cta': '免费下载',
      'hero.cta.sub': 'APK 直链 · 3.0MB · 含免费试用',
      'hero.alt': '其它安装方式',
      'features.eyebrow': '核心功能',
      'features.title': '为"不能漏的那一秒"而设计',
      'features.subtitle': '单手、闭眼都能操作。六个功能，把手机变成可靠的证人。',
      'f1.title': '锁屏 + 后台也能录',
      'f1.desc': '音量+双击或无障碍快捷键，锁屏状态下也能秒开录，不用解锁，不用看屏幕。',
      'f2.title': '三种触发方式',
      'f2.desc': '音量键双击、用力摇一摇、有线耳机中央键、蓝牙播放键 — 挑一个最顺手的方式。',
      'f3.title': '密码保护',
      'f3.desc': '进 App、看文件都要密码。输错多次自动锁定。把手机给别人也放心。',
      'f4.title': '录音 + 录像都要',
      'f4.desc': 'CameraX 高清录制，前后摄切换。只想要声音时，关闭画面省电。',
      'f5.title': '取证级文件管理',
      'f5.desc': '文件存 App 私有目录，分享需明确操作。可一键导出到 SD 卡，保留原始时间戳。',
      'f6.title': '一次买断，没有订阅',
      'f6.desc': '前几次免费试录，觉得有用再付 19.8 USDT（支持三条链）永久解锁。绝不二次收费。',
      'screens.eyebrow': '界面',
      'screens.title': '上手三秒就会，按钮名还能改',
      'use.title': '它适合这些场景',
      'use.subtitle': '本工具仅用于<strong>自我保护和合法留证</strong>，其它用途均被协议禁止。',
      'u1.title': '商务谈判 / 合同会商',
      'u1.desc': '口头承诺易翻脸，录下来就是底牌。',
      'u2.title': '采访 / 调研',
      'u2.desc': '原话记录，避免转述走样。',
      'u3.title': '投诉 / 维权留证',
      'u3.desc': '噪声、骚扰、不公对待 — 先录下来再说。',
      'u4.title': '日常生活',
      'u4.desc': '就医面诊、家长会、老人陪护 — 有第三方记录在场更安心。',
      'pricing.eyebrow': '价格',
      'pricing.title': '先用免费，满意再买',
      'pricing.subtitle': '安装即可免费录几次。觉得离不开，再付 19.8 USDT 永久解锁。',
      'p1.name': '免费试用',
      'p1.price': '¥0',
      'p1.desc': '装完就能用',
      'p1.f1': '音视频录制有次数限制',
      'p1.f2': '所有功能（密码、快捷键）都能用',
      'p1.f3': '次数用完会引导去永久解锁',
      'p1.cta': '下载',
      'p2.name': '永久解锁',
      'p2.price': '19.8 USDT',
      'p2.desc': '一次付费，永远使用',
      'p2.f1': '无次数限制，永久',
      'p2.f2': 'TRC20 / ERC20 / BEP20 三条链都行',
      'p2.f3': '付款后几十秒内自动识别',
      'p2.f4': '未来所有更新都免费',
      'p2.cta': 'App 内购买',
      'p2.cta.hint': '（打开 App → 设置 → 购买状态）',
      'faq.title': '常见问题',
      'q1.q': '能从 Google Play 安装吗？',
      'q1.a': '暂时不能。本工具属于"自我保护"类，部分策略与 Play 商店要求冲突，目前只通过 APK 直链分发，APKPure 等镜像站也收录了。',
      'q2.q': '安装时提示"未知来源"，安全吗？',
      'q2.a': '安全。APK 用稳定的调试签名密钥签名，源码将公开。安装前可自行校验 SHA-256。',
      'q3.q': '会不会偷偷在后台一直监听？',
      'q3.a': '不会。只有你按设定的快捷键那一刻才会启动录制。无被动监听，无自动录音。',
      'q4.q': '怎么把文件传到电脑？',
      'q4.a': 'App 内文件页 → 分享 → 复制到公共目录（Downloads / SD 卡），再用 USB 拷出即可。',
      'q5.q': '录音数据会上传吗？',
      'q5.a': '不会。本 App 完全离线。INTERNET 权限仅用于将来的更新通知。音视频数据绝不离机。',
      'q6.q': '付了 USDT 但 App 没解锁？',
      'q6.a': 'App 内解锁页 → 粘贴交易哈希（TXID） → 立即验证完成。大多数付款几十秒内自动识别。',
      'legal.title': '⚠ 请正确使用本工具',
      'legal.body': '本工具仅用于<strong>自我保护和合法留证</strong>。请在<strong>你可以当面告知对方正在录音</strong>的场景下使用 — 商业谈判、采访、正式会议。<br><br>在他人有合理隐私期待的场所偷录偷拍，可能违反当地法律。一切法律后果由使用者本人承担，开发者不承担任何责任。',
      'legal.terms': '用户协议',
      'legal.privacy': '隐私政策',
      'final.title': '一分钟内，开始第一段录音',
      'final.subtitle': '下载 → 设置里选个快捷键 → 试几次。前几次完全免费。',
      'final.cta': '下载 lv',
      'footer.copyright': '© 2026 lv',
      'footer.legal': '协议',
      'footer.contact': '联系',
    },
  };

  const LANG_KEY = 'lv-lang';
  const supported = ['ja', 'en', 'zh'];

  function detect() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && supported.includes(saved)) return saved;
    const nav = (navigator.language || 'ja').toLowerCase();
    if (nav.startsWith('zh')) return 'zh';
    if (nav.startsWith('en')) return 'en';
    return 'ja';
  }

  function apply(root) {
    root = root || document;
    const lang = currentLang();
    root.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = STRINGS[lang][key];
      if (val !== undefined) el.innerHTML = val;
    });
    root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const map = el.getAttribute('data-i18n-attr').split(' ');
      map.forEach((pair) => {
        const [attr, key] = pair.split(':');
        const val = STRINGS[lang][key];
        if (val !== undefined) el.setAttribute(attr, val);
      });
    });
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.langSwitch === lang);
    });
  }

  let currentLang = detect;

  window.setLang = function (lang) {
    if (!supported.includes(lang)) return;
    localStorage.setItem(LANG_KEY, lang);
    currentLang = () => lang;
    apply();
  };

  window.t = function (key) {
    return STRINGS[currentLang()][key] || key;
  };

  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.setLang(btn.dataset.langSwitch);
      });
    });
  });
})();