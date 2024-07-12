let generateImageForm = document.getElementById("generate-image-form");
let formInput = document.getElementById("input-value");
let imageContainerText = document.getElementById("imageContainerText");
let imageGenerated = document.getElementById("generated-image");
let imageContainer = document.getElementById("images-visible");

async function fetchImages(category) {
  try {
    let response = await fetch(
      `  https://api.unsplash.com/photos/random?query=${category}&client_id=5UIoUinfB9mJzM6tuYq97Y6XSOaRbNF5R5jmzv2oYdY`
    );
    if (!response.ok) {
      throw new Error("Unable to fetch the data");
    }
    let data = await response.json();
    imageContainerText.innerText = "Below is your generated Image:";
    imageContainer.style.display = "block";
    imageGenerated.src = data.urls.regular;
    console.log(data.urls.regular);
  } catch (error) {
    console.log(error);
  }
}

generateImageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let enteredText = formInput.value;
  if (enteredText !== "") {
    fetchImages(enteredText);
  } else {
    imageContainerText.innerText = "Input field cannot be empty!";
  }
});
