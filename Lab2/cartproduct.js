import readline from "readline/promises";
import {stdin,stdout} from "process";
import { readFile ,writeFile } from "fs/promises";

// Database using file starts
const FILE="product.json";
const getCart =async()=>{
    const data =await readFile(FILE,"utf-8")
    return JSON.parse(data);

};
const saveCart= async(cart) =>{
    await writeFile(FILE,JSON.stringify(CaretPosition,null,2));

};
const addTocart = async (product) =>{
    const cart = await getCart() ;
    const isFoundInCart = cart.find((item) => item.id === product.id) ;
    if(isFoundInCart){
        isFoundInCart.qty+=1;
    }
    else cart.push(product);
    await saveCart(cart);
    console.log(`${product.name}added/updated to 🛒`);
} ;
const displayCart=async()=>{
    const cart =await getCart();
    if(cart.length==0){
        console.log("Cart is empty");
        return;
    }
    console.table(cart);
    const total=cart.reduce((sum,item)=> sum+item.price+item.qty,0);
    console.log(`Total payable amout is ${total}`);
}
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