

document.addEventListener("DOMContentLoaded", () => {
    window.onload = function () {
        showReviews();
    };

    const buttonReview = document.getElementById('product-index');
    if (buttonReview) {
        buttonReview.addEventListener('click', () => {
            window.location.href = "index.html"; // переход на страницу составления отзывов
        });
    }

    // Сохранение данных в LocalStorage
    const saveDataToLS = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Получение данных из LocalStorage
    const getDataFromLS = (key) => {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    const productsArray = getDataFromLS('reviewsAll');

    function showReviews() {
        const content = document.getElementById("content");
        const listContainer = document.createElement("ul");
        listContainer.classList.add("view__list");
        content.appendChild(listContainer);
        // Проверка, есть ли отзывы для продуктов
        if (productsArray.length === 0) {
            listContainer.textContent = "Нет отзывов для продуктов";
        };
        productsArray.forEach(productItem => {
            const itemContainer = document.createElement("li");
            itemContainer.classList.add("view__item");

            const productTitle = document.createElement("h2");
            productTitle.classList.add("view__product-name");
            productTitle.textContent = `${productItem.product}`;

            let btnShowHide = document.createElement("button");
            btnShowHide.classList.add("view__btn-show-hide");
            btnShowHide.textContent = "Показать отзывы";
            btnShowHide.addEventListener("click", () => {
                reviewList.classList.toggle("hidden");
                btnShowHide.classList.toggle("close");
                if (btnShowHide.textContent === "Показать отзывы") {
                    btnShowHide.textContent = "Скрыть отзывы";
                } else {
                    btnShowHide.textContent = "Показать отзывы";
                }
            });

            let reviewList = document.createElement("ul");
            reviewList.classList.add("view__product-review-list", "hidden");

            productItem.review.forEach((review) => {
                let reviewItem = document.createElement("li");
                let btnReviewDelete = document.createElement("button");
                reviewItem.classList.add("view__product-review-item");
                btnReviewDelete.classList.add("view__btn-delete-review", "btn-reset");
                reviewItem.textContent = review;
                btnReviewDelete.textContent = "Удалить";
                btnReviewDelete.setAttribute("data-review", review);
                reviewItem.appendChild(btnReviewDelete);
                reviewList.appendChild(reviewItem);
                btnReviewDelete.addEventListener("click", () => {
                    let reviewText = event.target.getAttribute("data-review");
                    removeReview(productItem.product, reviewText, listContainer, itemContainer);
                    reviewList.removeChild(reviewItem);
                });
            });

            productTitle.appendChild(btnShowHide);
            itemContainer.appendChild(productTitle); 
            // itemContainer.appendChild(btnShowHide); 
            itemContainer.appendChild(reviewList); 
            listContainer.appendChild(itemContainer);
        })
    };

    //   Функция для удаления отзыва
    function removeReview(product, review, listContainer, itemContainer) {
        productsArray.map(productItem => {
            if (productItem.product === product) {
                let reviewIndex = productItem.review.indexOf(review);
                if (reviewIndex > -1) {
                    productItem.review.splice(reviewIndex, 1);
                    saveDataToLS("reviews", productsArray);
                }
                // Проверка, остались ли еще отзывы для данного товара
                if (productItem.review.length === 0) {
                    let productIndex = productsArray.indexOf(productItem);
                    if (productIndex > -1) {
                        productsArray.splice(productIndex, 1);
                        listContainer.removeChild(itemContainer);
                        saveDataToLS("reviewsAll", productsArray);
                        if (productsArray.length === 0) {
                            listContainer.textContent = "Отзывы удалены";
                        }
                    }
                }
            }
            return productItem;
        })
    }
})
