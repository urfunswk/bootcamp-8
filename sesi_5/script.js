const products = [
  {
    name: 'Headset Gaming Ultra',
    price: 350000,
    description: 'Headset nyaman dengan suara bass kuat untuk bermain game dan meeting online.',
    image: 'https://placehold.co/800x450/31506d/ffffff?text=Headset+Gaming',
    category: 'electronics'
  },
  {
    name: 'Tas Kulit Kasual',
    price: 220000,
    description: 'Tas gaya modern untuk kerja dan hangout dengan banyak kompartemen.',
    image: 'https://placehold.co/800x450/7a4b8f/ffffff?text=Tas+Kulit+Kasual',
    category: 'fashion'
  },
  {
    name: 'Lampu Meja LED',
    price: 180000,
    description: 'Lampu meja hemat energi dengan tiga tingkat kecerahan.',
    image: 'https://placehold.co/800x450/f59e0b/ffffff?text=Lampu+Meja+LED',
    category: 'home'
  },
  {
    name: 'Sepatu Sneakers',
    price: 270000,
    description: 'Sepatu sporty nyaman untuk aktivitas sehari-hari dan jalan santai.',
    image: 'https://placehold.co/800x450/1e40af/ffffff?text=Sepatu+Sneakers',
    category: 'fashion'
  },
  {
    name: 'Speaker Bluetooth',
    price: 295000,
    description: 'Speaker portabel dengan suara jernih dan koneksi nirkabel cepat.',
    image: 'https://placehold.co/800x450/0f766e/ffffff?text=Speaker+Bluetooth',
    category: 'electronics'
  },
  {
    name: 'Set Gelas Kopi',
    price: 145000,
    description: 'Set gelas cantik untuk minum kopi atau teh di pagi hari.',
    image: 'https://placehold.co/800x450/8b5cf6/ffffff?text=Set+Gelas+Kopi',
    category: 'home'
  },
  {
    name: 'Watch Smartband',
    price: 295000,
    description: 'Smartwatch dengan monitor detak jantung dan notifikasi pesan.',
    image: 'https://placehold.co/800x450/0ea5e9/ffffff?text=Watch+Smartband',
    category: 'electronics'
  },
  {
    name: 'Kemeja Putih Slim Fit',
    price: 185000,
    description: 'Kemeja formal nyaman untuk kantor dan acara resmi.',
    image: 'https://placehold.co/800x450/ffffff/000000?text=Kemeja+Putih+Slim+Fit',
    category: 'fashion'
  },
  {
    name: 'Pajangan Dinding Kayu',
    price: 195000,
    description: 'Dekorasi dinding bergaya minimalis untuk ruang tamu.',
    image: 'https://placehold.co/800x450/a78bfa/ffffff?text=Pajangan+Dinding+Kayu',
    category: 'home'
  },
  {
    name: 'Kamera Aksi',
    price: 420000,
    description: 'Kamera tahan air untuk merekam petualangan luar ruangan.',
    image: 'https://placehold.co/800x450/f97316/ffffff?text=Kamera+Aksi',
    category: 'electronics'
  },
  {
    name: 'Jaket Denim',
    price: 325000,
    description: 'Jaket denim gaya kasual yang cocok untuk berbagai suasana.',
    image: 'https://placehold.co/800x450/0f172a/ffffff?text=Jaket+Denim',
    category: 'fashion'
  },
  {
    name: 'Karpet Ruang Tamu',
    price: 245000,
    description: 'Karpet empuk dengan motif elegan untuk memperindah ruang tamu.',
    image: 'https://placehold.co/800x450/334155/ffffff?text=Karpet+Ruang+Tamu',
    category: 'home'
  },
  {
    name: 'Keyboard Mekanik',
    price: 310000,
    description: 'Keyboard mekanik dengan lampu RGB dan switch responsif.',
    image: 'https://placehold.co/800x450/312e81/ffffff?text=Keyboard+Mekanik',
    category: 'electronics'
  },
  {
    name: 'Rok Midi Floral',
    price: 195000,
    description: 'Rok bermotif floral dengan potongan midi yang elegan.',
    image: 'https://placehold.co/800x450/f472b6/ffffff?text=Rok+Midi+Floral',
    category: 'fashion'
  },
  {
    name: 'Bantal Hias',
    price: 125000,
    description: 'Bantal motif modern yang nyaman untuk sofa dan kamar tidur.',
    image: 'https://placehold.co/800x450/facc15/000000?text=Bantal+Hias',
    category: 'home'
  },
  {
    name: 'Mouse Wireless',
    price: 165000,
    description: 'Mouse nirkabel ergonomis untuk kenyamanan kerja dan bermain.',
    image: 'https://placehold.co/800x450/0f766e/ffffff?text=Mouse+Wireless',
    category: 'electronics'
  },
  {
    name: 'Sweater Rajut',
    price: 215000,
    description: 'Sweater hangat dengan desain klasik untuk musim dingin.',
    image: 'https://placehold.co/800x450/7c3aed/ffffff?text=Sweater+Rajut',
    category: 'fashion'
  },
  {
    name: 'Panci Set',
    price: 265000,
    description: 'Set panci tahan lama untuk memasak sehari-hari.',
    image: 'https://placehold.co/800x450/7f1d1d/ffffff?text=Panci+Set',
    category: 'home'
  },
  {
    name: 'Charger Cepat',
    price: 135000,
    description: 'Charger cepat USB-C untuk mengisi daya gadget dalam waktu singkat.',
    image: 'https://placehold.co/800x450/0f172a/ffffff?text=Charger+Cepat',
    category: 'electronics'
  },
  {
    name: 'Kamera DSLR',
    price: 480000,
    description: 'Kamera DSLR dengan lensa standar untuk foto profesional dan liburan.',
    image: 'https://placehold.co/800x450/111827/ffffff?text=Kamera+DSLR',
    category: 'electronics'
  }
];

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const productCount = document.getElementById('productCount');

function formatCurrency(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
}

function renderProducts(items) {
  if (!productList) return;
  if (productCount) {
    productCount.textContent = `Menampilkan ${items.length} produk`;
  }

  if (items.length === 0) {
    productList.innerHTML = '<p class="no-results">Produk tidak ditemukan.</p>';
    return;
  }

  productList.innerHTML = items.map(item => `
    <article class="product-card">
      <img src="${item.image}" alt="${item.name}" />
      <div class="product-content">
        <h2 class="product-title">${item.name}</h2>
        <p class="product-description">${item.description}</p>
        <div class="product-meta">
          <span class="product-price">${formatCurrency(item.price)}</span>
          <span class="product-category">${item.category}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function filterProducts(category, query) {
  let result = products;

  if (category !== 'all') {
    result = result.filter(product => product.category === category);
  }

  if (query) {
    result = result.filter(product => {
      const text = `${product.name} ${product.description}`.toLowerCase();
      return text.includes(query);
    });
  }

  return result;
}

function updateProducts() {
  const selectedCategory = categoryFilter.value;
  const searchQuery = searchInput.value.trim().toLowerCase();
  const filtered = filterProducts(selectedCategory, searchQuery);
  renderProducts(filtered);
}

categoryFilter.addEventListener('change', updateProducts);
searchInput.addEventListener('input', updateProducts);

window.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
});
