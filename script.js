

let shoppingList = [];

let addButton = document.getElementById('addItem')
let removeButton = document.getElementById('removeLast')
let itemInput = document.getElementById('item')

function addItem(){
    const newItem = itemInput.value;

    if (newItem && !shoppingList.includes(newItem)) {
        shoppingList.push(newItem);
        console.log(`You've added an item: ${newItem}`)
        } else if (newItem){
        console.log(`${newItem} is already in the list.`);
}}

function removeLastItem(){
    shoppingList.pop()
    console.log(`You've removed the last item`)
}

function displayList(){
    console.log(shoppingList)
}

function filterItems(search){
    const lowerCaseSearch = search.toLowerCase();
    const filteredList = shoppingList.filter(item => {
        return item.toLowerCase().includes(lowerCaseSearch);
    });
    return filteredList;
}

addButton.addEventListener("click", addItem);
removeButton.addEventListener("click", removeLastItem);