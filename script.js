//When click on checkout, it will direct to checkout page
document.querySelector(".checkout-button").onclick = () => {
  window.location.href = "checkout.html";
};


//When click on dog image, it will show name, breed and fee for that certain dog
document.querySelectorAll(".dog-card img").forEach((img) => {
  img.addEventListener("click", () => {
    const dogCard = img.closest(".dog-card");
    const dogName = dogCard.querySelector(".dog-name").textContent;
    const dogBreed = dogCard.querySelector(".breed").textContent;
    const dogFee = dogCard.querySelector(".adopt-fee").textContent;
    alert(
      "Name : " +
        dogName +
        "\n" +
        "Breed : " +
        dogBreed +
        "\n" +
        "Fee : $" +
        dogFee
    );
  });
});

