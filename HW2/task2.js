// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const appDiv = document.querySelector('.app');
let idReview = 0;

initialData.forEach(elem => {
    // Продукт
    const productDiv = document.createElement('p');
    productDiv.textContent += elem.product;
    appDiv.appendChild(productDiv);

    // Отзывы
    const reviewsOl = document.createElement("ol");
    elem.reviews.forEach(elem => {
        idReview = elem.id;
        reviewsOl.innerHTML += `<li>id:${elem.id} ${elem.text}</li>`;
    });
    appDiv.appendChild(reviewsOl);

    // Поле ввода отзыва
    const inputText = document.createElement("input");
    appDiv.appendChild(inputText);

    // Кнопка отправки отзыва
    const btn = document.createElement("button");
    btn.textContent = "Отправить";
    const errorElement = document.querySelector(".error-message");

    btn.addEventListener('click', () => {
        try {
            if (inputText.value.length > 500 || inputText.value.length < 50) {
                throw new Error('Длина введенного отзыва менее 50 или более 500 символов, введите корректно')
            }
            const li = document.createElement('li');
            idReview++;
            li.textContent = `id:${idReview} ${inputText.value}`
            reviewsOl.appendChild(li);
            errorElement.textContent = '';
        } catch (error) {
            errorElement.textContent = error.message;
        }
    });
    appDiv.appendChild(btn);
});