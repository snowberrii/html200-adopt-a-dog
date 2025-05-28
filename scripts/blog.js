//blog post data as an array
const blogPosts = [
  {
    title: "Traveling With Your Dog",
    image: "images/blog-1.jpg",
    description: [
      "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
      "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam",
    ],
  },
  {
    title: "How To Walk Multiple Dogs",
    image: "images/blog-2.jpg",
    description: [
      "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
      "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam",
    ],
  },
  {
    title: "Teach Your Dog To Fetch!",
    image: "images/blog-3.jpg",
    description: [
      "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
      "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam",
    ],
  },
];

//blog generator function + loop
//first select the main container
const blogContainer = document.getElementById("blog-container");

// Add main heading to the container
const heading = document.createElement("h2");
heading.textContent = "Adoptadog Blog";
blogContainer.appendChild(heading);

// Function to create a blog card
function createBlogCard({ title, image, description }) {
  const blogCard = document.createElement("article");
  blogCard.classList.add("blog-card");

  const blogImg = document.createElement("img");
  blogImg.classList.add("blog-img");
  blogImg.src = image;
  blogImg.alt = title;
  blogCard.appendChild(blogImg);

  const blogInfo = document.createElement("div");
  blogInfo.classList.add("blog-info");

  const blogTitle = document.createElement("h3");
  blogTitle.textContent = title;
  blogInfo.appendChild(blogTitle);

  description.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    blogInfo.appendChild(p);
  });

  blogCard.appendChild(blogInfo);
  blogContainer.appendChild(blogCard);
}

// Loop through each blog post and create card
blogPosts.forEach((post) => createBlogCard(post));
