const projects = [
  {
    id: 'broken-thread-night-v1',
    title: '《丝途》试播集01：断线之夜',
    label: '试播集01 · 六段视频已生成',
    date: '2026-08-26',
    duration: '6 × 10 秒 · 共 60 秒',
    description: '一根来自宇宙织网的断线刺入现实：尚班发现异常，罗兰循线而来，三人在魔法阁楼中的第一次磨合最终撕开了现实与魔法世界。',
    cover: 'storyboards/broken_thread_night_v1/BT_03_RomanMeetsShangBan.png',
    video: null,
    script: 'scripts/BT_StoryboardPrompts_v1.md',
    storyboards: [],
    segments: [
      { number: '01', title: '宇宙钩子·断线', summary: '宇宙蓝色织网中一根丝线崩断，古老机械织客苏醒并拉住断线，蓝白光束最终刺入城市夜空。', handoff: '断线已经进入城市；电蓝色丝线成为后续所有异常的统一视觉线索。', storyboard: 'storyboards/broken_thread_night_v1/BT_01_CosmicBreak.png', video: 'videos/broken_thread_night_v1/BT_01_CosmicBreak_00001_.mp4' },
      { number: '02', title: '尚班看见异常', summary: '深夜建筑事务所里，尚班从图纸工作转向窗外，用眼镜反光与测绘屏幕确认那根不应存在的蓝线。', handoff: '尚班站在窗前锁定异常方向，准备离开办公室追踪。', storyboard: 'storyboards/broken_thread_night_v1/BT_02_ShangBanSeesAnomaly.png', video: 'videos/broken_thread_night_v1/BT_02_ShangBanSeesAnomaly_00001_.mp4' },
      { number: '03', title: '罗兰登场·相遇', summary: '新版罗兰沿雨夜街巷中的蓝线前进，与同样追踪异常的尚班在路灯下相遇并形成戒备对峙。', handoff: '两人隔着蓝线对视；服装湿润、雨势与蓝线方向保持到下一场。', storyboard: 'storyboards/broken_thread_night_v1/BT_03_RomanMeetsShangBan.png', video: 'videos/broken_thread_night_v1/BT_03_RomanMeetsShangBan_00001_.mp4' },
      { number: '04', title: '三人关系·魔杖漂浮', summary: '魔法阁楼中，尚班分析地图、罗兰反驳、因素制止争执；桌面魔杖突然升起，三人同时作出不同反应。', handoff: '魔杖已悬浮到罗兰伸手可及的位置；尚班与因素都在观察她的下一步。', storyboard: 'storyboards/broken_thread_night_v1/BT_04_FloatingWand.png', video: 'videos/broken_thread_night_v1/BT_04_FloatingWand_00001_.mp4' },
      { number: '05', title: '罗兰控杖·失控前兆', summary: '罗兰自信接住并挥动魔杖，蓝色丝线却突然反向缠住手腕，魔杖在她面前高频震颤。', handoff: '罗兰的惊讶特写与震颤魔杖直接衔接下一段爆发。', storyboard: 'storyboards/broken_thread_night_v1/BT_05_RomanWandControl.png', video: 'videos/broken_thread_night_v1/BT_05_RomanWandControl_00001_.mp4' },
      { number: '06', title: '魔法事故·世界裂开', summary: '丝线爆发并束缚罗兰，尚班与因素同时介入；蓝线被切断时，现代城市与魔法学院在窗外重叠。', handoff: '现实与魔法世界已同时显现，作为试播集结尾悬念。', storyboard: 'storyboards/broken_thread_night_v1/BT_06_WorldSplit.png', video: 'videos/broken_thread_night_v1/BT_06_WorldSplit_00001_.mp4' }
    ]
  },
  {
    id: 'pilot-blue-heron-v1',
    title: '试播集：青鹭会馆',
    label: '试播集 · 十段视频预览',
    date: '2026-08-25',
    duration: '10 × 5 秒 · 共 50 秒',
    description: '罗兰独闯东京黑道会所，却落入禁魔匕首陷阱；尚班从天窗沿灵体蛛丝降下，两人合力脱身。十段属于同一个连续项目。',
    cover: 'storyboards/pilot_blue_heron_clean_v2/BH_01_SealTheDoor_CleanV2.png',
    video: null,
    script: 'scripts/Pilot_BlueHeron_Storyboard_v2_5s.md',
    storyboards: [],
    segments: [
      { number: '01', title: '封门', summary: '罗兰踏入会所，背后双门落闩；黑田坐在北侧木台，六名手下从阴影中完成包围。', handoff: '门已锁；罗兰居中面北；黑田坐在木椅；六人分别封住南、东、西三侧。', storyboard: 'storyboards/pilot_blue_heron_clean_v2/BH_01_SealTheDoor_CleanV2.png', video: 'videos/pilot_blue_heron_clean_v2/BH_01_SealTheDoor_00001_.mp4' },
      { number: '02', title: '空盒陷阱', summary: '黑田展示空罗盘盒，地毯封锁纹亮起；罗兰暗中悬起木椅，双方短暂言语交锋。', handoff: '两把木椅悬空；六人进入战斗姿态；黑田准备起身。', storyboard: 'storyboards/pilot_blue_heron_clean_v2/BH_02_EmptyBoxTrap_CleanV2.png', video: 'videos/pilot_blue_heron_clean_v2/BH_02_EmptyBoxTrap_00001_.mp4' },
      { number: '03', title: '第一轮控物', summary: '罗兰用椅子与矮桌打破第一层包围；其他手下持续包抄、救援与改变路线。', handoff: '中央桌侧翻、两椅损坏；罗兰占据主动；黑田已经起身。', storyboard: 'storyboards/pilot_blue_heron_clean_v2/BH_03_TelekineticCounter_CleanV2.png', video: 'videos/pilot_blue_heron_clean_v2/BH_03_TelekineticCounter_00001_.mp4' },
      { number: '04', title: '会所失控', summary: '高脚凳、漆盘、冰桶与玻璃杯连续加入战斗；黑田趁乱从木椅暗格取出禁魔匕首。', handoff: '吧台散乱；匕首半出鞘；空中物体开始失去魔法光。', storyboard: 'storyboards/pilot_blue_heron_clean_v2/BH_04_DaggerInsert_CleanV2.png', video: 'videos/pilot_blue_heron_clean_v2/BH_04_DaggerInsert_00001_.mp4' },
      { number: '05', title: '禁魔刃', summary: '紫灰禁魔场熄灭罗兰的控物魔法，坠落道具逼她翻滚避险，黑田亲自持刀逼近。', handoff: '罗兰被逼向西侧木柱；魔法完全失效；六名手下继续封路。', storyboard: 'storyboards/pilot_blue_heron_clean_v2/BH_05_AntimagicReversal_CleanV2.png', video: 'videos/pilot_blue_heron_clean_v2/BH_05_AntimagicReversal_00001_.mp4' },
      { number: '06', title: '只剩脾气', summary: '罗兰改用近身格斗；黑田斜切夹克与白衬衫外层，完整黑色防护内搭保持覆盖。', handoff: '罗兰上衣外层破损但无血无裸露；黑田持刀；战线移向西北角。', storyboard: 'storyboards/pilot_blue_heron_clean_v2/BH_06_CloseQuarters_CleanV2.png', video: 'videos/pilot_blue_heron_clean_v2/BH_06_CloseQuarters_00001_.mp4' },
      { number: '07', title: '墙角绝境', summary: '罗兰挎包带被拉断，退路逐一封死；黑田把她逼到天窗下的墙角并举刀。', handoff: '挎包落在西墙；黑田举刀；罗兰已调整脚尖准备反击。', storyboard: 'storyboards/pilot_blue_heron_clean_v2/BH_07_SkylightOverhead_CleanV2.png', video: 'videos/pilot_blue_heron_clean_v2/BH_07_SkylightOverhead_00001_.mp4' },
      { number: '08', title: '蛛丝天降', summary: '灵体蛛丝射穿天窗锁扣并兜住玻璃；尚班沿蛛网滑下，罗兰趁黑田回头踢飞匕首。', handoff: '尚班落地；匕首飞向中央；罗兰、尚班与黑田同时争夺。', storyboard: 'storyboards/pilot_blue_heron_clean_v2/BH_08_SpiderwebRescue_CleanV2.png', video: 'videos/pilot_blue_heron_clean_v2/BH_08_SpiderwebRescue_00001_.mp4' },
      { number: '09', title: '合击终局', summary: '罗兰破坏黑田重心，尚班抢到匕首，以刀柄完成非致命最后一击。', handoff: '黑田昏迷；匕首即将封入木盒；罗兰和尚班控制战局。', storyboard: 'storyboards/pilot_blue_heron_clean_v2/BH_09_TeamCheckmate_CleanV2.png', video: 'videos/pilot_blue_heron_clean_v2/BH_09_TeamCheckmate_00001_.mp4' },
      { number: '10', title: '嘴硬离场', summary: '罗兰拒扶后仍跌进尚班怀里；两人互相搀扶又互相挖苦，走入雨夜。', handoff: '二人离开；会所开始救援；木盒内暗紫符号闪烁，留下幕后线索。', storyboard: 'storyboards/pilot_blue_heron_clean_v2/BH_10_BanterExit_CleanV2.png', video: 'videos/pilot_blue_heron_clean_v2/BH_10_BanterExit_00001_.mp4' }
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
    const completedBoards = project.segments.filter((segment) => segment.storyboard).length;
    const completedVideos = project.segments.filter((segment) => segment.video).length;
    return `${completedBoards} 张分镜 · ${completedVideos ? `${completedVideos} 个视频` : '视频待生成'} · 1 份剧本`;
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
      ${segment.storyboard ? `
        <figure class="storyboard segment-board" data-src="${segment.storyboard}" data-caption="${escapeHtml(`第 ${segment.number} 段 · ${segment.title}`)}" tabindex="0" role="button" aria-label="放大第 ${segment.number} 段分镜">
          <img src="${segment.storyboard}" alt="${escapeHtml(`第 ${segment.number} 段：${segment.title}`)}" loading="lazy">
          <figcaption><strong>第 ${segment.number} 段</strong>${escapeHtml(segment.title)} · 5 秒</figcaption>
        </figure>
      ` : ''}
      <div class="segment-top">
        <span class="segment-number">第 ${segment.number} 段</span>
        <span class="segment-status">${segment.video ? '视频已生成' : '分镜已生成 · 视频待生成'}</span>
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

  const completedSegmentVideos = project.segments?.filter((segment) => segment.video).length || 0;
  const headerAction = project.video
    ? `<a class="download-link" href="${project.video}" download>下载视频</a>`
    : completedSegmentVideos
      ? `<span class="review-status">${completedSegmentVideos} / ${project.segments.length} 段视频</span>`
      : `<span class="review-status">分镜预览</span>`;

  const mediaSection = project.video ? `
    <section class="player-shell" aria-label="视频播放器">
      <video controls preload="metadata" playsinline poster="${project.cover}">
        <source src="${project.video}" type="video/mp4">
        当前浏览器不支持 MP4 播放。
      </video>
    </section>
  ` : completedSegmentVideos ? `
    <section class="draft-notice" aria-label="项目状态">
      <strong>当前内容：十张分镜与十段视频</strong>
      <span>十段视频已经生成并直接展示；可在下方每段卡片中播放。</span>
    </section>
  ` : `
    <section class="draft-notice" aria-label="项目状态">
      <strong>当前内容：十张五秒分镜</strong>
      <span>十张关键分镜已经生成并直接展示；视频尚未生成。下一步按你的指令继续。</span>
    </section>
  `;

  const storyboardTitle = project.segments?.length ? '十段分镜与视频' : '分镜';
  const storyboardNote = project.segments?.length
    ? completedSegmentVideos
      ? '点击图片查看大图；每段视频可直接播放'
      : '点击图片查看大图；视频尚未生成'
    : '点击图片查看大图';
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


