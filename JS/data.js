// Подключение Mongoose и создание модели
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  price: String,
  description: String,
  images: [String]
});

const Card = mongoose.model('Card', cardSchema);

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Функция для отображения карточек
async function displayCards() {
  try {
    const cards = await Card.find();
    const cardsContainer = document.querySelector('.proj__slides');

    cards.forEach(card => {
      const cardHTML = `
        <li class="proj__slide">
          <div class="proj__item_box">
            <h4 class="proj__item_title">${card.title}</h4>
            <h3 class="proj__item_subtitle">${card.subtitle}</h3>
            <h5 class="proj__item_price">${card.price}</h5>
            <p class="proj__item_descr">${card.description}</p>
          </div>
          <span class="proj__item_mans">
            ${card.images.map(image => `<img src="${image}" alt="man">`).join('')}
          </span>
        </li>
      `;
      cardsContainer.innerHTML += cardHTML;
    });
  } catch (error) {
    console.error('Ошибка при получении карточек:', error);
  }
}

displayCards();