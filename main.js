const items = []

function addItem(){
    const itemName = document.querySelector("#item").value.trim()
    if (!itemName) return

    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)
    document.querySelector("#item").value = ""
    showItemsList()
}

function showItemsList(){
    const sectionList = document.querySelector(".list")
    sectionList.innerHTML = ""

    items.forEach((item, index) => {
        sectionList.innerHTML += `
        <div class="item">
            <div>
                <input type="checkbox" id="item-${index}" ${item.checked ? "checked" : ""} onclick="checkItem(${index})"> 
                <div class="custom-checkbox" onclick="checkItem(${index})">
                    <img src="assets/checked.svg" alt="checked">
                </div>
                <label for="item-${index}" onclick="checkItem(${index})" class="${item.checked ? 'checked' : ''}">
                    ${item.name}
                </label>
            </div>
            <button onclick="removeItem(${index})">
                <img src="assets/trash-icon.svg" alt="trash icon">
            </button>
        </div>
        `
    })
}

function checkItem(index){
    items[index].checked = !items[index].checked
    showItemsList()
}

function removeItem(index){
    const divWarning = document.querySelector(".warning")
    divWarning.classList.remove("hide-warning")
    
    setTimeout(() => {
        divWarning.classList.add("hide-warning")
    }, 4000)

    items.splice(index, 1)
    showItemsList()
}

function addHideWarningClass(){
    document.querySelector(".warning").classList.add("hide-warning")
}
 