// Telegram Web App obyektini olish
const tg = window.Telegram.WebApp;

// Ekranning hammasini egallash
try {
    tg.expand();
    tg.ready();
} catch (e) {
    console.log("Telegram tashqarisida ochildi");
}

// Foydalanuvchi ma'lumotlarini olish
const user = tg.initDataUnsafe?.user;
if (user) {
    document.getElementById('username').innerText = `Xush kelibsiz, ${user.first_name}! 👋`;
} else {
    document.getElementById('username').innerText = `Xush kelibsiz! 👋`;
}

// Namuna: Akkauntlar (chiroyli rasmlar bilan)
const accounts = [
    {
        id: 1,
        title: "EA FC 24 PS5",
        desc: "Divizion 1, 1M coin, akkaunt to'liq toza. Barcha o'yinchilar bor.",
        price: "150,000 so'm",
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop" // Chiroyli futbol rasmi
    },
    {
        id: 2,
        title: "FC Mobile Akkaunt",
        desc: "110 OVR, 5000 gem, noyob o'yinchilar to'plami.",
        price: "80,000 so'm",
        image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop" 
    }
];

// HTML ga chiqarish
const catalog = document.getElementById('catalog');
catalog.innerHTML = ""; // Tozalash

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

// Sotib olish funksiyasi
function buyAccount(id) {
    if (window.Telegram.WebApp) {
        tg.sendData(JSON.stringify({
            action: "buy_account",
            account_id: id
        }));
        tg.close();
    } else {
        alert("Sotib olish uchun Telegram botdan foydalaning!");
    }
}