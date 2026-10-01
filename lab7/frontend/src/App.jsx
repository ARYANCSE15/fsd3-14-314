const b1 = {
  picUrl:"https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg",
  bname:"Harry Potter and the philosopher's stone",
  price:1199,
  quantity:10,
  rating:5.0,
};

const b2 = {
  picUrl:"https://m.media-amazon.com/images/I/818umIdoruL._AC_UF1000,1000_QL80_.jpg",
  bname:"Harry Potter and the chamber of secrets",
  price:1349,
  quantity:15,
  rating:5.0,
};

function Book(){
  return (
    <div>
    {/* <img 
        src = "https://m.media-amazon.com/images/I/81SGz3GDoiL.jpg"
        alt = "Design Patter React JS"
     /> */}
      <img src={b1.picUrl} alt= {b1.bname} />
    {/*  <h1>Let Us React</h1>
        <h2>Price: 765.00</h2>
        <h3>Quantity: 5</h3>
        <h4>Rating: 5.0</h4>
    */}
      <h1>{props.book.name}</h1>
      <h2>Price: {props.book.price}</h2>
      <h3>Quantity: {props.book.quantity}</h3>
      <h4>Rating: {props.book.rating}</h4>
    </div>
  );
}

export default function App(){
  return (
    <>
      <h1>Hello React</h1>
      <Book/>
      {/* <h1>Hello React</h1> */}
      <Book/>
      <Book/>
      <Book/>
    </>
  )
}