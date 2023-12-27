
/* Table will display all dhoes available for purchase. After the search, the table will display the 'matching shoes'*/
// Make a function for each functionality that you want. 

const testing = console.log("test")

// 1:25

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded complete!")
})


displayAllShoes()

const displayAllShoes = () => {
  /* 1. Get all shoes
     2. Display All Shoes
*/ 
  getAllShoes();
}
function getAllShoes() {
  fetch('https://replit.com/@JamesHawk585/Soul-Shoes#db.json')
  console.log('getting all shoes!')
  .then((r) => r.json)
  .then(console.log(r))
}

  
