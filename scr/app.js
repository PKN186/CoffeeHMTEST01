// Application data
const appData = {
  "products": [
    {
      "id": 1,
      "name": "Классический эспрессо",
      "description": "Традиционный кофе из отборных зерен",
      "price": 150,
      "category": "классический",
      "isNew": false,
      "isPopular": true,
      "rating": 4.8,
      "image": "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 2,
      "name": "Американо",
      "description": "Мягкий разбавленный эспрессо",
      "price": 160,
      "category": "классический",
      "isNew": false,
      "isPopular": true,
      "rating": 4.6,
      "image": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 3,
      "name": "Капучино",
      "description": "Эспрессо с молочной пеной и корицей",
      "price": 180,
      "category": "с молоком",
      "isNew": false,
      "isPopular": true,
      "rating": 4.9,
      "image": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 4,
      "name": "Латте",
      "description": "Нежный кофе с большим количеством молока",
      "price": 190,
      "category": "с молоком",
      "isNew": false,
      "isPopular": true,
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 5,
      "name": "Маккиато",
      "description": "Эспрессо с капелькой молока",
      "price": 170,
      "category": "с молоком",
      "isNew": true,
      "isPopular": false,
      "rating": 4.5,
      "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 6,
      "name": "Мокачино",
      "description": "Кофе с шоколадом и взбитыми сливками",
      "price": 200,
      "category": "с молоком",
      "isNew": true,
      "isPopular": false,
      "rating": 4.8,
      "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 7,
      "name": "Холодный эспрессо",
      "description": "Освежающий эспрессо со льдом",
      "price": 160,
      "category": "холодный",
      "isNew": false,
      "isPopular": false,
      "rating": 4.4,
      "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 8,
      "name": "Айс-латте",
      "description": "Холодный латте с ванильным сиропом",
      "price": 200,
      "category": "холодный",
      "isNew": true,
      "isPopular": true,
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 9,
      "name": "Фраппе",
      "description": "Взбитый холодный кофе с молоком",
      "price": 190,
      "category": "холодный",
      "isNew": true,
      "isPopular": false,
      "rating": 4.6,
      "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 10,
      "name": "Раф-кофе",
      "description": "Кофе со сливками и ванильным сахаром",
      "price": 200,
      "category": "специальный",
      "isNew": true,
      "isPopular": false,
      "rating": 4.8,
      "image": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 11,
      "name": "Арабский кофе",
      "description": "Кофе с кардамоном и восточными специями",
      "price": 220,
      "category": "специальный",
      "isNew": true,
      "isPopular": false,
      "rating": 4.5,
      "image": "https://images.unsplash.com/photo-1484244233201-29dfe72c2b3d?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 12,
      "name": "Ирландский кофе",
      "description": "Кофе с ирландским кремом и взбитыми сливками",
      "price": 250,
      "category": "специальный",
      "isNew": false,
      "isPopular": false,
      "rating": 4.6,
      "image": "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 13,
      "name": "Гавайский кофе",
      "description": "Экзотический кофе с кокосовым молоком",
      "price": 230,
      "category": "специальный",
      "isNew": false,
      "isPopular": false,
      "rating": 4.4,
      "image": "https://images.unsplash.com/photo-1542990253-a781e0329b7f?w=300&h=300&fit=crop&auto=format"
    },
    {
      "id": 14,
      "name": "Флэт уайт",
      "description": "Двойной эспрессо с микропеной",
      "price": 180,
      "category": "с молоком",
      "isNew": false,
      "isPopular": true,
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop&auto=format"
    }
  ],
  "categories": [
    { "id": "все", "name": "Все", "icon": "☕" },
    { "id": "классический", "name": "Классический", "icon": "☕" },
    { "id": "с молоком", "name": "С молоком", "icon": "🥛" },
    { "id": "холодный", "name": "Холодный", "icon": "🧊" },
    { "id": "специальный", "name": "Специальный", "icon": "✨" }
  ],
  "location": {
    "address": "Ханты-Мансийск, ТЦ \"Гостиный двор\", 4 этаж",
    "phone": "+7 (3467) 12-34-56",
    "hours": "8:00 - 22:00",
    "maps": {
      "google": "https://maps.google.com/?q=Ханты-Мансийск",
      "yandex": "https://yandex.ru/maps/11006/khanty-mansiysk/",
      "gis": "https://2gis.ru/kh_mansiysk"
    }
  },
  "appInfo": {
    "name": "COFFEE SHOP H-M",
    "description": "Лучший кофе в городе с доставкой прямо к вам!",
    "deliveryTime": "15-30 минут",
    "minOrder": 300
  }
};

// Application state
let currentCategory = 'все';
let currentSection = 'home';
let cart = [];
let searchQuery = '';

// Telegram Web App initialization
let tg = window.Telegram?.WebApp;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Telegram Web App
  if (tg) {
    tg.ready();
    tg.expand();
  }
  
  // Load initial data
  initializeApp();
  
  // Set up event listeners
  setupEventListeners();
  
  // Show home section by default
  showSection('home');
});

