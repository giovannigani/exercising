document.getElementById("submit").addEventListener("click",addItem);
document.getElementById("clear").addEventListener("click",clearList);


function addItem() {
    const items = document.getElementById("items").value;
    document.getElementById("list-items").innerHTML += '<li>' + items + '</li><br/>';
}

function updateList() {
    var element = document.getElementById("list-items");
    element.scrollTop = element.scrollHeight;
}

function clearList() {
    var element = document.getElementById("list-items").innerHTML = '';
}