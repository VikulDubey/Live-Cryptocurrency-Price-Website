const coinPrice = document.querySelectorAll(".coinPrice");
const coinName = document.querySelectorAll(".coinName");
const bar = document.querySelector("#bar");
const ul = document.querySelector("ul");
const URL = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cbinanace%2Csolana%2Ctron%2Ccardano&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;
async function getCoinDetails() {
  const res = await fetch(URL);
  const data = await res.json();
  coinPrice[0].innerHTML = `$${data.bitcoin.usd}`;
  coinPrice[1].innerHTML = `$${data.cardano.usd}`;
  coinPrice[2].innerHTML = `$${data.dogecoin.usd}`;
  coinPrice[3].innerHTML = `$${data.ethereum.usd}`;
  coinPrice[4].innerHTML = `$${data.solana.usd}`;
  coinPrice[5].innerHTML = `$${data.tron.usd}`;
}

getCoinDetails();

bar.addEventListener("click", (e) => {
  ul.classList.toggle("showMenu");
  if (e.target.classList.contains("fa-bars")) {
    e.target.classList.remove("fa-bars");
    e.target.classList.add("fa-xmark");
    e.target.transition;
  } else {
    e.target.classList.add("fa-bars");
    e.target.classList.remove("fa-xmark");
  }
});
