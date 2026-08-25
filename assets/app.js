const projects = [
  {
    id: 'intro-destinybook-v4',
    title: '角色片头：命运之页',
    label: '片头 · 自由创作 V4',
    date: '2026-08-25',
    duration: '10.125 秒',
    description: '只保留首尾视觉边界，中间由一张魔法纸页串联星图、课堂公式、变形学披肩、光蝶与三人汇合；内容更丰富，同时保持连续和清晰。',
    cover: 'storyboards/intro_10s_v1/Intro_05_Ensemble_Hero.png',
    video: 'Intro_10s_destinybook_v4_00001.mp4',
    script: 'scripts/Intro_10s_destinybook_v4.md',
    storyboards: [
      ['storyboards/intro_10s_v1/Intro_01_Roman_Arrival.png', '首帧', '罗兰降临 · 魔法纸页启程'],
      ['storyboards/intro_10s_v1/Intro_05_Ensemble_Hero.png', '尾帧', '三条命运汇合 · 英雄构图']
    ]
  },
  {
    id: 'intro-artcut-v3',
    title: '角色片头：艺术快剪版',
    label: '片头 · 快剪 V3',
    date: '2026-08-25',
    duration: '10.125 秒',
    description: '144 BPM 原创魔法管弦乐驱动的艺术快剪，采用密集特写插帧、速度拉升、硬切和五个提前落点，整体节奏明显快于电影卡点版。',
    cover: 'storyboards/intro_10s_v1/Intro_01_Roman_Arrival.png',
    video: 'Intro_10s_artcut_v3_00001.mp4',
    script: 'scripts/Intro_10s_artcut_v3.md',
    storyboards: [
      ['storyboards/intro_10s_v1/Intro_01_Roman_Arrival.png', '0.00 秒', '罗兰 · 眼睛、耳坠、落地快剪'],
      ['storyboards/intro_10s_v1/Intro_02_ShangBan_Professor.png', '2.08 秒', '尚班 · 粉笔、眼镜、魔杖快剪'],
      ['storyboards/intro_10s_v1/Intro_03_Grandma_Transformation.png', '4.17 秒', '因素 · 羽毛、手势、茶杯快剪'],
      ['storyboards/intro_10s_v1/Intro_04_First_Meeting.png', '6.25 秒', '三人相遇 · 接书冲击波'],
      ['storyboards/intro_10s_v1/Intro_05_Ensemble_Hero.png', '8.33 秒', '人物闪切与英雄定格']
    ]
  },
  {
    id: 'intro-cinematic-v2',
    title: '角色片头：电影卡点版',
    label: '片头 · 纯音乐 V2',
    date: '2026-08-25',
    duration: '10.125 秒',
    description: '无解说、无对白的精致电影片头，以原创魔法管弦乐驱动书页遮挡、魔杖闪白、传送门扩散和魔法碎片四次卡点转场。',
    cover: 'storyboards/intro_10s_v1/Intro_05_Ensemble_Hero.png',
    video: 'Intro_10s_cinematic_v2_00001.mp4',
    script: 'scripts/Intro_10s_cinematic_v2.md',
    storyboards: [
      ['storyboards/intro_10s_v1/Intro_01_Roman_Arrival.png', '镜头 1', '罗兰降临 · 书本遮挡转场'],
      ['storyboards/intro_10s_v1/Intro_02_ShangBan_Professor.png', '镜头 2', '尚班教授 · 魔杖闪白转场'],
      ['storyboards/intro_10s_v1/Intro_03_Grandma_Transformation.png', '镜头 3', '因素教授 · 传送门圆环转场'],
      ['storyboards/intro_10s_v1/Intro_04_First_Meeting.png', '镜头 4', '三人相遇 · 魔法碎片重组'],
      ['storyboards/intro_10s_v1/Intro_05_Ensemble_Hero.png', '镜头 5', '管弦重拍英雄定格']
    ]
  },
  {
    id: 'intro-10s-v1',
    title: '角色片头：魔法撞上现实',
    label: '片头 · V1',
    date: '2026-08-25',
    duration: '10.125 秒',
    description: '罗兰穿越后成为女生；青年教授尚班与变形学教授因素先后登场，三人在现实大学相遇。',
    cover: 'storyboards/intro_10s_v1/Intro_05_Ensemble_Hero.png',
    video: 'Intro_10s_v1_00001.mp4',
    script: 'scripts/Intro_10s_v1.md',
    storyboards: [
      ['storyboards/intro_10s_v1/Intro_01_Roman_Arrival.png', '镜头 1', '罗兰错位降临'],
      ['storyboards/intro_10s_v1/Intro_02_ShangBan_Professor.png', '镜头 2', '尚班：理性教授'],
      ['storyboards/intro_10s_v1/Intro_03_Grandma_Transformation.png', '镜头 3', '因素：变形学教授'],
      ['storyboards/intro_10s_v1/Intro_04_First_Meeting.png', '镜头 4', '三人在现实相遇'],
      ['storyboards/intro_10s_v1/Intro_05_Ensemble_Hero.png', '镜头 5', '片头英雄镜头']
    ]
  },
  {
    id: 'cut1-dialogue-v2',
    title: 'Cut 1：魔杖反控',
    label: '测试片 · 对白 V2',
    date: '2026-08-25',
    duration: '10.125 秒',
    description: '罗兰用魔杖威胁尚班，却发现尚班早已反控魔杖；镜头拉远后揭示罗兰被魔法丝带捆住。',
    cover: 'storyboards/cut1/Cut1_5.png',
    video: 'Cut1_10s_dialogue_v2_00001.mp4',
    script: 'scripts/Cut1_10s_dialogue_v2.txt',
    storyboards: [
      ['storyboards/cut1/Cut1_1.png', '镜头 1', '三人围绕星图争论'],
      ['storyboards/cut1/Cut1_2.png', '镜头 2', '罗兰与尚班打闹'],
      ['storyboards/cut1/Cut1_3.png', '镜头 3', '罗兰举杖威胁'],
      ['storyboards/cut1/Cut1_4.png', '镜头 4', '罗兰察觉失控'],
      ['storyboards/cut1/Cut1_5.png', '镜头 5', '尚班完成反控']
    ]
  },
  {
    id: 'cut1-v1',
    title: 'Cut 1：五分镜初版',
    label: '测试片 · V1',
    date: '2026-08-25',
    duration: '10.125 秒',
    description: '基于最初五张分镜完成的 MiniMax H3 十秒测试，用于验证角色连续性、多关键帧和中文音轨。',
    cover: 'storyboards/cut1/Cut1_1.png',
    video: 'Cut1_10s_00001.mp4',
    script: 'scripts/Cut1_10s_v1.txt',
    storyboards: [
      ['storyboards/cut1/Cut1_1.png', '镜头 1', '三人同框起始'],
      ['storyboards/cut1/Cut1_2.png', '镜头 2', '罗兰与尚班交锋'],
      ['storyboards/cut1/Cut1_3.png', '镜头 3', '俯拍魔杖动作'],
      ['storyboards/cut1/Cut1_4.png', '镜头 4', '罗兰表情特写'],
      ['storyboards/cut1/Cut1_5.png', '镜头 5', '魔法反转结尾']
    ]
  }
];

