// Data
const menuData = {
  pizzas: [
    { id: 'p1', name: 'Chicken Tikka', desc: 'Legends collection', prices: { Small: 650, Medium: 1300, Large: 1800 }, img: 'pizza.jfif' },
    { id: 'p2', name: 'BBQ Smokey', desc: 'Legends collection', prices: { Small: 650, Medium: 1300, Large: 1800 }, img: 'pizza.jfif' },
    { id: 'p3', name: 'Cheese Lover', desc: 'Legends collection', prices: { Small: 650, Medium: 1300, Large: 1800 }, img: 'pizza.jfif' },
    { id: 'p4', name: 'Mughlai Tikka', desc: 'Ultimate collection', prices: { Small: 700, Medium: 1450, Large: 1900 }, img: 'pizza.jfif' },
    { id: 'p5', name: 'Afghan Tikka', desc: 'Ultimate collection', prices: { Small: 700, Medium: 1450, Large: 1900 }, img: 'pizza.jfif' },
    { id: 'p6', name: 'Malai Boti Pizza', desc: 'Ultimate collection', prices: { Small: 700, Medium: 1450, Large: 1900 }, img: 'pizza.jfif' },
    { id: 'p7', name: 'Chicken Cheese Stik', desc: 'Signature Pizza', prices: { Medium: 1700, Large: 2300 }, img: 'pizza.jfif' },
    { id: 'p8', name: 'Crown Crust', desc: 'Signature Pizza', prices: { Medium: 1700, Large: 2300 }, img: 'pizza.jfif' },
    { id: 'p9', name: 'Lava Pizza', desc: 'Signature Pizza', prices: { Large: 2500 }, img: 'pizza.jfif' }
  ],
  starters: [
    { id: 's1', name: 'Chicken Nuggets (5 pcs)', desc: 'Crispy nuggets', prices: { Regular: 350 }, img: 'pizza.jfif' },
    { id: 's2', name: 'Chicken Nuggets (10 pcs)', desc: 'Crispy nuggets', prices: { Regular: 650 }, img: 'pizza.jfif' },
    { id: 's3', name: 'Hot Crispy Wings (5 pcs)', desc: 'Spicy wings', prices: { Regular: 350 }, img: 'pizza.jfif' },
    { id: 's4', name: 'Hot Crispy Wings (10 pcs)', desc: 'Spicy wings', prices: { Regular: 650 }, img: 'pizza.jfif' },
    { id: 's5', name: 'Loaded Fries with Cheese', desc: 'Fries with melted cheese', prices: { Regular: 650 }, img: 'pizza.jfif' },
    { id: 's6', name: 'Plain Fries', desc: 'Classic golden fries', prices: { Regular: 250 }, img: 'pizza.jfif' }
  ],
  wraps: [
    { id: 'w1', name: 'Mexican Wrap', desc: 'Spicy grilled chicken wrap', prices: { Regular: 550 }, img: 'pizza.jfif' },
    { id: 'w2', name: 'Chicken Tikka Wrap', desc: 'Traditional flavors wrapped', prices: { Regular: 500 }, img: 'pizza.jfif' },
    { id: 'w3', name: 'Grill Wrap', desc: 'Juicy grilled chicken', prices: { Regular: 600 }, img: 'pizza.jfif' }
  ],
  drinks: [
    { id: 'd1', name: 'Mango Juice', desc: 'Fresh & chilled', prices: { Regular: 350 }, img: 'pizza.jfif' },
    { id: 'd2', name: 'Oreo Shake', desc: 'Thick chocolate shake', prices: { Regular: 500 }, img: 'pizza.jfif' },
    { id: 'd3', name: 'Cappuccino Coffee', desc: 'Hot & frothy', prices: { Regular: 550 }, img: 'pizza.jfif' },
    { id: 'd4', name: 'Karak Chai', desc: 'Strong local tea', prices: { Regular: 200 }, img: 'pizza.jfif' }
  ]
};

