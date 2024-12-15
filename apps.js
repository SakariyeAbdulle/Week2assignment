
 console.log("test");

  const images = [
    { src: "./tiger.png", alt: "a rare image of a white tiger" },
    { src: "./wild.png", alt: "a image of a donkey known as the somali wild ass" },
    { src: "./bear.png", alt: "a image of a bear in the wild" },
    { src: "./fox.png", alt: "a image of a fox in its natural habitat" },
    {src:"./dg.png", alt: "a image of ,a dalmation dog in spring" },
  ];
  const thumbnail= document.getElementById ("thumbnail-container");
  const largeContainer =document.getElementById("large-image-container");




function  CreateThumbnail(imagesArray){  for (imagesArray=0; imagesArray<images.length;imagesArray++){
  console.log(images[imagesArray]);
  const newImage = document.createElement("img");
  newImage.src = images[imagesArray].src;
    newImage.alt = images[imagesArray].alt;
  newImage.className = "ImageStyle";
  thumbnail.appendChild(newImage);
  
  newImage.addEventListener("click", function () {
    largeContainer.appendChild(newImage);
  });

}};

CreateThumbnail(images);
function createLargeImagesHandler(largeImage){
  largeImageContainer.inner.HTML = null
}
  