const app = document.querySelector('#app');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
const lightboxClose = lightbox.querySelector('.lightbox-close');

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
}[character]));

function collectionView() {
  document.title = 'WebDestiny 远端预览库';
  const cards = projects.map((project) => `
    <article class="project-card">
      <a class="card-cover" href="#/${project.id}" aria-label="查看 ${escapeHtml(project.title)}">
        <img src="${project.cover}" alt="${escapeHtml(project.title)}封面" loading="lazy">
        <span class="duration">${project.duration}</span>
      </a>
      <div class="card-body">
        <div class="card-kicker"><span>${project.label}</span><span>${project.date}</span></div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="card-actions">
          <a class="details-link" href="#/${project.id}">查看详情 <span aria-hidden="true">→</span></a>
          <span class="asset-count">${project.storyboards.length} 张分镜 · 1 个视频 · 1 份剧本</span>
        </div>
      </div>
    </article>
  `).join('');

  app.innerHTML = `
    <section class="collection-head">
      <p class="eyebrow">Remote review collection</p>
      <h1>每一次生成，都在同一个入口检查。</h1>
      <p class="lead">从集合中选择一组作品，查看完整分镜、剧本和在线播放视频。新版本会继续追加在这里。</p>
      <div class="collection-meta">
        <span class="pill">${projects.length} 组作品</span>
        <span class="pill">${projects.reduce((sum, project) => sum + project.storyboards.length, 0)} 张分镜</span>
        <span class="pill">${projects.length} 个视频</span>
      </div>
    </section>
    <section class="card-grid" aria-label="作品集合">${cards}</section>
  `;
}

