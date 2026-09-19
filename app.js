// FreeVids Studio - Royalty Free YouTube Video Database & Application Logic

const VIDEOS_DATA = [
  {
    id: "lofi-1",
    youtubeId: "jfKfPfyJRdk",
    title: "Lofi Hip Hop Radio - Beats to Relax/Study to",
    channel: "Lofi Girl",
    category: "music",
    duration: "Live Stream",
    license: "Creative Commons / Royalty-Free Stream",
    licenseDetails: "Allowed for background stream & non-commercial / commercial study video playback under Lofi Girl guidelines.",
    thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&auto=format&fit=crop&q=80",
    tags: ["lofi", "chill", "music", "relax", "study", "beats"]
  },
  {
    id: "nature-1",
    youtubeId: "eKFTSSKCzWA",
    title: "4K Forest Water Stream Ambience - Relaxing Nature Sounds",
    channel: "Nature Relaxation",
    category: "nature",
    duration: "3:00:00",
    license: "Creative Commons Attribution (CC BY 3.0)",
    licenseDetails: "Free to reuse and adapt with proper channel attribution.",
    thumbnail: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80",
    tags: ["nature", "water", "forest", "ambient", "sounds", "4k"]
  },
  {
    id: "scifi-1",
    youtubeId: "S347B5kU4Yw",
    title: "Cyberpunk City Alley Neon Loop - Free Motion Background",
    channel: "Royalty Free Motion Graphics",
    category: "backgrounds",
    duration: "00:30",
    license: "100% Free Royalty-Free / Commercial Use Allowed",
    licenseDetails: "Free for personal and commercial video projects. No attribution required.",
    thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
    tags: ["cyberpunk", "neon", "motion background", "loop", "scifi", "vfx"]
  },
  {
    id: "cinematic-1",
    youtubeId: "e-ORhEE9VVg",
    title: "Big Buck Bunny 4K Open Source Film",
    channel: "Blender Foundation",
    category: "cinematic",
    duration: "09:56",
    license: "Creative Commons Attribution 3.0 (CC BY 3.0)",
    licenseDetails: "Blender Open Movie Project. Free to copy, distribute and remix with credit to Blender Foundation.",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    tags: ["animation", "3d", "blender", "open source", "4k", "cc-by"]
  },
  {
    id: "tech-1",
    youtubeId: "ScMzIvxBSi4",
    title: "Abstract Digital Network Wave Loop - Free Stock Footage",
    channel: "VFX Grace Free Video Clips",
    category: "tech",
    duration: "01:00",
    license: "Public Domain / CC0",
    licenseDetails: "Public Domain Dedication. Use freely anywhere without copyright restrictions.",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    tags: ["tech", "network", "digital", "abstract", "loop", "stock"]
  },
  {
    id: "nature-2",
    youtubeId: "1KaOrSuWZeM",
    title: "Ocean Waves Sunset 4K Relaxing Beach Footage",
    channel: "Free 4K Ocean Stock",
    category: "nature",
    duration: "02:15",
    license: "Creative Commons Attribution (CC BY 4.0)",
    licenseDetails: "Free to share and edit for videos, presentations, and background visuals.",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    tags: ["ocean", "sunset", "beach", "waves", "nature", "relax"]
  },
  {
    id: "music-2",
    youtubeId: "N1T-60J-5x4",
    title: "Alan Walker - Fade [NCS Release] (No Copyright Music)",
    channel: "NoCopyrightSounds (NCS)",
    category: "music",
    duration: "04:24",
    license: "Royalty Free (NCS Commercial Policy)",
    licenseDetails: "Free to use in YouTube & Twitch content as long as NCS credit link is added in description.",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
    tags: ["ncs", "electronic", "fade", "alan walker", "edm", "no copyright music"]
  },
  {
    id: "scifi-2",
    youtubeId: "5qap5aO4i9A",
    title: "Space Wormhole Hyper-Jump 4K Visual FX",
    channel: "Cosmo Visuals CC",
    category: "tech",
    duration: "00:45",
    license: "Creative Commons Attribution 4.0 International",
    licenseDetails: "Ideal for sci-fi video editing, stream overlays, and video backgrounds.",
    thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&auto=format&fit=crop&q=80",
    tags: ["space", "wormhole", "galaxy", "vfx", "scifi", "hyperdrive"]
  },
  {
    id: "cinematic-2",
    youtubeId: "aqz-KE-bpKQ",
    title: "Sintel - Open 3D Animated Short Film",
    channel: "Blender Foundation",
    category: "cinematic",
    duration: "14:48",
    license: "Creative Commons Attribution 3.0",
    licenseDetails: "Full open film source assets available free for education and creative reuse.",
    thumbnail: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&auto=format&fit=crop&q=80",
    tags: ["sintel", "blender", "fantasy", "cinematic", "film", "animation"]
  },
  {
    id: "backgrounds-2",
    youtubeId: "fEvM-OUbaKs",
    title: "Particle Dust & Bokeh Golden Light Overlay",
    channel: "Free HD Motion Backgrounds",
    category: "backgrounds",
    duration: "01:30",
    license: "Royalty-Free / No Copyright",
    licenseDetails: "Free overlay video file for video editors and stream intros.",
    thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=80",
    tags: ["particles", "gold", "light", "bokeh", "overlay", "effect"]
  }
];

// App State
let currentCategory = 'all';
let searchQuery = '';
let showingFavoritesOnly = false;
let favorites = JSON.parse(localStorage.getItem('freevids_favs') || '[]');

