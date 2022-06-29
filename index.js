
function populateSelector(name){
    const selector = document.getElementById("persons");

    const option = document.createElement("option");
    option.text = name;
    option.value = 123;

    selector.appendChild(option);
}

function populateSelectorWithTableData(){
    const selector = document.getElementById("persons");
    const table = document.getElementById("testTable");

    for(i=0;i<table.rows.length;i++){
        const option = document.createElement("option");
        option.text = table.rows[i].cells[0].innerHTML;
        option.value = i;
        selector.appendChild(option);
    }

}

function populateSelectorWithTableData2(){
    const selector = document.getElementById("persons");
    const table = document.getElementById("testTable");

    for (let row of table.rows)
    {
        const option = document.createElement("option");
        option.text = row.cells[0].innerText;
        selector.appendChild(option);
    }
}

function pushedButton(){
    const selector = document.getElementById("persons");
    let urlWithParams = "Misc/result.html?";
    let i=0;
    for (const option of selector){
        if (!option.selected ){
           urlWithParams = urlWithParams + option.text + "&";
        }
        else{
            urlWithParams = urlWithParams + '*' + option.text + "&";

        }
    }
    document.location.href = urlWithParams;
}

function setButton(){
    const button = document.createElement("button");
    button.innerText = "Push me";
    button.addEventListener("click", pushedButton);
    document.body.appendChild(button);
}



window.onload = (event) => {
    populateSelectorWithTableData2();
    setButton();
};