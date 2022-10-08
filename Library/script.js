(() => {
   class Library {
       constructor() {
           this.books;
       }
       availableBooks() {
           return this.books.filter((book) => book.inStock && book.inStock != 0);
       }
       allBookedBooks() {
           return this.books.filter((book) => book.reading);
       }
       allBorrowedBooks() {
           return this.books.filter((book) => book.borrowed && book.borrowed >= book.returned);
       }
       allReturnedBooks() {
           return this.books.filter((book) => book.returned);
       }
       collectBook(bookTitle, author, borrow, quantity) {
           let compareTitle;
           let compareAuthor;
           const bookToBeUsed = this.availableBooks().find((book) => {
               compareTitle = bookTitle.localeCompare(book.title);
               compareAuthor = author.localeCompare(book.author);
               return compareTitle && compareAuthor;
           });

           if (bookToBeUsed && quantity <= bookToBeUsed.inStock) {
               bookToBeUsed.inStock -= quantity;
               borrow ? bookToBeUsed.borrowed += 1 : bookToBeUsed.reading += quantity;
               return bookToBeUsed;
           }
           console.log("Out of Stock");
       }
       returnBooks(ISBN, quantity) {
           const bookToBeReturned = this.allBookedBooks().find((book) => ISBN === book.ISBN);

           if (bookToBeReturned && bookToBeReturned.reading >= quantity) {
               bookToBeReturned.inStock += quantity;
               bookToBeReturned.reading -= quantity;
               return;
           }
           console.log("Please provide the valid quantity");
       }
       borrowBook(bookTitle, author) {
           return this.collectBook(bookTitle, author, true, 1);
       }
       returnBorrowedBooks(ISBN, quantity) {
           const returnBorrowedBook = this.allBookedBooks().find((book) => ISBN == book.ISBN);

           if (returnBorrowedBook && returnBorrowedBook.borrowed >= quantity) {
               returnBorrowedBook.inStock += quantity;
               returnBorrowedBook.returned += quantity;
               returnBorrowedBook.borrowed -= quantity;
               return;
           }
           console.log("Please provide the valid quantity");
       }
   }

   class Art extends Library {
       constructor() {
           super();
           this.books = [
               {
                   title: "Love is bitter",
                   author: "Ariane Grande",
                   ISBN: 4029,
                   inStock: 20,
                   bookPlacement: "Art|200|1",
                   reading: 0,
                   borrowed: 0,
                   returned: 0,
               },
               {
                   title: "Romeo and Juliet",
                   author: "William Shakespire",
                   ISBN: 4129,
                   inStock: 1,
                   bookPlacement: "Art|200|2",
                   reading: 0,
                   borrowed: 0,
                   returned: 0,
               },
               {
                   title: "The beauty of Art",
                   author: "John Doe",
                   ISBN: 4429,
                   inStock: 30,
                   bookPlacement: "Art|200|3",
                   reading: 0,
                   borrowed: 0,
                   returned: 0,
               },
           ];
       }
   }

   const art = new Art();
   art.collectBook('The beauty of Art', 'John Doe', false, 15);
   // art.returnBooks(4029, 2);
   // borrowing a boo1
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   //    art.collectBook('Love is Bitter', 'Ariana Grande', false, 10);
   art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Romeo and Juliet', 'William Shakespeare');
   // art.returnBorrowedBooks(4029, 1);
   console.log(art.allBorrowedBooks());
})();
