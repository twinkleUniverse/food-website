const foodList = [{
    "name": "Veggie Delight",
    "imageSrc": "https://source.unsplash.com/random?veggies",
    "time": "30 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.2
},
{
    "name": "Chicken Grill",
    "imageSrc": "https://source.unsplash.com/random?chicken",
    "time": "45 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.5
},
{
    "name": "Cheese Pizza",
    "imageSrc": "https://source.unsplash.com/random?pizza",
    "time": "40 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.1
},
{
    "name": "Steak",
    "imageSrc": "https://source.unsplash.com/random?steak",
    "time": "60 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.7
},
{
    "name": "Grilled Salmon",
    "imageSrc": "https://source.unsplash.com/random?salmon",
    "time": "50 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.6
},
{
    "name": "Tomato Pasta",
    "imageSrc": "https://source.unsplash.com/random?pasta",
    "time": "35 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.0
},
{
    "name": "Vegan Salad",
    "imageSrc": "https://source.unsplash.com/random?salad",
    "time": "20 min",
    "type": "veg",
    "isLiked": false,
    "rating": 3.9
},
{
    "name": "Fried Chicken",
    "imageSrc": "https://source.unsplash.com/random?friedChicken",
    "time": "55 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.3
},
{
    "name": "Mushroom Risotto",
    "imageSrc": "https://source.unsplash.com/random?risotto",
    "time": "45 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.5
},
{
    "name": "Burger",
    "imageSrc": "https://source.unsplash.com/random?burger",
    "time": "30 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.2
},
{
    "name": "Paneer Tikka",
    "imageSrc": "https://source.unsplash.com/random?paneerTikka",
    "time": "40 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.4
},
{
    "name": "BBQ Ribs",
    "imageSrc": "https://source.unsplash.com/random?ribs",
    "time": "70 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.6
},
{
    "name": "Caesar Salad",
    "imageSrc": "https://source.unsplash.com/random?caesarSalad",
    "time": "25 min",
    "type": "veg",
    "isLiked": false,
    "rating": 3.8
},
{
    "name": "Fish Tacos",
    "imageSrc": "https://source.unsplash.com/random?fishTacos",
    "time": "35 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.3
},
{
    "name": "Chocolate Cake",
    "imageSrc": "https://source.unsplash.com/random?chocolateCake",
    "time": "90 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.9
}];

const foodBody = document.getElementById('right');

// 1 -> all item to the screen dynamically
function displayRecipes(foodList) {

    foodBody.innerHTML = ``;
    foodList.forEach((food) => {

        const foodCard = document.createElement('div');
        foodCard.id = 'food-item-box';

        let isLikedImgUrl = (food.isLiked === true) ? 'Images/Vector.png' : 'Images/VectorDis.png';

        foodCard.innerHTML = `
            <div class="food-image"><img src="${food.imageSrc}" alt=""></div>
                <div >
                    <div id="food-info">
                        <p class="food-type">${food.type}</p>
                        <div class="display-flex-row content-space-between">
                            <p id="food-name">${food.name}</p>
                            <div class="display-flex-row"><img src="Images/Frame 28.png" alt="">
                                <p class="food-type">${food.rating}</p>
                            </div>
                        </div>
                    </div>
                    <div id="time" class="display-flex-row content-space-between">
                        <p>${food.time}</p>
                        <div>
                            <img src="${isLikedImgUrl}" alt="">
                            <img src="Images/comments.png" alt="">
                        </div>
                    </div>
                </div>
        `;

        foodBody.appendChild(foodCard);
    });

};

// displayRecipes();

// 2 -> search recipes
  const searchBar = document.getElementById("searchBar");
//   let recipeDisplay = foodBody;
  // Function to dynamically update the displayed recipes based on the search query
  function searchRecipes(query) {
    // Clear the previous recipes
    foodBody.innerHTML = "";
  
    // Filter recipes based on the query and update the display
    const filteredRecipes = foodList.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));
    filteredRecipes.forEach(recipe => {
    //   const recipeCard = document.createElement("div");
    //   recipeCard.textContent = recipe.name;
    //   recipeDisplay.appendChild(recipeCard);
        displayRecipes(filteredRecipes);
    });
  }
  
  // Event listener for the search bar
  searchBar.addEventListener("input", (event) => {
    const searchQuery = event.target.value;
    searchRecipes(searchQuery);
  });
  
  // Initial display of all recipes when the page loads
searchRecipes("");


// 3 -> toggle recipe type

document.getElementById('all-recipes').addEventListener('click', () => {
    console.log('all-type hit');
    searchRecipes("");
});
document.getElementById('veg-recipes').addEventListener('click', () => {
    console.log('veg-type hit');
    filterByType('veg')
});
document.getElementById('nonveg-recipes').addEventListener('click', () => {
    console.log('nonveg-type hit');
    filterByType('non-veg');
});

function filterByType(type) {
    foodBody.innerHTML = '';
    // Filter recipes based on the query and update the display
    const filteredRecipes = foodList.filter(recipe => recipe.type === type);
    displayRecipes(filteredRecipes);
}


// 4 -> rating filter

const above4Checkbox = document.getElementById("tickbox-above-4");
const below4Checkbox = document.getElementById("tickbox-below-4");

function handleCheckboxChange(event) {
  if (event.target.checked) {
    // filter data for above 4 rating
    console.log('event.target checked');
    return true;
  } else {
    console.log('event.target unchecked');
    return false;
  }
}

function filterByRating(event, rating) {
    
    let currentFilter = rating >= 4 ? true : false;

    if (currentFilter) {
        console.log(true);
        // Filter recipes based on the query and update the display
    const filteredRecipes = foodList.filter((recipe) => {
        return recipe.rating >= 4;
    });
    if (handleCheckboxChange(event)) {
        foodBody.innerHTML = '';
        displayRecipes(filteredRecipes);
    }
    }
    else {
        // Filter recipes based on the query and update the display
    const filteredRecipes = foodList.filter((recipe) => {
        return recipe.rating < 4;
    });
    if (handleCheckboxChange(event)) {
        foodBody.innerHTML = '';
        displayRecipes(filteredRecipes);
    }
        console.log(false);
    }
};

above4Checkbox.addEventListener("change", (event) => {
    console.log('above4 hit');
    // search for above 4 rating
    filterByRating(event, 4);
});
below4Checkbox.addEventListener("change", (event) => {
    console.log('below4 hit');
    filterByRating(event, 3);
});

