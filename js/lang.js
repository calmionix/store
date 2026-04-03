/**
 * Calmionix - Language Manager
 * Handles Indonesia/English language toggle with localStorage persistence
 */

const translations = {
  id: {
    // Navigation
    navHome: 'Beranda',
    navShop: 'Toko',
    navVote: 'Vote',
    navTutorial: 'Tutorial',
    navDiscord: 'Discord',

    // Hero Section
    heroBadge: 'Server Minecraft Terbaik',
    heroTitle: 'Selamat Datang di',
    heroDescription: 'Bergabunglah dengan petualangan epik di server Minecraft terbaik. Dapatkan rank eksklusif, shard, dan pengalaman bermain yang tak terlupakan!',
    btnShop: '🛒 Beli Sekarang',
    btnJoin: '🎮 Join Server',

    // Server Info
    serverTitle: 'Alamat Server',
    serverStatus: 'Online',
    serverPlayers: 'pemain online',

    // Highlights Section
    highlightsTitle: 'Mengapa Memilih Kami?',
    highlightsSubtitle: 'Nikmati pengalaman bermain terbaik dengan fitur-fitur unggulan',
    highlight1Title: '⚡ Server Stabil',
    highlight1Desc: 'Uptime 99.9% dengan performa optimal untuk pengalaman bermain tanpa lag',
    highlight2Title: '🛡️ Anti-Cheat',
    highlight2Desc: 'Sistem proteksi canggih yang menjaga keadilan permainan',
    highlight3Title: '🎉 Event Rutin',
    highlight3Desc: 'Ikuti berbagai event menarik dengan hadiah yang melimpah',
    highlight4Title: '💬 Komunitas Aktif',
    highlight4Desc: 'Bergabung dengan ribuan pemain aktif dari seluruh Indonesia',

    // Vote Section
    voteTitle: '🗳️ Vote & Dapatkan Reward!',
    voteDescription: 'Dukung server kami dengan voting setiap hari dan dapatkan reward menarik',
    voteBtn: 'Vote Sekarang',
    rewardMoney: 'Uang In-Game',
    rewardShards: 'Shards',
    rewardKey: 'Crate Key',

    // Media Rank Section
    mediaBadge: 'GRATIS!',
    mediaTitle: 'Dapatkan Rank Media GRATIS!',
    mediaSubtitle: 'Jadilah content creator dan dapatkan rank eksklusif',
    mediaBenefitsTitle: 'Benefit Rank Media:',
    mediaRulesTitle: 'Syarat & Ketentuan:',
    mediaBenefit1: 'Akses /fly di semua dunia',
    mediaBenefit2: 'Bonus uang harian',
    mediaBenefit3: 'Tag [MEDIA] eksklusif',
    mediaBenefit4: 'Akses ke channel khusus',
    mediaRule1: 'Konten harus serius (tidak boleh JJ)',
    mediaRule2: 'Wajib membahas server Calmionix',
    mediaRule3: 'Minimal 1000 views per video',
    mediaRule4: 'Upload minimal 2 video per minggu',
    mediaSocialsTitle: 'Follow kami di:',
    mediaCta: 'Join Discord untuk Apply',

    // Discord CTA
    discordTitle: 'Bergabung dengan Komunitas Kami',
    discordDescription: 'Dapatkan update terbaru, bertemu pemain lain, dan ikuti event seru di Discord server kami!',
    discordBtn: 'Join Discord',

    // Shop Page
    shopTitle: '🛒 Toko Calmionix',
    shopSubtitle: 'Pilih rank atau shard yang ingin kamu beli',
    categoryRank: 'Rank',
    categoryShard: 'Shard',
    btnBuy: 'Beli',

    // Product Features
    vipKit: 'VIP Kit harian',
    vipPrefix: 'Prefix [VIP] eksklusif',
    vipSlots: '5 slot home tambahan',
    vipWarp: 'Akses /warp VIP',
    vipAuction: 'Akses pasar lelang',
    mvpKit: 'MVP Kit harian',
    mvpPrefix: 'Prefix [MVP] eksklusif',
    mvpSlots: '10 slot home tambahan',
    mvpFly: 'Akses /fly di dunia sendiri',
    mvpEnderchest: 'Akses /enderchest',
    mvpRepair: 'Perbaiki item gratis',
    legendKit: 'LEGEND Kit harian',
    legendPrefix: 'Prefix [LEGEND] eksklusif',
    legendSlots: '20 slot home tambahan',
    legendFly: 'Akses /fly di semua dunia',
    legendGod: 'Mode God sementara',
    legendNick: 'Ganti nickname',
    legendParticles: 'Efek partikel eksklusif',
    supremeKit: 'SUPREME Kit harian',
    supremePrefix: 'Prefix [SUPREME] eksklusif',
    supremeSlots: 'Unlimited home slots',
    supremeFly: 'Akses /fly permanen',
    supremeGod: 'Mode God lebih lama',
    supremeVanish: 'Akses /vanish',
    supremeWorld: 'Buat dunia pribadi',
    supremeSupport: 'Prioritas support',

    // Product Names & Descriptions
    rankVip: 'VIP',
    rankVipDesc: 'Akses fitur eksklusif untuk pemain VIP',
    rankMvp: 'MVP',
    rankMvpDesc: 'Fitur premium untuk pengalaman terbaik',
    rankLegend: 'LEGEND',
    rankLegendDesc: 'Status legendaris dengan semua fitur',
    rankSupreme: 'SUPREME',
    rankSupremeDesc: 'Rank tertinggi dengan kekuatan maksimal',
    shard100: '100 Shards',
    shard100Desc: 'Paket kecil untuk pemula',
    shard500: '500 Shards',
    shard500Desc: 'Paket standar dengan bonus',
    shard1000: '1.000 Shards',
    shard1000Desc: 'Paket populer dengan bonus besar',
    shard5000: '5.000 Shards',
    shard5000Desc: 'Paket besar untuk pemain serius',
    shard10000: '10.000 Shards',
    shard10000Desc: 'Paket ultimate dengan bonus maksimal',

    // Checkout Modal
    checkoutTitle: 'Checkout',
    labelUsername: 'Username Minecraft',
    placeholderUsername: 'Masukkan username kamu',
    labelPlatform: 'Pilih Platform',
    platformJava: 'Java Edition',
    platformBedrock: 'Bedrock Edition',
    bedrockNote: 'Untuk Bedrock, akan ditambahkan prefix "." otomatis',
    btnCancel: 'Batal',
    btnProceed: 'Lanjutkan Pembayaran',

    // Vote Page
    votePageTitle: '🗳️ Vote Calmionix',
    votePageSubtitle: 'Vote server kami dan dapatkan reward menarik setiap hari!',
    voteSiteTitle: 'Minecraft-MP',
    voteSiteDesc: 'Vote di Minecraft-MP dan dapatkan reward instan',
    voteBtnSite: 'Vote Sekarang',
    voteRewardsTitle: 'Reward Voting',
    rewardMoneyAmount: '$5.000',
    rewardShardsAmount: '50 Shards',
    rewardKeyAmount: '1 Vote Key',

    // Tutorial Page
    tutorialTitle: '📘 Cara Pembelian',
    tutorialSubtitle: 'Panduan lengkap cara membeli rank dan shard',
    step1Title: '1. Pilih Produk',
    step1Desc: 'Kunjungi halaman toko dan pilih rank atau shard yang ingin kamu beli',
    step2Title: '2. Klik Beli',
    step2Desc: 'Klik tombol "Beli" pada produk yang kamu pilih',
    step3Title: '3. Masukkan Username',
    step3Desc: 'Masukkan username Minecraft kamu dengan benar',
    step4Title: '4. Pilih Platform',
    step4Desc: 'Pilih Java Edition atau Bedrock Edition',
    step5Title: '5. Lakukan Pembayaran',
    step5Desc: 'Pilih metode pembayaran yang tersedia dan selesaikan transaksi',
    step6Title: '6. Reward Masuk!',
    step6Desc: 'Rank atau shard akan otomatis masuk ke akun kamu dalam 1-5 menit',
    supportTitle: 'Butuh Bantuan?',
    supportDesc: 'Jika mengalami kendala, hubungi tim support kami di Discord',
    supportBtn: 'Hubungi Support',

    // Footer
    footerCopyright: '© 2024 Calmionix. All rights reserved.',
    footerTerms: 'Syarat & Ketentuan',
    footerPrivacy: 'Kebijakan Privasi',

    // Toast Messages
    toastIpCopied: 'IP berhasil disalin!',
    toastOpeningCheckout: 'Membuka checkout...',
    toastComingSoon: 'Fitur ini segera hadir!',
    toastError: 'Terjadi kesalahan, coba lagi',
    toastFillAll: 'Harap isi semua field',
    toastProcessing: 'Memproses pembayaran...',

    // Misc
    online: 'Online',
    players: 'pemain',
    price: 'Harga',
    features: 'Fitur',
    bonus: 'Bonus',
    total: 'Total'
  },

  en: {
    // Navigation
    navHome: 'Home',
    navShop: 'Shop',
    navVote: 'Vote',
    navTutorial: 'Tutorial',
    navDiscord: 'Discord',

    // Hero Section
    heroBadge: 'Best Minecraft Server',
    heroTitle: 'Welcome to',
    heroDescription: 'Join the epic adventure on the best Minecraft server. Get exclusive ranks, shards, and an unforgettable gaming experience!',
    btnShop: '🛒 Shop Now',
    btnJoin: '🎮 Join Server',

    // Server Info
    serverTitle: 'Server Address',
    serverStatus: 'Online',
    serverPlayers: 'players online',

    // Highlights Section
    highlightsTitle: 'Why Choose Us?',
    highlightsSubtitle: 'Enjoy the best gaming experience with premium features',
    highlight1Title: '⚡ Stable Server',
    highlight1Desc: '99.9% uptime with optimal performance for lag-free gameplay',
    highlight2Title: '🛡️ Anti-Cheat',
    highlight2Desc: 'Advanced protection system that maintains game fairness',
    highlight3Title: '🎉 Regular Events',
    highlight3Desc: 'Participate in various exciting events with abundant rewards',
    highlight4Title: '💬 Active Community',
    highlight4Desc: 'Join thousands of active players from across Indonesia',

    // Vote Section
    voteTitle: '🗳️ Vote & Get Rewards!',
    voteDescription: 'Support our server by voting daily and get exciting rewards',
    voteBtn: 'Vote Now',
    rewardMoney: 'In-Game Money',
    rewardShards: 'Shards',
    rewardKey: 'Crate Key',

    // Media Rank Section
    mediaBadge: 'FREE!',
    mediaTitle: 'Get Media Rank for FREE!',
    mediaSubtitle: 'Become a content creator and get exclusive rank',
    mediaBenefitsTitle: 'Media Rank Benefits:',
    mediaRulesTitle: 'Terms & Conditions:',
    mediaBenefit1: 'Access /fly in all worlds',
    mediaBenefit2: 'Daily money bonus',
    mediaBenefit3: 'Exclusive [MEDIA] tag',
    mediaBenefit4: 'Access to exclusive channels',
    mediaRule1: 'Content must be serious (no JJ)',
    mediaRule2: 'Must discuss Calmionix server',
    mediaRule3: 'Minimum 1000 views per video',
    mediaRule4: 'Upload at least 2 videos per week',
    mediaSocialsTitle: 'Follow us on:',
    mediaCta: 'Join Discord to Apply',

    // Discord CTA
    discordTitle: 'Join Our Community',
    discordDescription: 'Get the latest updates, meet other players, and join fun events on our Discord server!',
    discordBtn: 'Join Discord',

    // Shop Page
    shopTitle: '🛒 Calmionix Shop',
    shopSubtitle: 'Choose the rank or shard you want to buy',
    categoryRank: 'Rank',
    categoryShard: 'Shard',
    btnBuy: 'Buy',

    // Product Features
    vipKit: 'Daily VIP Kit',
    vipPrefix: 'Exclusive [VIP] prefix',
    vipSlots: '5 extra home slots',
    vipWarp: 'Access /warp VIP',
    vipAuction: 'Auction house access',
    mvpKit: 'Daily MVP Kit',
    mvpPrefix: 'Exclusive [MVP] prefix',
    mvpSlots: '10 extra home slots',
    mvpFly: '/fly access in own world',
    mvpEnderchest: '/enderchest access',
    mvpRepair: 'Free item repair',
    legendKit: 'Daily LEGEND Kit',
    legendPrefix: 'Exclusive [LEGEND] prefix',
    legendSlots: '20 extra home slots',
    legendFly: '/fly access in all worlds',
    legendGod: 'Temporary God mode',
    legendNick: 'Change nickname',
    legendParticles: 'Exclusive particle effects',
    supremeKit: 'Daily SUPREME Kit',
    supremePrefix: 'Exclusive [SUPREME] prefix',
    supremeSlots: 'Unlimited home slots',
    supremeFly: 'Permanent /fly access',
    supremeGod: 'Extended God mode',
    supremeVanish: '/vanish access',
    supremeWorld: 'Create private world',
    supremeSupport: 'Priority support',

    // Product Names & Descriptions
    rankVip: 'VIP',
    rankVipDesc: 'Exclusive features for VIP players',
    rankMvp: 'MVP',
    rankMvpDesc: 'Premium features for the best experience',
    rankLegend: 'LEGEND',
    rankLegendDesc: 'Legendary status with all features',
    rankSupreme: 'SUPREME',
    rankSupremeDesc: 'Highest rank with maximum power',
    shard100: '100 Shards',
    shard100Desc: 'Small pack for beginners',
    shard500: '500 Shards',
    shard500Desc: 'Standard pack with bonus',
    shard1000: '1,000 Shards',
    shard1000Desc: 'Popular pack with big bonus',
    shard5000: '5,000 Shards',
    shard5000Desc: 'Big pack for serious players',
    shard10000: '10,000 Shards',
    shard10000Desc: 'Ultimate pack with maximum bonus',

    // Checkout Modal
    checkoutTitle: 'Checkout',
    labelUsername: 'Minecraft Username',
    placeholderUsername: 'Enter your username',
    labelPlatform: 'Select Platform',
    platformJava: 'Java Edition',
    platformBedrock: 'Bedrock Edition',
    bedrockNote: 'For Bedrock, "." prefix will be added automatically',
    btnCancel: 'Cancel',
    btnProceed: 'Proceed to Payment',

    // Vote Page
    votePageTitle: '🗳️ Vote Calmionix',
    votePageSubtitle: 'Vote for our server and get exciting rewards every day!',
    voteSiteTitle: 'Minecraft-MP',
    voteSiteDesc: 'Vote on Minecraft-MP and get instant rewards',
    voteBtnSite: 'Vote Now',
    voteRewardsTitle: 'Voting Rewards',
    rewardMoneyAmount: '$5,000',
    rewardShardsAmount: '50 Shards',
    rewardKeyAmount: '1 Vote Key',

    // Tutorial Page
    tutorialTitle: '📘 How to Purchase',
    tutorialSubtitle: 'Complete guide on how to buy ranks and shards',
    step1Title: '1. Select Product',
    step1Desc: 'Visit the shop page and select the rank or shard you want to buy',
    step2Title: '2. Click Buy',
    step2Desc: 'Click the "Buy" button on your selected product',
    step3Title: '3. Enter Username',
    step3Desc: 'Enter your Minecraft username correctly',
    step4Title: '4. Select Platform',
    step4Desc: 'Choose Java Edition or Bedrock Edition',
    step5Title: '5. Make Payment',
    step5Desc: 'Choose available payment method and complete the transaction',
    step6Title: '6. Reward Received!',
    step6Desc: 'Rank or shard will automatically enter your account in 1-5 minutes',
    supportTitle: 'Need Help?',
    supportDesc: 'If you encounter any issues, contact our support team on Discord',
    supportBtn: 'Contact Support',

    // Footer
    footerCopyright: '© 2024 Calmionix. All rights reserved.',
    footerTerms: 'Terms & Conditions',
    footerPrivacy: 'Privacy Policy',

    // Toast Messages
    toastIpCopied: 'IP copied successfully!',
    toastOpeningCheckout: 'Opening checkout...',
    toastComingSoon: 'This feature coming soon!',
    toastError: 'An error occurred, please try again',
    toastFillAll: 'Please fill in all fields',
    toastProcessing: 'Processing payment...',

    // Misc
    online: 'Online',
    players: 'players',
    price: 'Price',
    features: 'Features',
    bonus: 'Bonus',
    total: 'Total'
  }
};

