(() => {
   class Library {
      constructor() {
         this._books;
      }

      get availableBooks() {
         return this._books.filter((book) => {
            return (
               book.inStock &&
               book.inStock >= book.reading &&
               book.inStock >= book.borrowed
            );
         });
      }

      get allBookedBooks() {
         return this._books.filter((book) => {
            return book.reading;
         });
      }

      get allBorrowedBooks() {
         return this._books.filter((book) => {
            return book.borrowed && book.borrowed >= book.returned;
         });
      }

      get allReturnedBooks() {
         return this._books.filter((book) => {
            return book.returned;
         });
      }

      collectBook(bookTitle, bookAuthor, borrow, quantity) {
         const bookToUse = this.availableBooks.filter((book) => {
            const title = book.title.toLowerCase() == bookTitle.toLowerCase();
            const author = book.author.toLowerCase() == bookAuthor.toLowerCase();
            return title && author;
         })[0];

         if (bookToUse && quantity <= bookToUse.inStock) {
            bookToUse.inStock -= quantity;
            borrow ? (bookToUse.borrowed += 1) : (bookToUse.reading += quantity);
            return;
         }
         console.log('Out of stock');
      }

      returnBooks(ISBN, quantity) {
         const bookToReturn = this.allBookedBooks.filter((bookedBook) => {
            return bookedBook.ISBN === ISBN;
         })[0];

         if (bookToReturn && quantity <= bookToReturn.reading) {
            bookToReturn.inStock += quantity;
            bookToReturn.reading -= quantity;
            return bookToReturn.bookPlacement;
         }
         console.log('Not collected in the quantity provided');
      }

      borrowBook(bookTitle, author) {
         return this.collectBook(bookTitle, author, true, 1);
      }

      returnBorrowedBooks(ISBN, quantity) {
         const bookToReturn = this.allBorrowedBooks.filter((borrowedBook) => {
            return borrowedBook.ISBN === ISBN;
         })[0];

         if (bookToReturn && quantity <= bookToReturn.borrowed) {
            bookToReturn.inStock += quantity;
            bookToReturn.returned += quantity;
            bookToReturn.borrowed -= quantity;
            return bookToReturn.bookPlacement;
         }
         console.log('Not borrowed in the quantity provided');
      }
   }

   class Art extends Library {
      constructor() {
         super();

         this._books = [
            {
               title: 'Love is bitter',
               author: 'Ariana Grande',
               ISBN: 4029,
               inStock: 20,
               bookPlacement: 'Art|200|1',
               reading: 0,
               borrowed: 0,
               returned: 0,
            },
            {
               title: 'Romeo and Juliet',
               author: 'William Shakespeare',
               ISBN: 4129,
               inStock: 1,
               bookPlacement: 'Art|200|2',
               reading: 0,
               borrowed: 0,
               returned: 0,
            },
            {
               title: 'The beauty of Art',
               author: 'John Doe',
               ISBN: 4429,
               inStock: 30,
               bookPlacement: 'Art|200|3',
               reading: 0,
               borrowed: 0,
               returned: 0,
            },
         ];
      }
   }

   const art = new Art();
   // art.collectBook('The beauty of Art', 'John Doe', false, 15);
   // art.returnBooks(4029, 2);
   // borrowing a boo1
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.collectBook('Love is Bitter', 'Ariana Grande', false, 10);
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Love is Bitter', 'Ariana Grande');
   // art.borrowBook('Romeo and Juliet', 'William Shakespeare');
   // art.returnBorrowedBooks(4029, 1);
   console.log(art.allReturnedBooks);
})()