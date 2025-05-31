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

//total starting from 0 or load from session storage
let total = parseFloat(sessionStorage.getItem("adoptionTotal")) || 0;
let adoptedDogs = JSON.parse(sessionStorage.getItem("adoptedDogs")) || [];

function updateTotalDisplay(total) {
  document.querySelectorAll(".total-fee").forEach((el) => {
    el.textContent = total.toFixed(2);
  });
}

function showTotalPopup(total) {
  alert(`Current total: $${total.toFixed(2)}`);
}

//loop through each adopt button
document.querySelectorAll(".adopt-btn").forEach((button) => {
  const card = button.closest(".dog-card");
  const dogId = card.dataset.dogId;
  const dogFee = parseFloat(card.querySelector(".adopt-fee").textContent);

  //set initial button state
  if (adoptedDogs.includes(dogId)) {
    button.classList.add("adopted");
    button.textContent = "Adopted 🐾";
  } else {
    button.textContent = "Adopt Me 😍";
  }

  button.addEventListener("click", () => {
    const isAdopted = adoptedDogs.includes(dogId);

    if (isAdopted) {
      //unadopt
      total -= dogFee;
      adoptedDogs = adoptedDogs.filter((id) => id !== dogId);
      button.classList.remove("adopted");
      button.textContent = "Adopt Me 😍";
    } else {
      //adopt
      total += dogFee;
      adoptedDogs.push(dogId);
      button.classList.add("adopted");
      button.textContent = "Adopted 🐾";
    }

    //update storage and UI
    sessionStorage.setItem("adoptionTotal", total);
    sessionStorage.setItem("adoptedDogs", JSON.stringify(adoptedDogs));

    updateTotalDisplay(total);
    showTotalPopup(total);
  });
});

// Show total on page load
updateTotalDisplay(total);