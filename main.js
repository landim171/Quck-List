const items = []

function addItem() {
    const itemName = document.querySelector("#item").ariaValueMax
    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""

     showItemList()

}

function showItemList() {
    const sectionList = document.querySelector(".list")
    sectionList.textContent = ""

    items.map((item, index) => {
        sectionList.innerHTML += '
         <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}">
                    <div class="custom-checkbox">
                        <img src="./assets/checked.svg" alt="checkbox">
                        <div>
                            <label for="item-${index}">${item.name}</label>
                        </div>

                    </div>
                </div>
                <div>
                    <button>
                        <img src="./assets/trash-icon.svg" alt="trash trash-icon">
                    </button>
                </div>
            </div>

        '
    })
}