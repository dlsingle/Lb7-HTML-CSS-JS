class GoodsItem {
    constructor(title, description, price, imageUrl) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    render() {
        return `
            <div class="product-item">
                <img src="${this.imageUrl}" class="product-image" alt="${this.title}">
                <div class="product-title">${this.title}</div>
                <div class="product-description">${this.description}</div>
                <div class="product-price">$${this.price}</div>
                <div class="add-to-cart">
                    <img src="../img/cor.png" alt="Корзина" class="cart-icon">
                    <span class="cart-text">Add to Cart</span>
                </div>
            </div>
        `;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];  // Массив товаров
    }

    // Функция для генерации случайного числа в заданном диапазоне
    getRandom(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2); // Округление до 2 знаков после запятой
    }

    // Генерация случайных данных для товаров
    fetchGoods() {
        const titles = [
            'ELLERY X M\'O CAPSULE', 'M\'O COLLECTION', 'THE LUXE EDIT', 'NEW ARRIVALS', 'EXCLUSIVE ITEMS',
            'FASHION ESSENTIALS', 'STYLE SPOTLIGHT', 'TRENDING NOW', 'LIMITED TIME OFFER', 'ULTIMATE COLLECTION'
        ];

        const descriptions = [
            'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery...',
            'A fresh take on modern fashion with luxury details, perfect for the discerning shopper.',
            'Curated for those with refined tastes, combining innovation and classic elegance.',
            'Luxury meets craftsmanship in this exclusive capsule collection.',
            'Timeless pieces designed to elevate your style quotient.',
            'Celebrating bold looks and statement pieces for the modern fashionista.',
            'Sculptural silhouettes and refined elegance for every season.',
            'A statement of luxury and understated sophistication in each piece.',
            'A carefully selected assortment of high-end fashion must-haves.',
            'Uncover the allure of exclusive, limited-edition pieces.'
        ];

        // Статическое изображение
        const imageUrl = '../img/1.png'; // Путь к картинке

        // Генерация 15 товаров с случайными данными
        for (let i = 0; i < 15; i++) {
            const title = titles[Math.floor(Math.random() * titles.length)];
            const description = descriptions[Math.floor(Math.random() * descriptions.length)];
            const price = this.getRandom(40, 100); // Случайная цена от 40 до 100
            this.goods.push({ title, description, price, imageUrl });
        }
    }

    // Отображение товаров
    render() {
        const container = document.querySelector('.row');
        // Очистим контейнер перед добавлением новых элементов
        container.innerHTML = '';

        // Для каждого товара создаем экземпляр GoodsItem и добавляем его разметку
        this.goods.forEach(item => {
            const goodsItem = new GoodsItem(item.title, item.description, item.price, item.imageUrl);
            container.innerHTML += goodsItem.render();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const goodsList = new GoodsList();
    goodsList.fetchGoods();
    goodsList.render();
});
