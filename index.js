
/* Table will display all dhoes available for purchase. After the search, the table will display the 'matching shoes'*/
// Make a function for each functionality that you want. 



// 1:25

document.addEventListener("DOMContentLoaded", () => {
  return
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
    if(shoe.brand === searchTerm || shoe.style === searchTerm || shoe.colors[0] === searchTerm || shoe.colors[1] === searchTerm) {
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
  const shoeCell = document.createElement('li')
  const image = document.createElement('img')
  const shoeBrandH3 = document.createElement('h3')
  const paragraph = document.createElement('p')
  image.src = shoe.image
  // We are getting a complete shoe object here. Currently, the image property of the shoe object is being set as an attribute of the newly created shoe li element.
  // Append two additional li elements to shoeCell, name and price. 
  // Create at least one additional function?  
  shoeCell.append(image)
  shoeCell.append(shoeBrandH3)
  shoeCell.append(paragraph)
  shoeBrandH3.innerText = `${shoe.brand}`
  paragraph.innerText = `Price: $${shoe.price}`
  const colorSelector = createColorSelector(shoe.colors) 
  shoeCell.append(colorSelector)
  const shoesGridUl = document.getElementById('shoeGrid')
  shoesGridUl.append(shoeCell)
  // shoesGridUl.append(image)
}

function createColorSelector(colors) {
  const colorButtons = colors.map(color => createColorButton(color)) 
  console.log("colorButtons", colorButtons)
  const div = document.createElement("div")
  div.append(colorButtons);

  return div;
}

// 1:36:09

function createColorButton(color) {
  const colorButton = document.createElement("button") 
  return colorButton
}


function resetShoeGrid() {
  document.getElementById('shoeGrid').replaceChildren();
}