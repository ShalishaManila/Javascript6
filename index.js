// Function to get Choices
function getChoices() {
    return parseFloat(
        prompt(
            `Book Tracker
            1) List Books
            2) Add Book
            3) Remove Book
            4) Mark Book as Read
            5) List all un-read books
            6) Exit
            Enter your choice:`
        )
    );
}

// Function to check Book
function getBookIndex(title) {
    let bookLocation;
    library.forEach(
        function (item, index) {
            console.log(item.Title);
            if (item.Title == title) {
                console.log("Found: ", title);
                bookLocation = index;
            }
        }
    )
    console.log("Book Location:", bookLocation);
    return bookLocation;
}

// Function to add Book
function addBook() {
    let book = {};
    book.Title = prompt("Enter Title of the book: ");
    book.Author = prompt("Enter Author of the book: ");
    book.isRead = false;
    let bookLocation = getBookIndex(book.Title);
    if (bookLocation == undefined) {
        library.push(book);
        console.log("Book added to library.");
    } else {
        alert("Book already in the library");
    }
}

// Function to remove Book
function removeBook() {
    let title = prompt("Enter Title of the book: ");
    let bookLocation = getBookIndex(title);
    if (bookLocation == undefined) {
        console.log("Book not in library.");
    } else {
        // delete library[bookLocation-1];
        library = library.slice(0, bookLocation).concat(library.slice(bookLocation + 1));
        console.log("Book removed from library");
    }
}

// Function to List all Books
function listBooks() {
    if (library.length == 0) {
        // No books in the library
        alert("No books in Library!!!");
    } else {
        console.log("List of all books in the Library");
        library.forEach(
            function (item, index) {
                console.log(`${index + 1}. Title: ${item.Title}, Author: ${item.Author}, Read?: ${item.isRead}`);
            }
        )
    }
}

// Function to List all un-read Books
function listUnreadBooks() {
    if (library.length == 0) {
        // No books in the library
        alert("No books in Library!!!");
    } else {
        console.log("List of all un-read books in the Library");
        library.forEach(
            function (item, index) {
                if (!item.isRead) {
                    console.log(`${index + 1}. Title: ${item.Title}, Author: ${item.Author}, Read?: ${item.isRead}`);
                }
            }
        )
    }
}

// Function to mark book as Read
function markasRead(title) {
    let bookLocation = getBookIndex(title);
    if (bookLocation == undefined) {
        alert("Book not in the library");
    } else {
        library[bookLocation].isRead = true;
        console.log("Book marked as Read.");
    }
}

var library = [];

let running = true;
while (running) {
    const choice = getChoices();
    switch (choice) {
        case 1:
            listBooks();
            break;
        case 2:
            addBook();
            break;
        case 3:
            removeBook();
            break;
        case 4:
            const title = prompt("Enter the title of the book to mark as read: ");
            markasRead(title);
            break;
        case 5:
            listUnreadBooks();
            break;
        case 6:
            running = false;
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice.");
            break;
    }
}



