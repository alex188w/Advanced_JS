// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
    musicAlbums: [
        { title: 'Secret', artist: 'Fabrica', year: '2012' },
        { title: 'Bucket', artist: 'Krug', year: '2002' },
        { title: 'Astra', artist: 'Kay Metov', year: '2005' }
    ],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                if (index < this.musicAlbums.length) {
                    return { value: this.musicAlbums[index++], done: false }
                } else {
                    return { done: true };
                }
            },
        };
    }
};

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

