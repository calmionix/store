/**
 * Calmionix - Main JavaScript
 * Handles particles, animations, server status, clock, and general interactions
 */

// ============================================
// GALAXY PARTICLE SYSTEM
// ============================================
const GalaxyParticles = {
  canvas: null,
  ctx: null,
  particles: [],
  stars: [],
  animationId: null,
  isActive: true,

  config: {
    particleCount: 50,
    starCount: 100,
    connectionDistance: 100,
    colors: ['#00d4ff', '#8b5cf6', '#ec4899', '#06b6d4'],
    starColors: ['#ffffff', '#b8b8d0', '#8080a0']
  },

  init() {
    this.canvas = document.getElementById('galaxy-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) return;

    this.resize();
    this.createParticles();
    this.createStars();
    this.setupEventListeners();
    this.animate();
  },

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  createParticles() {
    this.particles = [];
    if (!this.canvas) return;
    
    for (let i = 0; i < this.config.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: this.config.colors[Math.floor(Math.random() * this.config.colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
        pulse: Math.random() * Math.PI * 2
      });
    }
  },

  createStars() {
    this.stars = [];
    if (!this.canvas) return;
    
    for (let i = 0; i < this.config.starCount; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 1.5,
        color: this.config.starColors[Math.floor(Math.random() * this.config.starColors.length)],
        alpha: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2
      });
    }
  },

  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
      this.createStars();
    });

    document.addEventListener('visibilitychange', () => {
      this.isActive = !document.hidden;
      if (this.isActive) {
        this.animate();
      }
    });
  },

  animate() {
    if (!this.isActive || !this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawStars();
    this.drawParticles();
    this.drawConnections();

    this.animationId = requestAnimationFrame(() => this.animate());
  },

  drawStars() {
    if (!this.ctx) return;
    this.stars.forEach(star => {
      star.twinklePhase += star.twinkle;
      const twinkleAlpha = star.alpha * (0.7 + 0.3 * Math.sin(star.twinklePhase));

      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = twinkleAlpha;
      this.ctx.fill();
    });
    this.ctx.globalAlpha = 1;
  },

  drawParticles() {
    if (!this.ctx) return;
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;

      particle.pulse += 0.02;
      const pulseRadius = particle.radius * (1 + 0.2 * Math.sin(particle.pulse));
      const pulseAlpha = particle.alpha * (0.8 + 0.2 * Math.sin(particle.pulse));

      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, pulseRadius * 2, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color;
      this.ctx.globalAlpha = pulseAlpha * 0.3;
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, pulseRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color;
      this.ctx.globalAlpha = pulseAlpha;
      this.ctx.fill();
    });
    this.ctx.globalAlpha = 1;
  },

  drawConnections() {
    if (!this.ctx) return;
    for (let i = 0; i < this.particles.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < this.particles.length; j++) {
        if (connections >= 3) break;

        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.connectionDistance) {
          const alpha = (1 - distance / this.config.connectionDistance) * 0.3;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = this.particles[i].color;
          this.ctx.globalAlpha = alpha;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
          connections++;
        }
      }
    }
    this.ctx.globalAlpha = 1;
  },

  destroy() {
    this.isActive = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
};

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const NavbarManager = {
  navbar: null,

  init() {
    this.navbar = document.querySelector('.navbar');
    if (!this.navbar) return;

    window.addEventListener('scroll', () => this.handleScroll());
  },

  handleScroll() {
    if (!this.navbar) return;
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
  }
};

