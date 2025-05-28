//checkout button direct to checkout page
const checkoutBtn = document.querySelector(".checkout-button");
if (checkoutBtn) {
  checkoutBtn.onclick = () => {
    window.location.href = "checkout.html";
  };
}

//see more dogs button direct to dogs page
const moreDogsBtn = document.querySelector(".more-dogs-btn");
if (moreDogsBtn) {
  moreDogsBtn.onclick = () => {
    window.location.href = "dogs.html";
  };
}
