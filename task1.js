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

const albums = [
  { title: "The Works", artist: "Queen", year: "1984" },
  { title: "I Look to You", artist: "Whitney Houston", year: "2009" },
  { title: "Thriller", artist: "Michael Jackson", year: "1982" },
];

const musicCollection = {
  albums: [...albums],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.albums.length) {
          return { value: this.albums[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
