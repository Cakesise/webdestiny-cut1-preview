const projects = [
  {
    id: 'pilot-blue-heron-v1',
    title: '试播集：青鹭会馆',
    label: '试播集 · 分镜待审核',
    date: '2026-08-25',
    duration: '10 × 10.125 秒',
    description: '罗兰独闯东京黑道会所，却落入禁魔匕首陷阱；尚班从天窗沿灵体蛛丝降下，两人合力脱身。十段属于同一个连续项目。',
    cover: 'storyboards/intro_10s_v1/Intro_01_Roman_Arrival.png',
    video: null,
    script: 'scripts/Pilot_BlueHeron_Storyboard_v1.md',
    storyboards: [],
    segments: [
      { number: '01', title: '封门', summary: '罗兰踏入会所，背后双门落闩；黑田坐在北侧木台，六名手下从阴影中完成包围。', handoff: '门已锁；罗兰居中面北；黑田坐在木椅；六人分别封住南、东、西三侧。', video: null },
      { number: '02', title: '空盒陷阱', summary: '黑田展示空罗盘盒，地毯封锁纹亮起；罗兰暗中悬起木椅，双方短暂言语交锋。', handoff: '两把木椅悬空；六人进入战斗姿态；黑田准备起身。', video: null },
      { number: '03', title: '第一轮控物', summary: '罗兰用椅子与矮桌打破第一层包围；其他手下持续包抄、救援与改变路线。', handoff: '中央桌侧翻、两椅损坏；罗兰占据桌面；黑田已经起身。', video: null },
      { number: '04', title: '会所失控', summary: '高脚凳、漆盘、冰桶与长凳连续加入战斗；黑田趁乱从木椅暗格取出禁魔匕首。', handoff: '吧台散乱；匕首半出鞘；空中物体开始失去魔法光。', video: null },
      { number: '05', title: '禁魔刃', summary: '紫灰禁魔场熄灭罗兰的控物魔法，黑田亲自持刀逼近，并暗示武器来自幕后势力。', handoff: '罗兰被逼到西侧木柱；魔法完全失效；六名手下继续封路。', video: null },
      { number: '06', title: '只剩脾气', summary: '罗兰改用近身格斗；黑田斜切夹克与白衬衫外层，完整黑色防护内搭保持覆盖。', handoff: '罗兰上衣外层破损但无血无裸露；黑田持刀；战线移向西北角。', video: null },
      { number: '07', title: '墙角绝境', summary: '罗兰挎包带被拉断，退路逐一封死；黑田把她逼到天窗下的墙角并举刀。', handoff: '挎包落在西墙；黑田举刀；罗兰已调整脚尖准备反击。', video: null },
      { number: '08', title: '蛛丝天降', summary: '灵体蛛丝射穿天窗锁扣并兜住玻璃；尚班小心滑下，罗兰趁黑田回头踢飞匕首。', handoff: '尚班落地；匕首飞向中央；罗兰、尚班与黑田同时争夺。', video: null },
      { number: '09', title: '合击终局', summary: '罗兰破坏黑田重心，尚班抢到匕首，以刀背格挡并用刀柄完成非致命最后一击。', handoff: '黑田昏迷；匕首封入木盒；罗兰魔法恢复；手下开始后退。', video: null },
      { number: '10', title: '嘴硬离场', summary: '罗兰拍开尚班的手后仍跌进他怀里；两人互相搀扶又互相挖苦，走入雨夜。', handoff: '二人离开；会所开始救援；木盒内暗紫符号闪烁，留下幕后线索。', video: null }
    ]
  },
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

const projectAssetSummary = (project) => {
  if (project.segments?.length) {
    const completedVideos = project.segments.filter((segment) => segment.video).length;
    return `${project.segments.length} 段分镜 · ${completedVideos ? `${completedVideos} 个视频` : '视频待生成'} · 1 份剧本`;
  }
  return `${project.storyboards.length} 张分镜 · ${project.video ? '1 个视频' : '视频待生成'} · 1 份剧本`;
};

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
          <span class="asset-count">${projectAssetSummary(project)}</span>
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
        <span class="pill">${projects.reduce((sum, project) => sum + (project.segments?.length || project.storyboards.length), 0)} 个分镜单元</span>
        <span class="pill">${projects.reduce((sum, project) => sum + (project.segments?.filter((segment) => segment.video).length || (project.video ? 1 : 0)), 0)} 个视频</span>
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

  const segments = (project.segments || []).map((segment) => `
    <article class="segment-card">
      <div class="segment-top">
        <span class="segment-number">第 ${segment.number} 段</span>
        <span class="segment-status">${segment.video ? '已生成' : '待生成'}</span>
      </div>
      <h3>${escapeHtml(segment.title)}</h3>
      <p>${escapeHtml(segment.summary)}</p>
      <div class="segment-handoff"><strong>段尾交接</strong>${escapeHtml(segment.handoff)}</div>
      ${segment.video ? `
        <video class="segment-video" controls preload="metadata" playsinline>
          <source src="${segment.video}" type="video/mp4">
        </video>
      ` : ''}
    </article>
  `).join('');

  const headerAction = project.video
    ? `<a class="download-link" href="${project.video}" download>下载视频</a>`
    : `<span class="review-status">分镜待审核</span>`;

  const mediaSection = project.video ? `
    <section class="player-shell" aria-label="视频播放器">
      <video controls preload="metadata" playsinline poster="${project.cover}">
        <source src="${project.video}" type="video/mp4">
        当前浏览器不支持 MP4 播放。
      </video>
    </section>
  ` : `
    <section class="draft-notice" aria-label="项目状态">
      <strong>当前阶段：审核十段分镜设计</strong>
      <span>尚未生成分镜图片或视频。审核通过后，将在本项目内依次追加第 1–10 段，不会拆成十个项目。</span>
    </section>
  `;

  const storyboardTitle = project.segments?.length ? '十段分镜设计' : '分镜';
  const storyboardNote = project.segments?.length ? '点击下方剧本查看每段五个关键时点、台词与同步动作' : '点击图片查看大图';
  const storyboardContent = project.segments?.length
    ? `<div class="segment-grid">${segments}</div>`
    : `<div class="storyboard-grid">${boards}</div>`;

  app.innerHTML = `
    <a class="back-link" href="#/" aria-label="返回作品集合">← 返回作品集合</a>
    <section class="detail-head">
      <div>
        <p class="eyebrow">${project.label} · ${project.duration}</p>
        <h1>${project.title}</h1>
        <p class="detail-description">${project.description}</p>
      </div>
      ${headerAction}
    </section>

    ${mediaSection}

    <section class="section" aria-labelledby="storyboard-title">
      <div class="section-head">
        <h2 id="storyboard-title">${storyboardTitle}</h2>
        <span class="section-note">${storyboardNote}</span>
      </div>
      ${storyboardContent}
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
