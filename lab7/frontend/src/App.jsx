import Book from "./components/Book";
import Pen from "./components/Pen";
import {books} from "./data/books"; 
import {pens} from "./data/pens";
import Fruits from "./components/Fruits";
import Event from "./components/Event";

const MyButton=()=>{
  const handlesubmit = () =>{
    alert("button clicked");
  };
  return (
    <button className="bg-black text-white text-xl rounded-md m-4 px-4 py-2">Submit</button>
  )
}

export default function App(){
  
  return(
    <>
      <MyButton />
    </>
  );
}