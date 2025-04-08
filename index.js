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
    // library.forEach(
    //     function (item, index) {
    //         console.log(item.Title);
    //         if (item.Title == title) {
    //             console.log("Found: ", title);
    //             bookLocation = index;
    //         }
    //     }
    // )
    bookLocation = library.findIndex(library => library.Title === title);
    if (bookLocation == -1) {
        bookLocation = undefined;
    }
    // console.log("Book Location:", bookLocation);
    return bookLocation;
}

// Function to add Book
function addBook() {
    let book = {};
    book.Title = prompt("Enter Title of the book: ");
    let bookLocation = getBookIndex(book.Title);
    if (bookLocation == undefined) {
        book.Author = prompt("Enter Author of the book: ");
        book.isRead = false;
        library.push(book);
        console.log(`Book title "${book.Title}" added to library.`);
    } else {
        alert(`Book title "${book.Title}" already in library!!`);
    }
}

// Function to remove Book
function removeBook() {
    let title = prompt("Enter Title of the book: ");
    let bookLocation = getBookIndex(title);
    if (bookLocation == undefined) {
        alert(`Book title "${title}" not in library!!`);
    } else {
        library = library.slice(0, bookLocation).concat(library.slice(bookLocation + 1));
        console.log(`Book title "${title}" removed from library.`);
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
        // console.log("List of all un-read books in the Library");
        // library.forEach(
        //     function (item, index) {
        //         if (!item.isRead) {
        //             console.log(`${index + 1}. Title: ${item.Title}, Author: ${item.Author}, Read?: ${item.isRead}`);
        //         }
        //     }
        // )
        var unreadBooks = library.filter(library => library.isRead === false);
        if (unreadBooks.length > 0) {
            console.log("No of unRead books in library:", unreadBooks.length);
            unreadBooks.forEach(
                function (item, index) {
                    console.log(`Title: ${item.Title}, Author: ${item.Author}`);
                }
            )
        }else{
            alert(`No un-read books in the library!!`);
        }
    }
}

// Function to mark book as Read
function markasRead(title) {
    let bookLocation = getBookIndex(title);
    if (bookLocation == undefined) {
        alert(`Book title "${title}" not in library!!`);
    } else {
        library[bookLocation].isRead = true;
        console.log(`Book title "${title}" marked as Read.`);
    }
}


// Main script start from here

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