// DOM Elements
const videoGrid = document.getElementById('videoGrid');
const searchInput = document.getElementById('searchInput');
const categoryTabs = document.getElementById('categoryTabs');
const favoritesBtn = document.getElementById('favoritesBtn');
const favCountBadge = document.getElementById('favCountBadge');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const videoModal = document.getElementById('videoModal');
const modalIframe = document.getElementById('modalIframe');
const modalTitle = document.getElementById('modalTitle');
const modalChannel = document.getElementById('modalChannel');
const modalLicenseTag = document.getElementById('modalLicenseTag');
const modalLicenseDetails = document.getElementById('modalLicenseDetails');
const modalYtBtn = document.getElementById('modalYtBtn');
const modalCloseBtn = document.getElementById('modalCloseBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateFavBadge();
  renderVideos();
  setupEventListeners();
  initTheme();
});

function initTheme() {
  const savedTheme = localStorage.getItem('freevids_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const icon = themeToggleBtn.querySelector('i');
  if (theme === 'light') {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
}

function setupEventListeners() {
  // Theme Toggle
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('freevids_theme', newTheme);
    updateThemeIcon(newTheme);
  });

  // Search Input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderVideos();
  });

  // Category Filter Tabs
  categoryTabs.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.tab-btn');
    if (!tabBtn) return;

    showingFavoritesOnly = false;
    favoritesBtn.classList.remove('active');

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    tabBtn.classList.add('active');

    currentCategory = tabBtn.dataset.category;
    renderVideos();
  });

  // Favorites Filter Toggle
  favoritesBtn.addEventListener('click', () => {
    showingFavoritesOnly = !showingFavoritesOnly;
    favoritesBtn.classList.toggle('active', showingFavoritesOnly);

    if (showingFavoritesOnly) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    } else {
      const activeTab = document.querySelector(`.tab-btn[data-category="${currentCategory}"]`);
      if (activeTab) activeTab.classList.add('active');
    }
    renderVideos();
  });

  // Modal Close
  modalCloseBtn.addEventListener('click', closeModal);
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      closeModal();
    }
  });
}

function updateFavBadge() {
  favCountBadge.textContent = favorites.length;
}

function toggleFavorite(id, event) {
  if (event) event.stopPropagation();
  
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('freevids_favs', JSON.stringify(favorites));
  updateFavBadge();

  if (showingFavoritesOnly) {
    renderVideos();
  } else {
    // Update individual button state
    const favButtons = document.querySelectorAll(`.card-fav-btn[data-id="${id}"]`);
    favButtons.forEach(btn => {
      const isFav = favorites.includes(id);
      btn.classList.toggle('is-fav', isFav);
      btn.querySelector('i').className = isFav ? 'fas fa-heart' : 'far fa-heart';
    });
  }
}

function renderVideos() {
  let filtered = VIDEOS_DATA.filter(video => {
    // Category match
    const matchCategory = currentCategory === 'all' || video.category === currentCategory;
    
    // Search match
    const matchSearch = !searchQuery || 
      video.title.toLowerCase().includes(searchQuery) ||
      video.channel.toLowerCase().includes(searchQuery) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchQuery));

    // Favorites match
    const matchFav = !showingFavoritesOnly || favorites.includes(video.id);

    return (showingFavoritesOnly ? matchFav : matchCategory) && matchSearch;
  });

  if (filtered.length === 0) {
    videoGrid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-film-slash"></i>
        <h3>검색 결과가 없습니다</h3>
        <p>다른 키워드로 검색하거나 카테고리 필터를 변경해 보세요.</p>
      </div>
    `;
    return;
  }

  videoGrid.innerHTML = filtered.map(video => {
    const isFav = favorites.includes(video.id);
    return `
      <div class="video-card" onclick="openModal('${video.id}')">
        <div class="card-thumb-container">
          <img class="card-thumb" src="${video.thumbnail}" alt="${video.title}" loading="lazy" />
          <div class="play-overlay">
            <div class="play-btn-circle">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <span class="card-badge">${getCategoryName(video.category)}</span>
          <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" data-id="${video.id}" onclick="toggleFavorite('${video.id}', event)" title="즐겨찾기">
            <i class="${isFav ? 'fas fa-heart' : 'far fa-heart'}"></i>
          </button>
          <span class="card-duration">${video.duration}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title" title="${video.title}">${video.title}</h3>
          <div class="card-channel">
            <i class="fas fa-check-circle"></i>
            <span>${video.channel}</span>
          </div>
          <div class="card-footer">
            <span class="license-tag">
              <i class="fas fa-shield-alt"></i> ${video.license}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getCategoryName(catKey) {
  const map = {
    'music': 'Lofi & Music',
    'nature': 'Nature & Ambience',
    'tech': 'Tech & Sci-Fi',
    'backgrounds': 'Motion Loop',
    'cinematic': 'Cinematic CC'
  };
  return map[catKey] || 'Royalty Free';
}

function openModal(id) {
  const video = VIDEOS_DATA.find(v => v.id === id);
  if (!video) return;

  modalTitle.textContent = video.title;
  modalChannel.textContent = `채널: ${video.channel}`;
  modalLicenseTag.textContent = video.license;
  modalLicenseDetails.textContent = video.licenseDetails;
  modalYtBtn.href = `https://www.youtube.com/watch?v=${video.youtubeId}`;
  
  // Embed YouTube player
  modalIframe.src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`;

  videoModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  videoModal.classList.remove('active');
  modalIframe.src = '';
  document.body.style.overflow = '';
}
