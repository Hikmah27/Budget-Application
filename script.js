var budgetArr = [];

function addItem() {
    if (budgetItem.value != "") {
        budgetArr.push(budgetItem.value)
        budgetItem.value = ""
        displayItem();
        console.log(budget);
    }
    else {
        display.innerHTML = `<h2 style= "margin-left: 0px; color: red"> Please Fill in all spaces</h2>`;
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
            <td>${budgetArr[i].budgetItem}</td>
            <td>${budgetArr[i].budgetPrice}</td>
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