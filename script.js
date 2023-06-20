var budgetArr = [];

function addItem() {
    if (budgetItem.value != "" && budgetPrice.value != "" ) {
        var itemObj = {
            myItem: budgetItem.value,
            myPrice: budgetPrice.value
        }
        budgetArr.push(itemObj)
        console.log(budgetArr);
        budgetItem.value = ""
        budgetPrice.value = ""
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
            <th>Budget Item</th>
            <th>Budget Price</th>
            <th>Actions</th>
        </tr>
    `
    for (i = 0; i < budgetArr.length; i++) {
        itemTable.innerHTML +=  `
        <tr>
            <td>${i+1}</td>
            <td>${budgetArr[i].myItem}</td>
            <td>${budgetArr[i].myPrice}</td>
            <td>
                <button class= "btn btn-warning" onclick= "editOne()">Edit</button>
                <button class= "btn btn-danger" onclick= "deleteOne(${i})">Delete</button>
            </td>
        </tr>
    `
    }
}

function deleteOne(index) {
    console.log(`${index}`);
    budgetArr.splice(index,1)
    displayItem()
}

function editOne() {
    var newIndex = editedIndex.value;
    var newItem = editedDetails.value;
    console.log(newIndex, newItem);
    if (editedIndex.value != "" && editedDetails.value != "") {
        if (budgetArr.length > newIndex-1) {
           budgetArr.splice(newIndex-1,1,newItem);
           document.getElementById("modalError").style.display = "none" 
           document.getElementById("modalSuccess").style.display = "block" 
        }
        else {
            document.getElementById("modalError").style.display = "block" 

        }
    }
    else {
        alert("Please fill in the details");
    }
    displayItem();
}