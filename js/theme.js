/**
 * Calmionix - Theme Manager
 * Handles dark/light theme toggle with localStorage persistence
 */

const ThemeManager = {
  THEME_KEY: 'calmionix-theme',
  THEMES: {
    DARK: 'dark',
    LIGHT: 'light'
  },

  init() {
    const savedTheme = this.getTheme();
    this.applyTheme(savedTheme);
    this.setupEventListeners();
  },

  getTheme() {
    try {
      return localStorage.getItem(this.THEME_KEY) || this.THEMES.DARK;
    } catch (e) {
      return this.THEMES.DARK;
    }
  },

  setTheme(theme) {
    try {
      localStorage.setItem(this.THEME_KEY, theme);
    } catch (e) {
      console.log('localStorage not available');
    }
    this.applyTheme(theme);
    this.updateToggleButton(theme);
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === this.THEMES.DARK ? '#0a0a1a' : '#f0f4f8');
    }
  },

  toggle() {
    const currentTheme = this.getTheme();
    const newTheme = currentTheme === this.THEMES.DARK ? this.THEMES.LIGHT : this.THEMES.DARK;
    this.setTheme(newTheme);
    
    const message = newTheme === this.THEMES.DARK 
      ? 'Mode gelap diaktifkan'
      : 'Mode terang diaktifkan';
    
    if (typeof showToast === 'function') {
      showToast(message, 'info');
    }
  },

  updateToggleButton(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.innerHTML = theme === this.THEMES.DARK ? '☀️' : '🌙';
    }
  },

  setupEventListeners() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggle());
    }
  },

  isDark() {
    return this.getTheme() === this.THEMES.DARK;
  },

  isLight() {
    return this.getTheme() === this.THEMES.LIGHT;
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  ThemeManager.init();
});
