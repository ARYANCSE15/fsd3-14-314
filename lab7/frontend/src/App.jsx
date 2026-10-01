import book from "./components/book"
const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg",
  bname: "Harry Potter and the philosopher's stone",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/818umIdoruL._AC_UF1000,1000_QL80_.jpg",
  bname: "Harry Potter and the chamber of secrets",
  price: 1349,
  quantity: 15,
  rating: 5.0,
};

export default function App() {
  return (
    <>
    <h1>Online Book Store</h1>
    <div className="container">

      <Book book={b1} /><button>OPEN BOOK</button> 
      <Book book={b2} /><button>OPEN BOOK</button>
      <Book book={b1} /><button>OPEN BOOK</button>
      <Book book={b2} /><button>OPEN BOOK</button>
      </div>
    </>
  );
}