var budgetArr = [];
var editedIndex = 0;

function addItem() {
    if (budgetItem.value != "" && budgetPrice.value != "" ) {
        var itemObj = {
            myItem: budgetItem.value,
            myQuantity: quantity.value,
            myPrice: budgetPrice.value,
        }
        budgetArr.push(itemObj)
        console.log(budgetArr);
        budgetItem.value = ""
        budgetPrice.value = ""
        quantity.value = ""
        displayItem();
        console.log(itemObj);
   
    }
    else {
        display.innerHTML = `<h2 style= "margin-left: 50px; color: red"> Please Fill in all spaces</h2>`;
        console.log("Space cannot be Empty");
    }
}

function displayItem() {
    document.getElementById("itemTable").style.display = "table"
    itemTable.innerHTML = ""
    itemTable.innerHTML = `
        <tr>
            <th>S/N</th>
            <th>Item Name</th>
            <th>Item Quantity</th>
            <th>Item Price</th>
            <th>Total Price</th>
            <th>Actions</th>
        </tr>
    `
    for (i = 0; i < budgetArr.length; i++) {
        itemTable.innerHTML +=  `
        <tr>
            <td>${i+1}</td>
            <td>${budgetArr[i].myItem}</td>
            <td>${budgetArr[i].myQuantity}</td>
            <td>${budgetArr[i].myPrice}</td>
            <td>${(budgetArr[i].myQuantity)*(budgetArr[i].myPrice)}</td>
            <td>
                <button class= "btn btn-warning btn-sm" onclick= "editItem(${i})" data-bs-toggle="modal" data-bs-target= "#staticBackdrop">Edit</button>
                <button class= "btn btn-danger btn-sm" onclick= "deleteOne(${i})">Delete</button>
            </td>
        </tr>
    `
    }
}

function deleteOne(index) {
    var confirmation = confirm("Are you sure you will like to perform this operation?")
    if (confirmation == true) {
        budgetArr.splice(index,1)
        console.log(`${index}`);
        displayItem()
    }

}
function editItem(index){
    editedIndex = index;
    editedName.value = budgetArr[index].myItem
    editedQuantity.value = budgetArr[index].myQuantity
    editedPrice.value = budgetArr[index].myPrice
}

function update() {
    var updateObj ={
        myItem : editedName.value,
        myQuantity : editedQuantity.value,
        myPrice : editedPrice.value
    }
budgetArr.splice(editedIndex, 1, updateObj);
displayItem();
}

function checkAll(){
    localStorage.setItem("budget", JSON.stringify(budgetArr))
    window.location.href = "displayBudget.html"
}