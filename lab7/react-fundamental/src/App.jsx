// components - any js function returns html directly
// component can be called as html tag
// this tag must be closed
//component first character must be capital

//function must return single element

{/*
function Hello(args){
  return (
    // <> </> : React fragments can be used to group multiple elements
    <>    
      <h1>Name: {args.name}</h1>
      <img src={args.imageurl} alt={args.name} style={{width: '200px', height: 'auto'}}/>
      <h2>Price: Rs.{args.price}</h2>
      <h3>Author: {args.author}</h3>
      <h4>Rating: {args.rating}</h4>
    </>
  )
}

export default function App()  {

  const books = [
    
    {
      "name": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "price": 10.99,
      "rating": 4.8,
      "imageurl": "https://covers.openlibrary.org/b/id/8225266-L.jpg"
    },
    {
      "name": "1984",
      "author": "George Orwell",
      "price": 9.99,
      "rating": 4.7,
      "imageurl": "https://covers.openlibrary.org/b/id/7222246-L.jpg"
    },
    {
      "name": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "price": 8.99,
      "rating": 4.4,
      "imageurl": "https://covers.openlibrary.org/b/id/8432047-L.jpg"
    },
    {
      "name": "Pride and Prejudice",
      "author": "Jane Austen",
      "price": 7.99,
      "rating": 4.6,
      "imageurl": "https://covers.openlibrary.org/b/id/8231856-L.jpg"
    },
    {
      "name": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "price": 12.50,
      "rating": 4.8,
      "imageurl": "https://covers.openlibrary.org/b/id/8406786-L.jpg"
    },
    {
      "name": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "price": 9.50,
      "rating": 4.0,
      "imageurl": "https://covers.openlibrary.org/b/id/8226191-L.jpg"
    },
    {
      "name": "Atomic Habits",
      "author": "James Clear",
      "price": 14.99,
      "rating": 4.9,
      "imageurl": "https://covers.openlibrary.org/b/id/12885611-L.jpg"
    },
    {
      "name": "The Alchemist",
      "author": "Paulo Coelho",
      "price": 10.49,
      "rating": 4.6,
      "imageurl": "https://covers.openlibrary.org/b/id/8231990-L.jpg"
    },
    {
      "name": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
      "price": 15.20,
      "rating": 4.7,
      "imageurl": "https://covers.openlibrary.org/b/id/8710928-L.jpg"
    },
    {
      "name": "Dune",
      "author": "Frank Herbert",
      "price": 11.99,
      "rating": 4.7,
      "imageurl": "https://covers.openlibrary.org/b/id/8750849-L.jpg"
    },
  ];


  return (
  <div>
    <h1>Hello React</h1>
    
    <Hello name = "Let us C" price = "355" author = "Yashavant Kanetkar"/>
    
    <Hello />
    <Hello name = "Let us C++" price = "455" author = "Yashavant Kanetkar"/>
 
    <Hello/>
    <Hello {...books[0]}/>
    {
      books.map((item) => <Hello{...item}/>)
    }
  </div>)
}
*/}


import BookList from "./components/BookList";

export default function App() {
    return (
        <>
            <h1>Hello React</h1>
            <BookList />
        </>
    );
}