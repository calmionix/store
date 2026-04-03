/**
 * Calmionix - Products Data
 * All product data is stored here for easy management
 */

const PRODUCTS = {
  ranks: [
    {
      id: 'rank-vip',
      name: 'VIP',
      nameId: 'rankVip',
      description: 'Akses fitur eksklusif untuk pemain VIP',
      descriptionId: 'rankVipDesc',
      descriptionEn: 'Exclusive features for VIP players',
      price: 25000,
      priceFormatted: 'Rp 25.000',
      icon: '👑',
      color: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      features: [
        { id: 'vipKit', text: 'VIP Kit harian' },
        { id: 'vipPrefix', text: 'Prefix [VIP] eksklusif' },
        { id: 'vipSlots', text: '5 slot home tambahan' },
        { id: 'vipWarp', text: 'Akses /warp VIP' },
        { id: 'vipAuction', text: 'Akses pasar lelang' }
      ],
      featuresEn: [
        'Daily VIP Kit',
        'Exclusive [VIP] prefix',
        '5 extra home slots',
        'Access /warp VIP',
        'Auction house access'
      ]
    },
    {
      id: 'rank-mvp',
      name: 'MVP',
      nameId: 'rankMvp',
      description: 'Fitur premium untuk pengalaman terbaik',
      descriptionId: 'rankMvpDesc',
      descriptionEn: 'Premium features for the best experience',
      price: 50000,
      priceFormatted: 'Rp 50.000',
      icon: '💎',
      color: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      features: [
        { id: 'mvpKit', text: 'MVP Kit harian' },
        { id: 'mvpPrefix', text: 'Prefix [MVP] eksklusif' },
        { id: 'mvpSlots', text: '10 slot home tambahan' },
        { id: 'mvpFly', text: 'Akses /fly di dunia sendiri' },
        { id: 'mvpEnderchest', text: 'Akses /enderchest' },
        { id: 'mvpRepair', text: 'Perbaiki item gratis' }
      ],
      featuresEn: [
        'Daily MVP Kit',
        'Exclusive [MVP] prefix',
        '10 extra home slots',
        '/fly access in own world',
        '/enderchest access',
        'Free item repair'
      ]
    },
    {
      id: 'rank-legend',
      name: 'LEGEND',
      nameId: 'rankLegend',
      description: 'Status legendaris dengan semua fitur',
      descriptionId: 'rankLegendDesc',
      descriptionEn: 'Legendary status with all features',
      price: 100000,
      priceFormatted: 'Rp 100.000',
      icon: '🔥',
      color: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      features: [
        { id: 'legendKit', text: 'LEGEND Kit harian' },
        { id: 'legendPrefix', text: 'Prefix [LEGEND] eksklusif' },
        { id: 'legendSlots', text: '20 slot home tambahan' },
        { id: 'legendFly', text: 'Akses /fly di semua dunia' },
        { id: 'legendGod', text: 'Mode God sementara' },
        { id: 'legendNick', text: 'Ganti nickname' },
        { id: 'legendParticles', text: 'Efek partikel eksklusif' }
      ],
      featuresEn: [
        'Daily LEGEND Kit',
        'Exclusive [LEGEND] prefix',
        '20 extra home slots',
        '/fly access in all worlds',
        'Temporary God mode',
        'Change nickname',
        'Exclusive particle effects'
      ]
    },
    {
      id: 'rank-supreme',
      name: 'SUPREME',
      nameId: 'rankSupreme',
      description: 'Rank tertinggi dengan kekuatan maksimal',
      descriptionId: 'rankSupremeDesc',
      descriptionEn: 'Highest rank with maximum power',
      price: 200000,
      priceFormatted: 'Rp 200.000',
      icon: '⚡',
      color: 'linear-gradient(135deg, #ef4444, #f97316)',
      features: [
        { id: 'supremeKit', text: 'SUPREME Kit harian' },
        { id: 'supremePrefix', text: 'Prefix [SUPREME] eksklusif' },
        { id: 'supremeSlots', text: 'Unlimited home slots' },
        { id: 'supremeFly', text: 'Akses /fly permanen' },
        { id: 'supremeGod', text: 'Mode God lebih lama' },
        { id: 'supremeVanish', text: 'Akses /vanish' },
        { id: 'supremeWorld', text: 'Buat dunia pribadi' },
        { id: 'supremeSupport', text: 'Prioritas support' }
      ],
      featuresEn: [
        'Daily SUPREME Kit',
        'Exclusive [SUPREME] prefix',
        'Unlimited home slots',
        'Permanent /fly access',
        'Extended God mode',
        '/vanish access',
        'Create private world',
        'Priority support'
      ]
    }
  ],
  shards: [
    {
      id: 'shard-100',
      name: '100 Shards',
      nameId: 'shard100',
      description: 'Paket kecil untuk pemula',
      descriptionId: 'shard100Desc',
      descriptionEn: 'Small pack for beginners',
      price: 5000,
      priceFormatted: 'Rp 5.000',
      icon: '💠',
      color: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
      amount: 100,
      bonus: 0
    },
    {
      id: 'shard-500',
      name: '500 Shards',
      nameId: 'shard500',
      description: 'Paket standar dengan bonus',
      descriptionId: 'shard500Desc',
      descriptionEn: 'Standard pack with bonus',
      price: 20000,
      priceFormatted: 'Rp 20.000',
      icon: '💎',
      color: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
      amount: 500,
      bonus: 50
    },
    {
      id: 'shard-1000',
      name: '1.000 Shards',
      nameId: 'shard1000',
      description: 'Paket populer dengan bonus besar',
      descriptionId: 'shard1000Desc',
      descriptionEn: 'Popular pack with big bonus',
      price: 35000,
      priceFormatted: 'Rp 35.000',
      icon: '💎',
      color: 'linear-gradient(135deg, #f472b6, #ec4899)',
      amount: 1000,
      bonus: 150
    },
    {
      id: 'shard-5000',
      name: '5.000 Shards',
      nameId: 'shard5000',
      description: 'Paket besar untuk pemain serius',
      descriptionId: 'shard5000Desc',
      descriptionEn: 'Big pack for serious players',
      price: 150000,
      priceFormatted: 'Rp 150.000',
      icon: '👑',
      color: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      amount: 5000,
      bonus: 1000
    },
    {
      id: 'shard-10000',
      name: '10.000 Shards',
      nameId: 'shard10000',
      description: 'Paket ultimate dengan bonus maksimal',
      descriptionId: 'shard10000Desc',
      descriptionEn: 'Ultimate pack with maximum bonus',
      price: 250000,
      priceFormatted: 'Rp 250.000',
      icon: '🌟',
      color: 'linear-gradient(135deg, #f87171, #ef4444)',
      amount: 10000,
      bonus: 2500
    }
  ]
};

// Helper function to get product by ID
function getProductById(productId) {
  const allProducts = [...PRODUCTS.ranks, ...PRODUCTS.shards];
  return allProducts.find(product => product.id === productId);
}

// Helper function to get products by category
function getProductsByCategory(category) {
  return PRODUCTS[category] || [];
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, getProductById, getProductsByCategory };
}