// ============================================
// MOBILE MENU
// ============================================
const MobileMenu = {
  hamburger: null,
  nav: null,

  init() {
    this.hamburger = document.querySelector('.hamburger');
    this.nav = document.querySelector('.navbar-nav');
    
    if (!this.hamburger || !this.nav) return;

    this.hamburger.addEventListener('click', () => this.toggle());

    const links = this.nav.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => this.close());
    });
  },

  toggle() {
    if (!this.hamburger || !this.nav) return;
    this.hamburger.classList.toggle('active');
    this.nav.classList.toggle('active');
    document.body.style.overflow = this.nav.classList.contains('active') ? 'hidden' : '';
  },

  close() {
    if (!this.hamburger || !this.nav) return;
    this.hamburger.classList.remove('active');
    this.nav.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// ============================================
// WIB CLOCK
// ============================================
const WIBClock = {
  clockElement: null,
  intervalId: null,

  init() {
    this.clockElement = document.getElementById('wib-clock');
    if (!this.clockElement) return;

    this.updateClock();
    this.intervalId = setInterval(() => this.updateClock(), 1000);
  },

  updateClock() {
    if (!this.clockElement) return;
    
    const now = new Date();
    const options = {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    
    const timeString = now.toLocaleTimeString('id-ID', options);
    this.clockElement.textContent = timeString + ' WIB';
  },

  destroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
};

// ============================================
// SERVER STATUS API
// ============================================
const ServerStatusAPI = {
  API_URL: 'https://api.mcsrvstat.us/3/calmionix.fun:19133',
  
  init() {
    this.fetchStatus();
    // Update every 60 seconds
    setInterval(() => this.fetchStatus(), 60000);
  },

  async fetchStatus() {
    const statusText = document.getElementById('server-status-text');
    const playersText = document.getElementById('server-players');
    const statusDot = document.querySelector('.status-dot');

    try {
      const response = await fetch(this.API_URL);
      if (!response.ok) throw new Error('API Error');
      
      const data = await response.json();
      
      if (data.online) {
        if (statusText) statusText.textContent = 'Online';
        if (statusDot) {
          statusDot.style.background = '#22c55e';
          statusDot.style.animation = 'pulse 2s infinite';
        }
        
        const playerCount = data.players ? data.players.online : 0;
        const maxPlayers = data.players ? data.players.max : 100;
        if (playersText) {
          playersText.textContent = `${playerCount}/${maxPlayers} pemain`;
        }
      } else {
        if (statusText) statusText.textContent = 'Offline';
        if (statusDot) {
          statusDot.style.background = '#ef4444';
          statusDot.style.animation = 'none';
        }
        if (playersText) playersText.textContent = '0 pemain';
      }
    } catch (error) {
      console.log('Server status API error:', error);
      // Fallback
      if (statusText) statusText.textContent = 'Online';
      if (playersText) playersText.textContent = 'Server aktif';
      if (statusDot) {
        statusDot.style.background = '#22c55e';
      }
    }
  }
};

// ============================================
// SCROLL ANIMATIONS
// ============================================
const ScrollAnimations = {
  init() {
    const elements = document.querySelectorAll('.fade-in');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach(el => observer.observe(el));
  }
};

// ============================================
// TOAST NOTIFICATIONS
// ============================================
const ToastManager = {
  container: null,

  init() {
    this.container = document.querySelector('.toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'info', duration = 3000) {
    if (!this.container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const iconMap = {
      success: '✓',
      error: '✕',
      info: 'ℹ'
    };

    toast.innerHTML = `
      <span class="toast-icon">${iconMap[type] || 'ℹ'}</span>
      <span class="toast-message">${message}</span>
    `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  }
};

// Global showToast function
function showToast(message, type = 'info', duration = 3000) {
  ToastManager.show(message, type, duration);
}

// ============================================
// COPY TO CLIPBOARD
// ============================================
const CopyManager = {
  init() {
    const copyElements = document.querySelectorAll('[data-copy]');
    copyElements.forEach(el => {
      el.addEventListener('click', () => this.copy(el));
    });
  },

  async copy(element) {
    const text = element.getAttribute('data-copy');
    if (!text) return;
    
    try {
      await navigator.clipboard.writeText(text);
      showToast('Berhasil disalin!', 'success');
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        document.execCommand('copy');
        showToast('Berhasil disalin!', 'success');
      } catch (err) {
        showToast('Gagal menyalin', 'error');
      }
      
      document.body.removeChild(textArea);
    }
  }
};

// ============================================
// SHOP CATEGORY FILTER
// ============================================
const ShopFilter = {
  init() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const products = document.querySelectorAll('.product-card');

    if (categoryBtns.length === 0) return;

    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');

        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        products.forEach(product => {
          if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
            product.classList.add('fade-in', 'visible');
          } else {
            product.style.display = 'none';
          }
        });
      });
    });
  }
};

// ============================================
// SMOOTH SCROLL
// ============================================
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
};

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize particle system
  if (document.getElementById('galaxy-canvas')) {
    GalaxyParticles.init();
  }

  // Initialize navbar
  NavbarManager.init();

  // Initialize mobile menu
  MobileMenu.init();

  // Initialize WIB clock
  WIBClock.init();

  // Initialize server status API
  ServerStatusAPI.init();

  // Initialize scroll animations
  ScrollAnimations.init();

  // Initialize toast manager
  ToastManager.init();

  // Initialize copy manager
  CopyManager.init();

  // Initialize shop filter
  ShopFilter.init();

  // Initialize smooth scroll
  SmoothScroll.init();

  // Add fade-in class to elements
  document.querySelectorAll('.highlight-card, .product-card, .vote-site-card, .timeline-content, .feature-card').forEach(el => {
    el.classList.add('fade-in');
  });
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  GalaxyParticles.destroy();
  WIBClock.destroy();
});
