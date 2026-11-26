// webapp/script.js
// Telegram Web App obyektini olish
const tg = window.Telegram.WebApp;
tg.expand(); // Ekranning hammasini egallash

// Foydalanuvchi ma'lumotlarini olish
const user = tg.initDataUnsafe?.user;
if (user) {
    document.getElementById('username').innerText = `Xush kelibsiz, ${user.first_name}!`;
}

// Namuna: Bazadan akkauntlarni olish (Hozircha qo'lda yozdik, keyin API orqali ulanadi)
const accounts = [
    {
        id: 1,
        title: "EA FC 24 PS5",
        desc: "Div 1, 1M coin, Messi bor",
        price: "150,000 so'm",
        image: "https://via.placeholder.com/300x150/1a2b4c/ffffff?text=EA+FC+24"
    },
    {
        id: 2,
        title: "FC Mobile Akkaunt",
        desc: "110 OVR, 5000 gem",
        price: "80,000 so'm",
        image: "https://via.placeholder.com/300x150/1a2b4c/ffffff?text=FC+Mobile"
    }
];

// HTML ga chiqarish
const catalog = document.getElementById('catalog');
accounts.forEach(acc => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${acc.image}" alt="${acc.title}">
        <h3>${acc.title}</h3>
        <p>${acc.desc}</p>
        <button onclick="buyAccount(${acc.id})">Sotib olish - ${acc.price}</button>
    `;
    catalog.appendChild(card);
});

// Sotib olish tugmasi bosilganda
function buyAccount(id) {
    tg.showAlert(`Siz ${id}-akkauntni sotib olmoqchisiz! (To'lov tizimi ulanadi)`);
    // Bu yerda backendga ma'lumot yuborish kodi bo'ladi
    // tg.sendData(JSON.stringify({ action: "buy", id: id }));
}