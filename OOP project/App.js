class Library{
    constructor(){
        this.books = [];
        
        }
        
        viewAllBooks(){
            this.books.forEach((book,index) => {
                console.log(`${index+1}) ${book.bookName}`)
            });

        }
        addNewBook(book){
            this.books.push(book)
        }
    
}

class Books{
    constructor(bookName,price,author){
        this.bookName = bookName;
        this.price = `$${price}`
        this.author = author;

    }

    viewInfo(){
        console.log(`${this.bookName} by ${this.author} is a bestselling book that offers valuable insights and practical strategies for personal growth and development. Priced at ${this.price}, this book is a must-read for anyone looking to improve their habits, mindset, or overall lifestyle.`)
    }
}

const l1 = new Library;
const RDPD = new Books("Rich dad poor dad",7,"Robert Kiyusaki")


l1.addNewBook(RDPD)
l1.viewAllBooks()
