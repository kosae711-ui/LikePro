window.onload = function() {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
};

const products = [
    { name: "موبايلي", img: "689c77177656d_1755084567.webp" },
    { name: "نتفليكس", img: "689c7c80b6626_1755085952.webp" },
    { name: "فيرجن", img: "689b246836cfa_1754997864.webp" },
    { name: "سوا", img: "689b324a8ebf2_1755001418.webp" },
    { name: "ليب", img: "689b1dca5c18a_1754996170.webp" },
    { name: "بلاي ستيشن", img: "285.webp" },
    { name: "شاهد", img: "OPP.webp" },
    { name: "إكس بوكس", img: "63.webp" },
    { name: "جوجل بلاي", img: "689861c515eba_1754816965.webp" },
    { name: "نون", img: "68999f4cf3cfb_1754898252.webp" },
    { name: "آيتونز", img: "68987b5819e5c_1754823512.webp" },
    { name: "زين", img: "68247ffc822c9_1747222524.webp" },
    { name: "ببجي", img: "6899c5fb07a5b_1754908155.webp" },
    { name: "روبلوكس", img: "6899b73b55046_1754904379.webp" },
    { name: "ستيم", img: "6899aca0badf1_1754901664.webp" },
    { name: "أمازون", img: "6798d2ed482ba_1738068717.webp" }
];

const container = document.getElementById('products-container');
products.forEach(p => {
    container.innerHTML += `
        <div class="product-card" onclick="openModal('${p.name}')">
            <img src="${p.img}" alt="${p.name}">
            <p>${p.name}</p>
        </div>
    `;
});

let selectedPrice = 0;

function openModal(name) {
    document.getElementById('modal-title').innerText = name;
    let optionsHTML = "";

    if (name === "ببجي") {
        optionsHTML = `
            <button class="option-btn" onclick="selectCard(event, this, 3.76)">60 شدة - 3.76 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 18.80)">240 شدة - 18.80 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 37.57)">660 شدة - 37.57 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 93.98)">2100 شدة - 93.98 ﷼</button>`;
    } else if (name === "موبايلي") {
        optionsHTML = `
            <button class="option-btn" onclick="selectCard(event, this, 60.00)">2 جيجا - 60 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 110.00)">10 جيجا - 110 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 160.00)">20 جيجا - 160 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 230.00)">30 جيجا - 230 ﷼</button>`;
    } else if (name === "سوا") {
        optionsHTML = `
            <button class="option-btn" onclick="selectCard(event, this, 23.00)">سوا 20 - 23 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 57.50)">سوا 50 - 57.50 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 74.75)">لايك 65 - 74.75 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 115.00)">سوا 100 - 115 ﷼</button>`;
    } else if (name === "نتفليكس") {
        optionsHTML = `
            <button class="option-btn" onclick="selectCard(event, this, 65.00)">نتفليكس $15 - 65 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 105.00)">نتفليكس $25 - 105 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 135.00)">نتفليكس $30 - 135 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 150.00)">نتفليكس $40 - 150 ﷼</button>`;
    } else if (name === "فيرجن") {
        optionsHTML = `
            <button class="option-btn" onclick="selectCard(event, this, 15.00)">فيرجن 15 - 15 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 20.00)">فيرجن 20 - 20 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 30.00)">فيرجن 30 - 30 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 50.00)">فيرجن 50 - 50 ﷼</button>`;
    } else if (name === "ليب") {
        optionsHTML = `
            <button class="option-btn" onclick="selectCard(event, this, 30.00)">ليبارا 30 - 30 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 55.00)">3 جيجا - 55 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 70.00)">5 جيجا - 70 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 105.00)">10 جيجا - 105 ﷼</button>`;
    } else if (name === "زين") {
        optionsHTML = `
            <button class="option-btn" onclick="selectCard(event, this, 35.00)">زين 35 - 35 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 69.00)">شباب 69 - 69 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 79.00)">شباب 79 - 79 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 119.00)">شباب 119 - 119 ﷼</button>`;
    } else {
        optionsHTML = `
            <button class="option-btn" onclick="selectCard(event, this, 50)">50 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 100)">100 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 150)">150 ﷼</button>
            <button class="option-btn" onclick="selectCard(event, this, 200)">200 ﷼</button>`;
    }

    document.getElementById('options-grid').innerHTML = `
        <span onclick="closeModal(event)" style="position: absolute; top: 10px; right: 20px; cursor: pointer; font-size: 28px; color: #ef4444; font-weight: bold;">&times;</span>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 25px; margin-bottom: 15px;">
            ${optionsHTML}
        </div>

        <div style="display: flex; gap: 10px; margin-top: 10px;">
            <button class="action-btn add-btn" onclick="addToCart(event, '${name}')" style="flex: 1;">إضافة للسلة</button>
            <button class="action-btn pay-btn" onclick="buyNow(event, '${name}')" style="flex: 1; background: #22c55e;">ادفع الآن</button>
        </div>
    `;
    document.getElementById('productModal').style.display = "flex";
}

function selectCard(event, btn, price) {
    event.stopPropagation();
    selectedPrice = price;
    document.querySelectorAll('.option-btn').forEach(b => {
        b.style.border = "none";
        b.style.background = "#334155";
    });
    btn.style.border = "2px solid #38bdf8";
    btn.style.background = "#1e293b";
}

function addToCart(event, name) {
    event.stopPropagation();
    if(selectedPrice === 0) { alert("يرجى اختيار الفئة أولاً!"); return; }
    
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    cart.push({ name: name, price: selectedPrice });
    localStorage.setItem('myCart', JSON.stringify(cart));
    
    document.getElementById('cart-count').innerText = cart.length;
    closeModal();
    selectedPrice = 0; 
}

// وظيفة جديدة لإتمام الدفع السريع
function buyNow(event, name) {
    addToCart(event, name);
    window.location.href = 'checkout.html';
}

function closeModal(event) {
    if(event) event.stopPropagation();
    document.getElementById('productModal').style.display = "none";
    selectedPrice = 0;
}