const LanguageManager = {
  LANG_KEY: 'calmionix-lang',
  LANGS: {
    ID: 'id',
    EN: 'en'
  },

  /**
   * Initialize language manager
   */
  init() {
    window.currentLang = this.getLanguage();
    this.applyLanguage(window.currentLang);
    this.setupEventListeners();
  },

  /**
   * Get current language from localStorage or default
   * @returns {string} Current language
   */
  getLanguage() {
    return localStorage.getItem(this.LANG_KEY) || this.LANGS.ID;
  },

  /**
   * Set and save language
   * @param {string} lang - Language to set
   */
  setLanguage(lang) {
    localStorage.setItem(this.LANG_KEY, lang);
    window.currentLang = lang;
    this.applyLanguage(lang);
    this.updateToggleButton(lang);
    
    // Update ThemeManager for toast messages
    if (typeof ThemeManager !== 'undefined') {
      ThemeManager.updateToggleButton(ThemeManager.getTheme());
    }
  },

  /**
   * Apply language to all elements with data-i18n attribute
   * @param {string} lang - Language to apply
   */
  applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = translations[lang][key];
      if (translation) {
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
          element.setAttribute('placeholder', translation);
        } else if (element.tagName === 'META') {
          element.setAttribute('content', translation);
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update document language
    document.documentElement.setAttribute('lang', lang);
  },

  /**
   * Get translation for a key
   * @param {string} key - Translation key
   * @returns {string} Translated text
   */
  t(key) {
    return translations[window.currentLang || this.getLanguage()][key] || key;
  },

  /**
   * Toggle between languages
   */
  toggle() {
    const currentLang = this.getLanguage();
    const newLang = currentLang === this.LANGS.ID ? this.LANGS.EN : this.LANGS.ID;
    this.setLanguage(newLang);
    
    if (typeof showToast === 'function') {
      const message = newLang === this.LANGS.ID 
        ? 'Bahasa diubah ke Indonesia'
        : 'Language changed to English';
      showToast(message, 'info');
    }
  },

  /**
   * Update toggle button text
   * @param {string} lang - Current language
   */
  updateToggleButton(lang) {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.textContent = lang === this.LANGS.ID ? 'EN' : 'ID';
      langToggle.setAttribute('title', lang === this.LANGS.ID 
        ? 'Switch to English'
        : 'Beralih ke Bahasa Indonesia'
      );
    }
  },

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => this.toggle());
    }
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  LanguageManager.init();
});