function initializeApp() {
  renderCategories();
  renderProducts();
  renderNewProducts();
  renderPopularProducts();
  updateCartDisplay();
}

function setupEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const section = e.currentTarget.dataset.section;
      showSection(section);
    });
  });
  
  // Cart button
  const cartButton = document.getElementById('cartButton');
  if (cartButton) {
    cartButton.addEventListener('click', () => {
      showSection('cart');
    });
  }
  
  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderProducts();
    });
  }
  
  // Checkout button
  const checkoutButton = document.getElementById('checkoutButton');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
      if (cart.length === 0) {
        showAlert('Корзина пуста!');
        return;
      }
      if (getTotalPrice() < appData.appInfo.minOrder) {
        showAlert(`Минимальная сумма заказа: ${appData.appInfo.minOrder}₽`);
        return;
      }
      showSection('checkout');
    });
  }
  
  // Checkout form
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckout);
  }
  
  // Modal close
  const closeModal = document.getElementById('closeModal');
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      document.getElementById('successModal').style.display = 'none';
      showSection('home');
    });
  }
}

function renderCategories() {
  const categoriesList = document.getElementById('categoriesList');
  if (!categoriesList) return;
  
  categoriesList.innerHTML = '';
  
  appData.categories.forEach(category => {
    const button = document.createElement('button');
    button.className = `category-btn ${category.id === currentCategory ? 'active' : ''}`;
    button.innerHTML = `${category.icon} ${category.name}`;
    button.addEventListener('click', () => {
      currentCategory = category.id;
      renderCategories();
      renderProducts();
    });
    categoriesList.appendChild(button);
  });
}

function renderNewProducts() {
  const newProductsCarousel = document.getElementById('newProductsCarousel');
  if (!newProductsCarousel) return;
  
  newProductsCarousel.innerHTML = '';
  
  const newProducts = appData.products.filter(product => product.isNew);
  
  newProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'carousel-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="carousel-card__image">
      <div class="carousel-card__content">
        <h3 class="carousel-card__title">${product.name}</h3>
        <p class="carousel-card__description">${product.description}</p>
        <div class="carousel-card__footer">
          <span class="carousel-card__price">${product.price}₽</span>
          <button class="carousel-card__order-btn" onclick="addToCart(${product.id})">
            Заказать
          </button>
        </div>
      </div>
    `;
    newProductsCarousel.appendChild(card);
  });
}

function renderPopularProducts() {
  const popularProductsCarousel = document.getElementById('popularProductsCarousel');
  if (!popularProductsCarousel) return;
  
  popularProductsCarousel.innerHTML = '';
  
  const popularProducts = appData.products.filter(product => product.isPopular);
  
  popularProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'carousel-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="carousel-card__image">
      <div class="carousel-card__content">
        <h3 class="carousel-card__title">${product.name}</h3>
        <p class="carousel-card__description">${product.description}</p>
        <div class="carousel-card__footer">
          <div>
            <div class="carousel-card__price">${product.price}₽</div>
            <div class="carousel-card__rating">
              <span class="stars">${generateStars(product.rating)}</span>
              <span>${product.rating}</span>
            </div>
          </div>
          <button class="carousel-card__order-btn" onclick="addToCart(${product.id})">
            Заказать
          </button>
        </div>
      </div>
    `;
    popularProductsCarousel.appendChild(card);
  });
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  
  if (halfStar) {
    stars += '☆';
  }
  
  return stars;
}

function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '';
  
  let filteredProducts = appData.products;
  
  // Filter by category
  if (currentCategory !== 'все') {
    filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
  }
  
  // Filter by search query
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery)
    );
  }
  
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        <h3>Товары не найдены</h3>
        <p>Попробуйте изменить фильтры или поисковый запрос</p>
      </div>
    `;
    return;
  }
  
  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-card__image">
      <div class="product-card__content">
        <h3 class="product-card__title">${product.name}</h3>
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__footer">
          <span class="product-card__price">${product.price}₽</span>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
            В корзину
          </button>
        </div>
      </div>
    `;
    productsGrid.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  updateCartDisplay();
  showAlert(`${product.name} добавлен в корзину`);
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
  
  renderCartItems();
  updateTotalPrice();
}

function renderCartItems() {
  const cartItems = document.getElementById('cartItems');
  if (!cartItems) return;
  
  cartItems.innerHTML = '';
  
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <h3>Корзина пуста</h3>
        <p>Добавьте товары из меню</p>
      </div>
    `;
    return;
  }
  
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item__image">
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">${item.price}₽</div>
      </div>
      <div class="cart-item__controls">
        <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
        <span class="quantity-display">${item.quantity}</span>
        <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
      </div>
    `;
    cartItems.appendChild(cartItem);
  });
}

function increaseQuantity(productId) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += 1;
    updateCartDisplay();
  }
}

