import readline from "readline/promises";
import {stdin,stdout} from "process";
import { writeFile } from "fs";

// Database using file starts
const FILE="product.json";
const getCart =()=>{
    const data =await readFile(FILE,"utf-8")
    return JSON.parse(data);

};
const saveCart= async(cart) =>{
    await writeFile(FILE,JSON.stringify(CaretPosition,null,2));

};
const addTocart = async (product) =>{
    const cart = await getCart() ;
    const isFoundInCart = cart.find((item) => item.id === product.id) ;
} ;
const main = async () => {
    let choice;
    const cin =readline.createInterface({input:stdin,output:stdout});
    do{
    console.log("Welcome to Amazon Shopping 🛒");
    console.log("1...........Show Cart");
    console.log("2...........Add Product");
    console.log("3...........Remove Product");
    console.log("4...........Update Quantity");
    console.log("5...........Checkout");
    choice =await cin.question("Enter your choice");
    switch(Number(choice)){
        case 1:
            console.log("Show Cart");
            break;
            case 2:
                console.log("Add Product");
                break;
                case 3:
                    console.log("Remove Product");
                    break;
                    case 4:
                        console.log("Update Quantity");
                        break;
                        case 5:
                            console.log("Checkout");
                            break;
                            default:
                                console.log("Invalid choice");
                                break;
    }
    } while(choice!=5);
    cin.close();

};
main();