async function detailView(project) {
  document.title = `${project.title} — WebDestiny`;
  const boards = project.storyboards.map(([src, number, caption]) => `
    <figure class="storyboard" data-src="${src}" data-caption="${escapeHtml(`${number} · ${caption}`)}" tabindex="0" role="button" aria-label="放大${escapeHtml(number)}">
      <img src="${src}" alt="${escapeHtml(`${number}：${caption}`)}" loading="lazy">
      <figcaption><strong>${number}</strong>${caption}</figcaption>
    </figure>
  `).join('');

  app.innerHTML = `
    <a class="back-link" href="#/" aria-label="返回作品集合">← 返回作品集合</a>
    <section class="detail-head">
      <div>
        <p class="eyebrow">${project.label} · ${project.duration}</p>
        <h1>${project.title}</h1>
        <p class="detail-description">${project.description}</p>
      </div>
      <a class="download-link" href="${project.video}" download>下载视频</a>
    </section>

    <section class="player-shell" aria-label="视频播放器">
      <video controls preload="metadata" playsinline poster="${project.cover}">
        <source src="${project.video}" type="video/mp4">
        当前浏览器不支持 MP4 播放。
      </video>
    </section>

    <section class="section" aria-labelledby="storyboard-title">
      <div class="section-head">
        <h2 id="storyboard-title">分镜</h2>
        <span class="section-note">点击图片查看大图</span>
      </div>
      <div class="storyboard-grid">${boards}</div>
    </section>

    <section class="section" aria-labelledby="script-title">
      <div class="section-head">
        <h2 id="script-title">剧本</h2>
        <a class="primary-link" href="${project.script}" target="_blank" rel="noopener">打开原文件</a>
      </div>
      <pre class="script-box loading" id="script-content">正在载入剧本…</pre>
    </section>
  `;

  bindStoryboardZoom();
  const scriptBox = document.querySelector('#script-content');
  try {
    const response = await fetch(project.script, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    scriptBox.textContent = await response.text();
    scriptBox.classList.remove('loading');
  } catch (error) {
    scriptBox.textContent = '剧本载入失败，请点击右上角“打开原文件”。';
  }
}

function bindStoryboardZoom() {
  document.querySelectorAll('.storyboard').forEach((item) => {
    const open = () => {
      lightboxImage.src = item.dataset.src;
      lightboxImage.alt = item.dataset.caption;
      lightboxCaption.textContent = item.dataset.caption;
      lightbox.showModal();
    };
    item.addEventListener('click', open);
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
}

function route() {
  const id = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  const project = projects.find((item) => item.id === id);
  if (!id) collectionView();
  else if (project) detailView(project);
  else app.innerHTML = `<div class="empty"><h1>没有找到这组作品</h1><p><a class="primary-link" href="#/">返回集合</a></p></div>`;
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}

lightboxClose.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
window.addEventListener('hashchange', route);
route();
