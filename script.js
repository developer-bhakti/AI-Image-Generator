let generateImageForm = document.getElementById('generate-image-form');

let formInput = document.getElementById('input-value');

let imageContainerText = document.getElementById('imageContainerText');

let imageGenerated = document.getElementById('generated-image');

let imageContainer = document.getElementById('images-visible');
async function fatchImages(category) {
    try {
        let respose = await fatchImages('use a API');
        if(!respose.ok) {
            throw new Error('Unable to fatch the data');
        }
        imageContainerText.innerText = "Below is your generated Image:";
        imageContainer.style.display = "block";
        imageGenerated.src = respose.url;
        console.log(respose.url);
    }
catch (error) {
    console.log(error);
 }
}
generateImageForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let enteredText = formInput.value;
    if(enteredText!==""){
        fatchImages(enteredText);
    }
    else {
        imageContainerText.innerText ="input field can not be empty!";
    }
})