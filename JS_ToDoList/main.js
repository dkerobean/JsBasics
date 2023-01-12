const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");


let items = getItems();

// LOCAL STORAGE 
function getItems(){
    const value = localStorage.getItem("todo") || "[]";

    return JSON.parse(value);
}

// SETTING ITEMS 
function setItems(items){
    const itemJson = JSON.stringify(items);

    localStorage.setItem("todo", itemJson)
}

// ADDING A NEW ITEM 
function addItem(){
    items.unshift({
        description: "",
        completed: false,
    }); 

    setItems(items);
    refreshList();
}


function updateItem(item, key, value){
    item[key] = value;
    setItems(items);
    refreshList();
}


function refreshList(){

    //sort list 
    items.sort((a, b) => {
        if (a.completed) {
            return 1
        }

        if (b.completed) {
            return -1
        }

        return a.description < b.description ? -1 : 1;
    });


    ITEMS_CONTAINER.innerHTML = ""; 
    for (const item of items) {
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description; 
        completedInput.checked = item.completed; 

        descriptionInput.addEventLi
        
        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", descriptionInput.value);
        });
        

        completedInput.addEventListener("change", () => {
            updateItem(item, "completed", completedInput.checked);
        });

        ITEMS_CONTAINER.append(itemElement);





    }


}

ADD_BUTTON.addEventListener("click", () => {
    addItem();
}); 


refreshList();

 