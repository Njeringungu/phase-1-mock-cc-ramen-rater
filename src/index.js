// write your code here
let data;
fetch(" http://localhost:3000/ramens", {
  method: "GET",
})
  .then((response) => response.json())
  .then((result) => {
    console.log("Success:", result);
    data = result;
    console.log("Data:", data[0].name);
    createImage();
  })
  
  

function createImage() {
  let ramenMenu = document.querySelector("#ramen-menu");

  
  for (let i = 0; i < data.length; i++) {
    img = document.createElement("img");
    img.src = data[i].image;
    ramenMenu.appendChild(img);
  }

  
  let detailsImage = document.querySelector(".detail-image");
  console.log(detailsImage.src);
  detailsImage.src = data[0].image;

  
  let mainName= document.querySelector("#mainName")
  mainName.innerHTML = data[0].name;

   
   let restaurant= document.querySelector("#restaurant")
   restaurant.innerHTML = data[0].restaurant;

   
   let rating = document.querySelector("#rating-display")
   rating.innerHTML = data[0].rating;

   let comment = document.querySelector("#comment-display")
   comment.innerHTML = data[0].comment;
}