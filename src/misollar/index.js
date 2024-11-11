// 1-misol
// interface Person {
//     name: string;
//     age: number;
//     isStudent: boolean;
//   }

// 2-misol
//   const johnDoe: Person = {
//     name: "John Doe",
//     age: 25,
//     isStudent: false,
//   };

// 3-misol
//   interface Book {
//     title: string;
//     author: string;
//     publishedYear: number;
//   }

// 4-misol
//   const greatGatsby: Book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedYear: 1925,
//   };

//Massivlar
// 1-masala
// let arr: number[] = [1, 2, 3, 4, 5];

// 3-masala
// const words: string[] = ["apple", "banana", "cherry"];

//4-masala
// const capitalizeWords = (arr: string[]): string[] =>
//   arr.map((word) => word.toUpperCase());

//Tuple

// const studentRecord: [string, number, boolean] = ["Alice", 22, true];
// const coordinate: [number, number] = [10, 20];

//any

// const mixedArray: any[] = ["hello", 42, false];

// const logMixedArray = (arr: any[]): void =>
//   arr.forEach((item) => console.log(item));

//Unknown

// let unknownValue: unknown;
// unknownValue = "hello";
// unknownValue = 42;

// const safelyConvertToString = (value: unknown): string => {
//   if (typeof value === "string") return value;
//   return "";
// };

//enum
// enum DaysOfWeek {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday,
//   }

//   const printDay = (day: DaysOfWeek): void => {
//     console.log(DaysOfWeek[day]);
//   };

//interface
// interface Vehicle {
//     make: string;
//     model: string;
//     year: number;
//   }

//   interface Car extends Vehicle {
//     numberOfDoors: number;
//     isElectric: boolean;
//   }

//   const tesla: Car = {
//     make: "Tesla",
//     model: "Model S",
//     year: 2024,
//     numberOfDoors: 4,
//     isElectric: true,
//   };

//type alias
// type Address = {
//   street: string,
//   city: string,
//   postalCode: string,
// };

// type PersonWithAddress = Person & { address: Address };

// const mark: PersonWithAddress = {
//   name: "Mark",
//   age: 28,
//   isStudent: true,
//   address: {
//     street: "Main St",
//     city: "Springfield",
//     postalCode: "12345",
//   },
// };

// interface Student {
//     name: string;
//     age: number;
//     grades: number[];
//     address: [string, number];
//   }
// //
