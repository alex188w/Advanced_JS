// localStorage.clear();
const saveReviewToLS = document.getElementById('save-btn');
if (saveReviewToLS) {
    saveReviewToLS.addEventListener('click', () => {
        saveReview(); //  сохранение отзыва
    });
}

const buttonReviewsAll = document.getElementById('product-reviewsAll');
if (buttonReviewsAll) {
    buttonReviewsAll.addEventListener('click', () => {
        window.location.href = "reviews.html"; // переход на страницу просмотра отзывов
    });
}

// сохранение в LocalStorage
function saveReview() {
    const informationEl = document.querySelector('.information');
    informationEl.textContent = '';
    try {
        let productNameInput = document.getElementById('product-name');
        let productReviewInput = document.getElementById('product-review');
        let productName = productNameInput.value.trim();
        let productReview = productReviewInput.value.trim();
        // проверка на пустые строки
        if (productName === "" || productName == ' ' * productName.length || productReview === "" || productReview == ' ' * productReview.length) {
            throw new Error("В поля введены пустые значения!!");
        }

        let reviews = getDataFromLS("reviewsAll"); // получение отзывов из LocalStorage
        let existingReview = reviews.find((item) => item.product === productName);

        existingReview ? existingReview.review.push(productReview) : reviews.push({ product: productName, review: [productReview] });
        saveDataToLS("reviewsAll", reviews);

        productNameInput.value = "";
        productReviewInput.value = "";
        informationEl.textContent = "Отзыв сохранен в LocalStorage";
    } catch (error) {
        informationEl.textContent = error.message;
    }
}

// Сохранение данных в LocalStorage
const saveDataToLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

// Получение данных из LocalStorage
const getDataFromLS = (key) => {
    let data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}




