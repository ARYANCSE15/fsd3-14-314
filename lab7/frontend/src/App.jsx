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

function Book(props) {
  {/*console.log(props);*/}
  const{bname, price, quantity, rating, picUrl} = props.book;
  return (
    <div>
      {/*
      <img
        src="https://m.media-amazon.com/images/I/81SGz3GDoiL.jpg"
        alt="Design Patter React JS"
      />
      */}

    {/* <img src={props.book.picUrl} alt={props.book.bname} /> */}

      {/*
      <h1>Let Us React</h1>
      <h2>Price: 765.00</h2>
      <h3>Quantity: 5</h3>
      <h4>Rating: 5.0</h4>
      */}
    {/*}
      <h1>{props.book.bname}</h1>
      <h2>Price: {props.book.price}</h2>
      <h3>Quantity: {props.book.quantity}</h3>
      <h4>Rating: {props.book.rating}</h4>  */}

      <img src = {picUrl} alt = {bname} />
      <h1>{bname}</h1>
      <h2>Price: {price}</h2>
      <h3>Quantity: {quantity}</h3>
      <h4>Rating: {rating}</h4>
    </div>
  );
}

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