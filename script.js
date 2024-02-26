// const musicCollection = {
//     albums: [
//       { title: "Альбом  1", artist: "Исполнитель  1", year: "2001" },
//       { title: "Альбом  2", artist: "Исполнитель  2", year: "2002" },
//       { title: "Альбом  3", artist: "Исполнитель  3", year: "2003" },
//     ],
  
//     [Symbol.iterator]() {
//       let index =  0;
//       let albums = this.albums;
  
//       return {
//         next() {
//           if (index < albums.length) {
//             return { value: albums[index++], done: false };
//           } else {
//             return { done: true };
//           }
//         }
//       };
//     }
//   };
  
//   // Использование цикла for...of для перебора альбомов
//   for (let album of musicCollection) {
//     console.log(`${album.title} - ${album.artist} (${album.year})`);
//   }


// const chefs = new Map();
// chefs.set("Виктор", "Пицца");
// chefs.set("Ольга", "Суши");
// chefs.set("Дмитрий", "Десерты");

// // Создание коллекции для хранения заказов клиентов
// const orders = new Map();

// // Заполнение заказов
// const clientAleksey = { name: "Алексей" };
// const clientMaria = { name: "Мария" };
// const clientIrina = { name: "Ирина" };

// orders.set(clientAleksey, ["Пицца 'Пепперони'", "Тирамису"]);
// orders.set(clientMaria, ["Суши 'Калифорния'", "Пицца 'Маргарита'"]);
// orders.set(clientIrina, ["Чизкейк"]);

// // Функция для отслеживания, какой повар готовит какое блюдо
// function trackChefAndDish(dish) {
//   for (let [chef, specialization] of chefs) {
//     if (dish.includes(specialization)) {
//       console.log(`Повар ${chef} готовит ${dish}`);
//       break;
//     }
//   }
// }

// // Вывод информации о заказах
// for (let [client, dishes] of orders) {
//   console.log(`Клиент ${client.name} заказал:`);
//   for (let dish of dishes) {
//     trackChefAndDish(dish);
//   }
// }