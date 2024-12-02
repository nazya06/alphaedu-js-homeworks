// Задание 1
const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;

let i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++
}

console.log(`Сумма чисел: ${sum}`); // 253


// // Задание 2
// const books = [
//     { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
//     { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
//     { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
//     { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
//   ];

//   for (i=0; i<books.length; i++) {
//     console.log(
//         `Название: ${books[i].title}, автор: ${books[i].author}, количество страниц: ${books[i].numberOfPages}, жанр: ${books[i].genre}`
//     );
//     console.log("Награды:")
//     for (j=0; j < books[i].awards.length; j++) {
//         console.log(books[i].awards[j]);
//     }
//   };


  // Задание 3
// function calculateAveragePages(obj) {
//     let sum = 0;
//     for (i=0; i<books.length; i++) {
//         sum += books[i].numberOfPages;
//     }
//     let avgPages = sum / books.length;
//     console.log(Math.round(avgPages));
// }

// calculateAveragePages(books);

// Задание 4
// function repeatString(str, n) {
//     let result = str.repeat(n);
//     console.log(result);
// }

// repeatString("ansnsn", 4);


//  // Задание 5
//  function calculateAverage(arr) {
//     let sum = 0;
//     for (i=0; i<arr.length; i++) {
//         sum += arr[i];
//         console.log(sum);
//     }
//     let avg = sum / arr.length;
//     console.log(Math.round(avg));
//  }

//  calculateAverage([10, 20, 30, 40, 50, 60]);


//  // Задание 6
//  function countEvenNumbers(arr) {
//     let result = [];
//     for (i=0; i<arr.length; i++) {
//         if (arr[i]%2 == 0) {
//             result.push(arr[i]);
//         }
//     }
//     console.log(result);
//  }

//  countEvenNumbers([1, 2, 3, 4, 5, 6]);