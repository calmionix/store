/**
 * Calmionix - Checkout System
 * Handles product checkout with Java/Bedrock platform logic
 */

const CheckoutManager = {
  currentProduct: null,
  modal: null,
  overlay: null,

  /**
   * Initialize checkout manager
   */
  init() {
    this.modal = document.getElementById('checkout-modal');
    this.overlay = document.getElementById('modal-overlay');
    this.setupEventListeners();
  },

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Close modal on overlay click
    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.closeModal();
        }
      });
    }

    // Close modal on close button click
    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    // Cancel button
    const cancelBtn = document.getElementById('checkout-cancel');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => this.closeModal());
    }

    // Proceed button
    const proceedBtn = document.getElementById('checkout-proceed');
    if (proceedBtn) {
      proceedBtn.addEventListener('click', () => this.processPayment());
    }

    // Platform selection change
    const platformInputs = document.querySelectorAll('input[name="platform"]');
    platformInputs.forEach(input => {
      input.addEventListener('change', () => this.updateBedrockNote());
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay && this.overlay.classList.contains('active')) {
        this.closeModal();
      }
    });
  },

  /**
   * Open checkout modal for a product
   * @param {string} productId - Product ID
   */
  openCheckout(productId) {
    const product = getProductById(productId);
    if (!product) {
      showToast(LanguageManager.t('toastError'), 'error');
      return;
    }

    this.currentProduct = product;
    this.updateModalContent(product);
    this.showModal();
    
    showToast(LanguageManager.t('toastOpeningCheckout'), 'info');
  },

  /**
   * Update modal content with product info
   * @param {Object} product - Product object
   */
  updateModalContent(product) {
    const iconEl = document.getElementById('checkout-product-icon');
    const nameEl = document.getElementById('checkout-product-name');
    const priceEl = document.getElementById('checkout-product-price');

    if (iconEl) iconEl.textContent = product.icon;
    if (nameEl) {
      const lang = window.currentLang || 'id';
      nameEl.textContent = product[lang === 'id' ? 'nameId' : 'name'] || product.name;
    }
    if (priceEl) priceEl.textContent = product.priceFormatted;

    // Reset form
    const usernameInput = document.getElementById('checkout-username');
    if (usernameInput) {
      usernameInput.value = '';
      usernameInput.focus();
    }

    // Reset platform to Java
    const javaInput = document.querySelector('input[value="java"]');
    if (javaInput) javaInput.checked = true;

    this.updateBedrockNote();
  },

  /**
   * Update bedrock note visibility
   */
  updateBedrockNote() {
    const bedrockInput = document.querySelector('input[value="bedrock"]');
    const noteEl = document.getElementById('bedrock-note');
    
    if (noteEl && bedrockInput) {
      noteEl.style.display = bedrockInput.checked ? 'block' : 'none';
    }
  },

  /**
   * Show modal
   */
  showModal() {
    if (this.overlay) {
      this.overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  /**
   * Close modal
   */
  closeModal() {
    if (this.overlay) {
      this.overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    this.currentProduct = null;
  },

  /**
   * Get formatted username based on platform
   * @param {string} username - Raw username
   * @param {string} platform - Platform (java/bedrock)
   * @returns {string} Formatted username
   */
  getFormattedUsername(username, platform) {
    const trimmedUsername = username.trim();
    
    if (platform === 'bedrock') {
      // Add "." prefix for Bedrock users
      return trimmedUsername.startsWith('.') ? trimmedUsername : '.' + trimmedUsername;
    }
    
    return trimmedUsername;
  },

  /**
   * Validate username
   * @param {string} username - Username to validate
   * @returns {boolean} Is valid
   */
  validateUsername(username) {
    if (!username || username.trim().length === 0) {
      return false;
    }
    
    // Minecraft username rules (3-16 characters, alphanumeric + underscore)
    const cleanUsername = username.trim().replace(/^\./, ''); // Remove bedrock prefix for validation
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    
    return usernameRegex.test(cleanUsername);
  },

  /**
   * Process payment
   */
  processPayment() {
    if (!this.currentProduct) {
      showToast(LanguageManager.t('toastError'), 'error');
      return;
    }

    const usernameInput = document.getElementById('checkout-username');
    const platformInput = document.querySelector('input[name="platform"]:checked');

    if (!usernameInput || !platformInput) {
      showToast(LanguageManager.t('toastError'), 'error');
      return;
    }

    const rawUsername = usernameInput.value;
    const platform = platformInput.value;

    // Validate username
    if (!this.validateUsername(rawUsername)) {
      showToast(
        window.currentLang === 'en' 
          ? 'Please enter a valid Minecraft username (3-16 characters)'
          : 'Masukkan username Minecraft yang valid (3-16 karakter)',
        'error'
      );
      usernameInput.focus();
      return;
    }

    const formattedUsername = this.getFormattedUsername(rawUsername, platform);

    // Show processing toast
    showToast(LanguageManager.t('toastProcessing'), 'info');

    // Prepare payment data
    const paymentData = {
      productId: this.currentProduct.id,
      productName: this.currentProduct.name,
      price: this.currentProduct.price,
      username: formattedUsername,
      platform: platform,
      timestamp: new Date().toISOString()
    };

    console.log('Payment Data:', paymentData);

    // ============================================
    // PAYMENT INTEGRATION AREA
    // ============================================
    // 
    // This is where you integrate with your payment gateway:
    // 
    // Option 1: Tebex Integration
    // - Redirect to Tebex checkout with the product info
    // - Handle Tebex webhook for automatic delivery
    //
    // Option 2: Midtrans Integration
    // - Create transaction via Midtrans API
    // - Handle payment notification webhook
    //
    // Option 3: Custom Payment Gateway
    // - Implement your own payment flow
    // - Handle payment confirmation and delivery
    //
    // Example Tebex redirect:
    // window.location.href = `https://checkout.tebex.io/your-store/${this.currentProduct.id}?username=${encodeURIComponent(formattedUsername)}`;
    //
    // Example Midtrans flow:
    // fetch('/api/create-transaction', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(paymentData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   window.snap.pay(data.token);
    // });
    //
    // ============================================

    // For demo purposes, show success message
    setTimeout(() => {
      this.closeModal();
      showToast(
        window.currentLang === 'en'
          ? `Checkout initiated for ${formattedUsername}!`
          : `Checkout dimulai untuk ${formattedUsername}!`,
        'success'
      );

      // TODO: Implement actual payment gateway integration
      // This is where you would redirect to your payment processor
      // or open a payment widget
      
    }, 1500);
  },

  /**
   * Handle successful payment (called from webhook/payment callback)
   * @param {Object} paymentData - Payment data from gateway
   */
  handlePaymentSuccess(paymentData) {
    // This function should be called from your payment webhook
    // to deliver the product to the user
    
    console.log('Payment successful:', paymentData);
    
    // TODO: Implement product delivery logic
    // - Give rank to player
    // - Add shards to player account
    // - Send notification to player
    // - Log transaction
  }
};

// Global function for opening checkout (called from HTML)
function openCheckout(productId) {
  CheckoutManager.openCheckout(productId);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  CheckoutManager.init();
});
