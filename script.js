const R = Math.floor(Math.random() * 256);
const G = Math.floor(Math.random() * 256);
const B = Math.floor(Math.random() * 256);

const span = document.querySelector("span");
span.style.color = "rgb(" + R + "," + G + ", " + B + ")";


const btn = document.querySelector("button");


btn.addEventListener("click", e => {
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = () => {
    if (XHR.status === 200 && XHR.readyState === 4){
      let data = JSON.parse(XHR.responseText);
      console.log(data);
      span.innerHTML = `${data.bpi.USD.rate} &#36;`;
    }
  };

  XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
});