const dealsData = [
  { img: "pizza.jfif", name: "Deal 1", price: 800, items: ["1 Small Pizza (Legends)", "1 Regular Fries", "1 Regular Drink"], mins: 15 },
  { img: "pizza.jfif", name: "Deal 2", price: 1250, items: ["1 Small Pizza (Tikka/Fajita)", "1 Zinger Wrap", "1 Regular Drink"], mins: 45 },
  { img: "pizza.jfif", name: "Deal 3", price: 2000, items: ["3 Small Pizzas (Legends)", "1 Liter Drink"], mins: 120 },
  { img: "pizza.jfif", name: "Deal 4", price: 2550, items: ["1 Large Pizza (Legends)", "10 Crispy wings", "1.5 Liter Drink"], mins: 300 }
];

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const backToTopBtn = document.getElementById("back-to-top");
  
  // Navbar Scroll & Reveal
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");

    if (window.scrollY > 400) {
      backToTopBtn.classList.remove("hidden");
      setTimeout(() => backToTopBtn.classList.add("opacity-1"), 10);
    } else {
      backToTopBtn.classList.remove("opacity-1");
      setTimeout(() => backToTopBtn.classList.add("hidden"), 300);
    }
  });

  // Back to Top functionality
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Hamburger Mobile Menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Smooth scroll for nav anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if(targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

  // Render Menu
  const menuContainer = document.getElementById("menu-container");
  
  function renderMenu(category) {
    menuContainer.classList.add("opacity-0");
    setTimeout(() => {
      menuContainer.innerHTML = "";
      const items = menuData[category] || [];
      items.forEach(item => {
        const sizes = Object.keys(item.prices).map(size => `${size}: Rs. ${item.prices[size]}`).join(' | ');
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `
          ${item.img ? `<img src="${item.img}" alt="${item.name}" class="menu-card-img" />` : ''}
          <div class="menu-card-body">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="sizes">${sizes}</div>
            <button class="btn btn-add-menu" data-cat="${category}" data-id="${item.id}">Add to Order</button>
          </div>
        `;
        menuContainer.appendChild(card);
      });
      menuContainer.classList.remove("opacity-0");
      
      // Bind add to order buttons in menu
      document.querySelectorAll('.btn-add-menu').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const cat = e.target.getAttribute('data-cat');
          const id = e.target.getAttribute('data-id');
          addToOrderFromMenu(cat, id);
        });
      });
    }, 300);
  }

  // Menu Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const targetCat = e.target.getAttribute('data-target');
      renderMenu(targetCat);
    });
  });
  
  renderMenu('pizzas'); // init

  // ONLINE ORDER LOGIC
  const orderCategory = document.getElementById('order-category');
  const orderItem = document.getElementById('order-item');
  const sizeGroup = document.getElementById('size-group');
  const crustGroup = document.getElementById('crust-group');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyInput = document.getElementById('order-qty');
  const deliveryAddressGroup = document.getElementById('address-group');
  const typeDelivery = document.getElementById('type-delivery');
  const typeCarryout = document.getElementById('type-carryout');
  const btnAddLine = document.getElementById('btn-add-line');
  const summaryList = document.getElementById('summary-list');
  const subtotalEl = document.getElementById('subtotal');
  const grandTotalEl = document.getElementById('grand-total');
  const deliveryFeeRow = document.getElementById('delivery-fee-row');
  
  let orderLines = [];
  
  // Populate Items Dropdown based on Category
  function updateOrderItemsDropdown() {
    orderItem.innerHTML = "";
    let catKey = 'pizzas';
    if(orderCategory.value === 'starter') catKey = 'starters';
    if(orderCategory.value === 'wrap') catKey = 'wraps';
    if(orderCategory.value === 'drink') catKey = 'drinks';
    
    (menuData[catKey] || []).forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.id;
      opt.textContent = item.name;
      orderItem.appendChild(opt);
    });
    
    togglePizzaOptions();
    updateSizeOptions();
  }
  
  function updateSizeOptions() {
     // Based on currently selected item, populate sizes.
     const catKey = getCatKey();
     const item = menuData[catKey].find(i => i.id === orderItem.value);
     if(!item) return;
     
     if (catKey === 'pizzas') {
       sizeGroup.classList.remove('hidden');
       const pillToggle = sizeGroup.querySelector('.pill-toggle');
       pillToggle.innerHTML = '';
       let first = true;
       for (const size in item.prices) {
         pillToggle.innerHTML += `<label><input type="radio" name="size" value="${size}" ${first ? 'checked' : ''} /> <span>${size}</span></label>`;
         first = false;
       }
     } else {
       sizeGroup.classList.add('hidden');
     }
  }

  function getCatKey() {
    if(orderCategory.value === 'pizza') return 'pizzas';
    if(orderCategory.value === 'starter') return 'starters';
    if(orderCategory.value === 'wrap') return 'wraps';
    if(orderCategory.value === 'drink') return 'drinks';
    return 'pizzas';
  }

  function togglePizzaOptions() {
    if(orderCategory.value === 'pizza') {
      crustGroup.classList.remove('hidden');
    } else {
      crustGroup.classList.add('hidden');
    }
  }

  orderCategory.addEventListener('change', updateOrderItemsDropdown);
  orderItem.addEventListener('change', updateSizeOptions);

  updateOrderItemsDropdown(); // Init

  // Qty adjust
  qtyMinus.addEventListener('click', () => {
    let val = parseInt(qtyInput.value);
    if(val > 1) qtyInput.value = val - 1;
  });
  qtyPlus.addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
  });

  // Delivery / Carryout toggle
  function toggleAddress() {
    if(typeDelivery.checked) {
      deliveryAddressGroup.classList.add('open');
      deliveryFeeRow.classList.remove('hidden');
    } else {
      deliveryAddressGroup.classList.remove('open');
      deliveryFeeRow.classList.add('hidden');
    }
    updateTotals();
  }
  typeDelivery.addEventListener('change', toggleAddress);
  typeCarryout.addEventListener('change', toggleAddress);
  toggleAddress(); // Init

  // Add line item
  btnAddLine.addEventListener('click', () => {
    const cat = getCatKey();
    const itemId = orderItem.value;
    const qty = parseInt(qtyInput.value);
    const item = menuData[cat].find(i => i.id === itemId);
    
    let size = 'Regular';
    let crust = '';
    
    if(cat === 'pizzas') {
       const selectedSizeInfo = document.querySelector('input[name="size"]:checked');
       size = selectedSizeInfo ? selectedSizeInfo.value : 'Small';
       crust = ' (' + document.getElementById('order-crust').value + ')';
    }
    
    const price = item.prices[size];
    
    orderLines.push({
      id: Date.now(),
      name: item.name + crust,
      size: size,
      qty: qty,
      price: price
    });
    
    qtyInput.value = 1;
    renderSummary();
  });

  function addToOrderFromMenu(cat, id) {
    const item = menuData[cat].find(i => i.id === id);
    const sizes = Object.keys(item.prices);
    const size = sizes[0]; 
    const price = item.prices[size];
    let crust = cat === 'pizzas' ? ' (Original Pan)' : '';
    
    orderLines.push({
      id: Date.now(),
      name: item.name + crust,
      size: size,
      qty: 1,
      price: price
    });
    renderSummary();
    
    // Scroll to order section
    document.getElementById('order-section').scrollIntoView({behavior: 'smooth'});
  }

  function renderSummary() {
    summaryList.innerHTML = "";
    orderLines.forEach((line, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="summary-details">
          <h4>${line.qty}x ${line.name}</h4>
          <p>Size: ${line.size}</p>
        </div>
        <div class="summary-price">Rs. ${line.price * line.qty}
          <button class="summary-remove" data-idx="${index}">&times;</button>
        </div>
      `;
      summaryList.appendChild(li);
    });
    
    // Bind remove buttons
    document.querySelectorAll('.summary-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-idx');
        orderLines.splice(idx, 1);
        renderSummary();
      });
    });
    
    updateTotals();
  }

  function updateTotals() {
    let subtotal = 0;
    orderLines.forEach(l => subtotal += (l.price * l.qty));
    subtotalEl.innerText = `Rs. ${subtotal}`;
    
    let deliveryFee = typeDelivery.checked && subtotal > 0 ? 100 : 0;
    let grandTotal = subtotal + deliveryFee;
    grandTotalEl.innerText = `Rs. ${grandTotal}`;
  }

  // Place Order logic
  const btnPlaceOrder = document.getElementById('btn-place-order');
  const orderSuccess = document.getElementById('order-success');
  const deliveryAddressInput = document.getElementById('delivery-address');

  btnPlaceOrder.addEventListener('click', () => {
    // Validate
    if(orderLines.length === 0) {
      document.querySelector('.order-form-panel').classList.add('error-shake');
      setTimeout(() => document.querySelector('.order-form-panel').classList.remove('error-shake'), 1000);
      return;
    }
    
    if(typeDelivery.checked && deliveryAddressInput.value.trim() === '') {
      deliveryAddressInput.classList.add('error-shake');
      setTimeout(() => deliveryAddressInput.classList.remove('error-shake'), 500);
      return;
    }
    
    // Load state
    btnPlaceOrder.classList.add('loading');
    
    setTimeout(() => {
      btnPlaceOrder.classList.remove('loading');
      btnPlaceOrder.classList.add('hidden');
      orderSuccess.classList.remove('hidden');
      
      // Reset form eventually
      setTimeout(() => {
        orderLines = [];
        renderSummary();
        deliveryAddressInput.value = '';
        btnPlaceOrder.classList.remove('hidden');
        orderSuccess.classList.add('hidden');
      }, 5000);
    }, 2000); // 2 sec spin
  });

  // Render Deals
  const dealsGrid = document.querySelector(".deals-grid");
  dealsData.forEach((deal, idx) => {
    const card = document.createElement("div");
    card.className = "deal-card";
    const itemsList = deal.items.map(i => `<li>${i}</li>`).join("");
    
    card.innerHTML = `
      <div class="deal-inner">
        <div class="deal-front">
          <div class="ribbon">LIMITED DEAL</div>
          <img src="${deal.img}" class="deal-img" alt="${deal.name}" />
          <div class="deal-content">
            <h3>${deal.name}</h3>
            <div class="deal-price">Rs. ${deal.price}</div>
            <p>Ends in: <span class="countdown" id="timer-${idx}">--:--:--</span></p>
          </div>
        </div>
        <div class="deal-back">
          <h3>${deal.name}</h3>
          <ul>${itemsList}</ul>
          <div class="deal-price mb-1">Rs. ${deal.price}</div>
          <button class="btn btn-white btn-deal-order">Order Now</button>
        </div>
      </div>
    `;
    dealsGrid.appendChild(card);
    startCountdown(`timer-${idx}`, deal.mins);
  });
  
  // Bind deal order buttons
  document.querySelectorAll('.btn-deal-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      document.getElementById('order-section').scrollIntoView({behavior:'smooth'});
    });
  });

  function startCountdown(elementId, durationMins) {
    let time = durationMins * 60;
    const el = document.getElementById(elementId);
    
    setInterval(() => {
      let h = Math.floor(time / 3600);
      let m = Math.floor((time % 3600) / 60);
      let s = time % 60;
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      el.textContent = `${h}:${m}:${s}`;
      if (time > 0) time--;
    }, 1000);
  }

  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const closeLb = document.querySelector(".lb-close");
  const lbPrev = document.querySelector(".lb-prev");
  const lbNext = document.querySelector(".lb-next");
  const galleryImgs = Array.from(document.querySelectorAll(".gal-img"));
  
  let currentLbIndex = 0;

  galleryImgs.forEach((img, idx) => {
    img.addEventListener("click", () => {
      currentLbIndex = idx;
      openLightbox();
    });
  });

  function openLightbox() {
    lightbox.classList.add("active");
    lbImg.src = galleryImgs[currentLbIndex].src;
  }

  closeLb.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lbPrev.addEventListener("click", () => {
    currentLbIndex = (currentLbIndex - 1 + galleryImgs.length) % galleryImgs.length;
    lbImg.src = galleryImgs[currentLbIndex].src;
  });

  lbNext.addEventListener("click", () => {
    currentLbIndex = (currentLbIndex + 1) % galleryImgs.length;
    lbImg.src = galleryImgs[currentLbIndex].src;
  });

  // Basic gal.bg loading is done above in loop
});
