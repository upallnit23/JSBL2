/*  Exploring Conditional Statements and Loops  */
/* Tasks 1 thru 3 */

let user1 = prompt("Are you shopping today?")
let shop = ["apples", "bananas", "tomatoes", "ground beef", "turkey legs", "bread", "lemonade"]
cart = []
let total = 0
for (item in shop) {
    console.log("Grocery item:", shop[item]);
    document.write(item + " ");
    let addit = prompt("Do you want to add item to cart? ");
    if (addit == "yes") {
        cart = cart + shop[item];
        window.alert(shop[item]);
        let price = prompt("Enter price of item: ");
        total += price;
    } else{
        console.log("Item not added.")
    }
    
for (item in cart) {
    console.log("Item purchased is: ", cart[item]);
}    
console.log("Total price of groceries is $", total);

}



    


