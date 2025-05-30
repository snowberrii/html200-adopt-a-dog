// //can also use this function for simple form
// function getFormData(form) {
//   return Object.fromEntries(new FormData(form).entries());
// }

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
    const data = getFormData(contactForm);
    console.log("Form Data:", data);

    alert(
      `Thank you ${data.firstName} for reaching out to us. We’ll be in touch with you shortly.`
    );

    contactForm.reset();
  });
}

if (checkoutForm) {
  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = getFormData(checkoutForm);
    console.log("Form Data:", data);

    alert(`Thank you. The form information has been received`);

    checkoutForm.reset();
    sessionStorage.clear();
    resetTotalFee();
  });
}