function decreaseQuantity(productId) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex !== -1) {
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity -= 1;
    } else {
      cart.splice(itemIndex, 1);
    }
    updateCartDisplay();
  }
}

function getTotalPrice() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateTotalPrice() {
  const totalPrice = getTotalPrice();
  const totalPriceElement = document.getElementById('totalPrice');
  const summarySubtotal = document.getElementById('summarySubtotal');
  const summaryTotal = document.getElementById('summaryTotal');
  
  if (totalPriceElement) totalPriceElement.textContent = `${totalPrice}₽`;
  if (summarySubtotal) summarySubtotal.textContent = `${totalPrice}₽`;
  if (summaryTotal) summaryTotal.textContent = `${totalPrice}₽`;
}

function showSection(section) {
  currentSection = section;
  
  // Get all section elements
  const heroSection = document.getElementById('heroSection');
  const newProductsSection = document.getElementById('newProductsSection');
  const popularProductsSection = document.getElementById('popularProductsSection');
  const searchSection = document.querySelector('.search-section');
  const categoriesSection = document.querySelector('.categories');
  const productsSection = document.querySelector('.products');
  const findUsSection = document.getElementById('findUsSection');
  const cartSection = document.getElementById('cartSection');
  const checkoutSection = document.getElementById('checkoutSection');
  
  // Hide all sections
  if (heroSection) heroSection.style.display = 'none';
  if (newProductsSection) newProductsSection.style.display = 'none';
  if (popularProductsSection) popularProductsSection.style.display = 'none';
  if (searchSection) searchSection.style.display = 'none';
  if (categoriesSection) categoriesSection.style.display = 'none';
  if (productsSection) productsSection.style.display = 'none';
  if (findUsSection) findUsSection.style.display = 'none';
  if (cartSection) cartSection.style.display = 'none';
  if (checkoutSection) checkoutSection.style.display = 'none';
  
  // Update navigation active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Show appropriate section
  switch(section) {
    case 'home':
      if (heroSection) heroSection.style.display = 'block';
      if (newProductsSection) newProductsSection.style.display = 'block';
      if (popularProductsSection) popularProductsSection.style.display = 'block';
      if (searchSection) searchSection.style.display = 'block';
      if (categoriesSection) categoriesSection.style.display = 'block';
      if (productsSection) productsSection.style.display = 'block';
      document.querySelector('[data-section="home"]')?.classList.add('active');
      break;
    case 'products':
      if (searchSection) searchSection.style.display = 'block';
      if (categoriesSection) categoriesSection.style.display = 'block';
      if (productsSection) productsSection.style.display = 'block';
      document.querySelector('[data-section="products"]')?.classList.add('active');
      break;
    case 'cart':
      if (cartSection) cartSection.style.display = 'block';
      document.querySelector('[data-section="cart"]')?.classList.add('active');
      updateCartDisplay();
      break;
    case 'find-us':
      if (findUsSection) findUsSection.style.display = 'block';
      document.querySelector('[data-section="find-us"]')?.classList.add('active');
      break;
    case 'checkout':
      if (checkoutSection) checkoutSection.style.display = 'block';
      updateTotalPrice();
      break;
  }
}

function handleCheckout(e) {
  e.preventDefault();
  
  const customerName = document.getElementById('customerName');
  const customerPhone = document.getElementById('customerPhone');
  const customerAddress = document.getElementById('customerAddress');
  const customerComment = document.getElementById('customerComment');
  
  if (!customerName || !customerPhone || !customerAddress) {
    showAlert('Форма не найдена');
    return;
  }
  
  const customerData = {
    name: customerName.value,
    phone: customerPhone.value,
    address: customerAddress.value,
    comment: customerComment ? customerComment.value : ''
  };
  
  // Validate required fields
  if (!customerData.name || !customerData.phone || !customerData.address) {
    showAlert('Пожалуйста, заполните все обязательные поля');
    return;
  }
  
  // Check minimum order
  if (getTotalPrice() < appData.appInfo.minOrder) {
    showAlert(`Минимальная сумма заказа: ${appData.appInfo.minOrder}₽`);
    return;
  }
  
  // Prepare order data
  const orderData = {
    customer: customerData,
    items: cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity
    })),
    total: getTotalPrice(),
    timestamp: new Date().toISOString()
  };
  
  // Send order to Telegram
  if (tg) {
    tg.sendData(JSON.stringify(orderData));
    tg.close();
  } else {
    // Fallback for testing without Telegram
    console.log('Order data:', orderData);
  }
  
  // Show success message
  const successModal = document.getElementById('successModal');
  if (successModal) {
    successModal.style.display = 'flex';
  }
  
  // Clear cart
  cart = [];
  updateCartDisplay();
  
  // Reset form
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.reset();
  }
}

function showAlert(message) {
  if (tg) {
    tg.showAlert(message);
  } else {
    alert(message);
  }
}

// Global functions for inline event handlers
window.addToCart = addToCart;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;