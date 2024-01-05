// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {    
    #books = [];   
    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.some((elem) => elem === title)) {
            throw new Error("Книга с таким названием уже существует в списке");
        } else {
            this.#books.push(title);
        }
    }

    removeBook(title) {
        if (this.#books.some((elem) => elem === title)) {
            this.#books.splice(this.#books.indexOf(title), 1);
        } else {
            throw new Error("Книги с таким названием нет в списке");
        }
    }

    hasBook(title) {
        if (this.#books.some((elem) => elem === title)) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }

    // конструктор, который принимает начальный список книг (массив)
    constructor(initializationLibrary) {
        this.#books = initializationLibrary;   
        const unique = Array.from(new Set(this.#books));

        if (this.#books.length !== unique.length) {
            throw new Error("Предоставленный массив содержит дубликаты. Необходимо убрать повторяющиеся книги.");
        }
    }
}

// Новая библиотека с книгами
let library = new Library([
    "Петров и Васечкин",
    "Новые приключения",
    "Золотые горки",
    "Зима",
    "Лето"
  ]);
  console.log(library.allBooks);
  
  library.addBook("Апельсин");
  console.log(library.allBooks);
  
  library.removeBook("Зима");
  console.log(library.allBooks);
  
  library.hasBook("Весна");
  library.hasBook("Лето");