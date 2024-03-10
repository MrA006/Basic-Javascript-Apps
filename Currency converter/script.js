

const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const lists = document.querySelectorAll("select");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
const msg = document.querySelector("#msg");

let btn = document.querySelector("button");

for(let list of lists){
    for(country in countryList){

        let newoption = document.createElement("option");

        newoption.value = country;
        newoption.innerText = country;

        if(list.id === "to" && country === "USD"){
            newoption.selected = "selected";
        }else if(list.id === "from" && country === "MTL"){
            newoption.selected = "selected";
        }

        list.append(newoption);

    }

    list.addEventListener("change",  (evt) =>{
        updateflag(evt.target);
    });
}


const updateflag = (ele) =>{
    let selected = ele.value;
    let code = countryList[selected];
    let newLink = `https://flagsapi.com/${code}/flat/64.png`

    let img = ele.parentElement.querySelector("img");
    img.src = newLink;

}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector("input");
    let amountVal = amount.value;

    if(amountVal === "" || amountVal < 1){
        amountVal = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;

    let res = await fetch(URL);
    let data = await res.json();
    let rate = data[to.value.toLowerCase()];
    console.log(rate);


    let finalAmount = amountVal * rate;

    msg.innerText = `${amountVal} ${from.value} = ${finalAmount} ${to.value}`;

});