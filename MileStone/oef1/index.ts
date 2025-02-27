import { Book } from "./interfaces";
import booksData from "./books.json"
import readline from "readline-sync";

const books = booksData;

function displayAllBooks(): void {
    console.log("\nAvailable Books:");
    books.forEach(book => console.log(`- ${book.title} (${book.id})`));
}

function displayBookById(id: string): void {
    const book = books.find(b => b.id === id);
    if (book) {
        console.log(`\n- ${book.title} (${book.id})`);
        console.log(`  - Description: ${book.description}`);
        console.log(`  - Pages: ${book.pageCount}`);
        console.log(`  - Available: ${book.isAvailable}`);
        console.log(`  - Publish Date: ${book.publishDate}`);
        console.log(`  - Image: ${book.imageUrl}`);
        console.log(`  - Genre: ${book.genre}`);
        console.log(`  - Tags: ${book.tags.join(", ")}`);
        console.log(
            `  - Publisher: ${book.publisher.name} (${book.publisher.country}, Founded: ${book.publisher.foundedYear})`
        );
    } else {
        console.log("\nID not found. Please try again.");
    }
}

function askQuestion(question: string, callback: (answer: string) => void): void {
    process.stdout.write(question);
    process.stdin.once("data", (data) => {
        callback(data.toString().trim());
    });
}

function mainMenu(): void {
    console.log("\nWelcome to the JSON Data Viewer!");
    console.log("1. View all data");
    console.log("2. Filter by ID");
    console.log("3. Exit");

    askQuestion("Please enter your choice: ", (choice) => {
        if (choice === "1") {
            displayAllBooks();
            mainMenu();
        } else if (choice === "2") {
            askQuestion("Please enter the ID you want to filter by: ", (id) => {
                displayBookById(id);
                mainMenu();
            });
        } else if (choice === "3") {
            console.log("Exiting application. Goodbye!");
            process.exit();
        } else {
            console.log("Invalid choice. Please try again.");
            mainMenu();
        }
    });
}

mainMenu();

export {}