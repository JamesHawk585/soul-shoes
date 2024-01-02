
/* Table will display all dhoes available for purchase. After the search, the table will display the 'matching shoes'*/
// Make a function for each functionality that you want. 



// 1:25

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded complete!")
})


document.querySelector("#searchBar").addEventListener("search", (event) => {
  const searchTerm = event.target.value;
  searchShoes(searchTerm)
})

function searchShoes(searchTerm) {
  fetch("http://localhost:3000/shoes")
  .then((r) => r.json())
  .then(shoes => {
    // We have shoes data
    // Compare it with search term
    // display matches 
  const filteredShoes = shoes.filter(shoe => {
    if(shoe.brand === searchTerm || shoe.style === searchTerm || shoe.color[0] === searchTerm || shoe.color[1] === searchTerm) {
    return true;
    } else {
    return false;
    }  
  });
  resetShoeGrid()
  filteredShoes.forEach((shoe) => {
    displayOneShoe(shoe)
  })
  });
} 

function getAllShoes() {
  return fetch('http://localhost:3000/shoes')
  .then(r => r.json())
}


function displayOneShoe(shoe) {
  console.log(shoe)
  const shoeCell = document.createElement('li')
  const image = document.createElement('img')
  image.src = shoe.image
  shoeCell.append(image)
  const shoesGridUl = document.getElementById('shoeGrid')
  shoesGridUl.append(shoeCell)
  // shoesGridUl.append(image)
}

function resetShoeGrid() {
  document.getElementById('shoeGrid').replaceChildren();
}