function Book(){
  return (
    <div>
      <img
      src="https://m.media-amazon.com/images/I/81SGz3GDoiL.jpg"
      alt="Design pattern react ja"
      />
    <h1>Lets us Raect</h1>
    <h2> Price: 765.00</h2>
    <h3> Quantity : 5</h3>
    </div>
  )
  }

export default function App(){
  return(
   <>   
  <h1>Hello React</h1>;
  <Book />
  <Book />
  <Book />

  </>
  );
}