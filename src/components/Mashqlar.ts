// //                                                   №1 mashq
// interface Person {
//     name: string;
//     age: number;
//     isStudent: boolean;
// }

// const person: Person = {
//     name: "John Doe",
//     age: 25,
//     isStudent: false
// };

// interface Book {
//     title: string;
//     author: string;
//     publishedYear: number;
// }

// const book: Book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedYear: 1925
// };

// //                                                              №2 mashq

// const numbers: number[] = [1, 2, 3, 4, 5];

// function sumArray(arr: number[]): number {
//     return arr.reduce((acc, curr) => acc + curr, 0);
// }

// const words: string[] = ["apple", "banana", "cherry"];

// function toUpperCaseArray(arr: string[]): string[] {
//     return arr.map(word => word.toUpperCase());
// }

// //                                                              №4 mashq

// const studentRecord: [string, number, boolean] = ["Alice", 22, true];
// const coordinate: [number, number] = [10, 20];

// // Mashq 4: `any` Tipidan Foydalanish

// let randomValue: any;
// randomValue = "Hello";
// randomValue = 42;
// randomValue = true;

// const anyArray: any[] = ["text", 123, false];

// function printAnyArray(arr: any[]): void {
//     arr.forEach(value => console.log(value));
// }

// //                                                             №5 mashq

// let unknownValue: unknown;
// unknownValue = "Hello";
// unknownValue = 42;

// function checkAndConvertToString(value: unknown): string {
//     if (typeof value === "string") {
//         return value;
//     }
//     return "Not a string";
// }

// //                                                               №6 mashq

// function throwError(): never {
//     throw new Error("This is an error");
// }

// function infiniteLoop(): never {
//     while (true) {}
// }

// //                                                               №7 mashq

// function addNumbers(a: number, b: number): number {
//     return a + b;
// }

// function formatDate(date: Date): string {
//     return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
// }

// //                                                                №8 mashq

// enum DaysOfWeek {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }

// function printDay(day: DaysOfWeek): void {
//     console.log(DaysOfWeek[day]);
// }

// //                                                                №9 mashq

// interface Employee {
//     employeeId: number;
//     department: string;
// }

// type Worker = Person & Employee;

// const worker: Worker = {
//     name: "Jane Doe",
//     age: 30,
//     employeeId: 12345,
//     department: "HR"
// };

// //                                                                №10 mashq

// interface Vehicle {
//     make: string;
//     model: string;
//     year: number;
// }

// interface Car extends Vehicle {
//     numberOfDoors: number;
//     isElectric: boolean;
// }

// const car: Car = {
//     make: "Tesla",
//     model: "Model S",
//     year: 2024,
//     numberOfDoors: 4,
//     isElectric: true
// };

// //                                                                 №11 mashq

// type Address = {
//     street: string;
//     city: string;
//     postalCode: string;
// };

// type PersonWithAddress = Person & {
//     address: Address;
// };

// const personWithAddress: PersonWithAddress = {
//     name: "Mark",
//     age: 28,
//     isStudent: true,
//     address: {
//         street: "Main St",
//         city: "Springfield",
//         postalCode: "12345"
//     }
// };

// //                                                                   №12 mashq

// interface Student {
//     name: string;
//     age: number;
//     grades: number[];
//     address: [string, number];
// }

// function getStudentSummary(student: Student): string {
//     const avgGrade = student.grades.reduce((acc, curr) => acc + curr, 0) / student.grades.length;
//     return `Name: ${student.name}, Age: ${student.age}, Avg Grade: ${avgGrade.toFixed(2)}`;
// }

// //                                                       №13 mashq

// enum OrderStatus {
//     Pending,
//     Shipped,
//     Delivered,
//     Cancelled
// }

// interface Order {
//     orderId: number;
//     status: OrderStatus;
//     totalAmount: number;
// }

// interface Customer {
//     customerId: number;
//     name: string;
// }

// type CustomerOrder = Order & Customer;

// const customerOrder: CustomerOrder = {
//     orderId: 456,
//     status: OrderStatus.Shipped,
//     totalAmount: 150.00,
//     customerId: 789,
//     name: "Sarah"
// };
