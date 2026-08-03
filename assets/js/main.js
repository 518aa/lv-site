(function () {
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 下载按钮：APK 直链 + 统计
  document.querySelectorAll('[data-download]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const url = btn.dataset.download;
      if (url) {
        // 给个微小的延时，让浏览器正确触发下载而非新窗口跳转
        setTimeout(() => { window.location.href = url; }, 50);
      }
    });
  });

  // 滚动时导航栏样式
  const nav = document.querySelector('.site-nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 截图轮播（手机框 + 大图，悬停切换）
  const gallery = document.querySelector('[data-gallery]');
  if (gallery) {
    const main = gallery.querySelector('[data-gallery-main]');
    const dots = gallery.querySelectorAll('[data-gallery-dot]');
    const items = JSON.parse(gallery.dataset.gallery);
    let idx = 0;
    function show(i) {
      idx = (i + items.length) % items.length;
      if (main) main.src = items[idx].src;
      dots.forEach((d, n) => d.classList.toggle('active', n === idx));
    }
    dots.forEach((d, n) => d.addEventListener('click', () => show(n)));
    setInterval(() => show(idx + 1), 4500);
  }

  // FAQ 手风琴
  document.querySelectorAll('.faq-item summary').forEach((s) => {
    s.addEventListener('click', () => {
      const item = s.parentElement;
      setTimeout(() => {
        document.querySelectorAll('.faq-item[open]').forEach((o) => {
          if (o !== item) o.removeAttribute('open');
        });
      }, 0);
    });
  });
})();