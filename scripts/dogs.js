const dogContainer = document.getElementById("dog-container");

const heading = document.createElement("h2");
heading.textContent = "Here are all of our Dogs!";
dogContainer.appendChild(heading);

const adoptLists = document.createElement("section");
adoptLists.classList.add("adopt-lists");
dogContainer.appendChild(adoptLists);

function createDogCard({ image, name, fee, info, breed }) {
  const dogCard = document.createElement("article");
  dogCard.classList.add("dog-card");
  dogCard.dataset.dogId = name.toLowerCase();
  adoptLists.appendChild(dogCard);

  const dogImg = document.createElement("img");
  dogImg.src = image;
  dogImg.classList.add("dog-img");
  dogCard.appendChild(dogImg);

  const dogName = document.createElement("h3");
  dogName.classList.add("dog-name");
  dogName.textContent = name;
  dogCard.appendChild(dogName);

  const dogFee = document.createElement("p");
  dogFee.innerHTML = `<b>Cost to Adopt:</b> $<span class="adopt-fee">${fee}</span>`;
  dogCard.appendChild(dogFee);

  const dogInfo = document.createElement("p");
  dogInfo.textContent = info;
  dogCard.appendChild(dogInfo);

  const adoptBtn = document.createElement("button");
  adoptBtn.classList.add("adopt-btn");
  adoptBtn.textContent = "Adopt Me 😍";
  dogCard.appendChild(adoptBtn);

  // ✅ Add click listener to the image
  dogImg.addEventListener("click", () => {
    alert(`Name: ${name}\nFee: $${fee}\nBreed: ${breed}`);
  });
}

dogData.forEach((list) => createDogCard(list));

