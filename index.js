
/* Table will display all dhoes available for purchase. After the search, the table will display the 'matching shoes'*/
// Make a function for each functionality that you want. 

const testing = console.log("test")

// 1:25

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded complete!")
})


function getAllShoes() {
  return fetch('http://localhost:3000/shoes')
  .then(r => r.json())
  // .then(shoes => displayOneShoe(shoes))
}


function displayAllShoes(){
  /* 1. Get all shoes
  2. Display All Shoes
  */ 
 getAllShoes()
 .then(shoes => shoes.forEach(shoe => displayOneShoe(shoe)))
 .catch(error => console.log(error))
}

displayAllShoes()

// 1:39


// .then() returns a promise, allowing other js code to run while the functions within the .then() method are run.  


function displayOneShoe(shoe) {
  console.log("I should display", shoe)
  const shoeCell = document.createElement('li')
  const image = document.createElement('img')
  image.src = shoe.image
  console.log(image)
  shoeCell.append(image)
  const shoesGridUl = document.getElementById('shoeGrid')
  shoesGridUl.append(shoeCell)
  // shoesGridUl.append(image)
}

