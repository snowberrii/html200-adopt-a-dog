//This function takes a form, extracts all the input values,
//and puts them into a JavaScript object.
function getFormData(form) {
  const formData = new FormData(form); //FormData is a built-in object that lets you easily get all the input values (like name, email, etc.) from a form.
  const data = {}; //create an empty object to store the form input values.

  //This loop through every input in the form.
  //Each one has a name (key) and a value (that user enter).
  for (let [key, value] of formData.entries()) {
    data[key] = value; //this add that key-value pair to the data object.
  }

  return data;
}

function resetTotalFee() {
  total = 0;
  updateTotalDisplay(total);
}

const contactForm = document.querySelector("#contactForm");
const checkoutForm = document.querySelector("#checkoutForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = getFormData(contactForm); // Get the form data
    console.log("Form Data:", data);

    alert("Thank you. The form information has been received");

    contactForm.reset();
  });
}

if (checkoutForm) {
  // Add submit event listener to the form
  //Normally, when a form is submitted, the page reloads or goes to another URL.
  //so need to putprevent default
  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = getFormData(checkoutForm); // Get the form data
    console.log("Form Data:", data);

    alert("Thank you. The form information has been received");

    checkoutForm.reset();
    sessionStorage.clear();
    resetTotalFee();
  });
}
