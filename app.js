//get meal info by name  & search management/
const searchFoodName = async () => {
    const searchName = document.getElementById('inputBox').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
    const res = await fetch(url);
    const data = await res.json();
    displayFood(data.meals);
    document.getElementById('inputBox').value='';
    mealDetail.innerHTML = '';
}
// display meal card with name and image
const displayFood = foods => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    foods.forEach(meal => {
        const mealId = meal.idMeal;
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food-cart';
        foodDiv.innerHTML = `
        <div class=" card-algin card" style="width: 18rem;">
        <img onclick="getMealInfo('${mealId}')" class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
       <div class="card-body">
       <p onclick="getMealInfo('${mealId}')" class=" title card-text">${meal.strMeal}</p>
        </div>
       </div>
        `

        mealContainer.appendChild(foodDiv);
    })
    
}
// call meal ingredients & fetch
const getMealInfo = async (mealId) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    const data = await res.json();
    showMealInfo(data.meals[0]);
}
// show single meal ingredients
const mealDetail = document.getElementById('mealDetailInfo')
const showMealInfo = meal => {
    mealDetailInfo = `
        <img src="${meal.strMealThumb}" alt="">
        <div class='ingredients'>
            <h3>${meal.strMeal}</h3>
            <p>Ingredients</p>
            <ul id="ingredients">
                
            </ul>
        </div>
    `;

    mealDetail.innerHTML = mealDetailInfo;

    for (let i = 1; i < 15; i++) {
        let li = document.createElement('li');
        let measure = 'strMeasure' + i;
        let ingredient = 'strIngredient' + i;
        if (meal[ingredient] !== '' && meal[ingredient] !== null) {
            const ingredientInfo = meal[measure] + '  ' + meal[ingredient];
            li.innerText = ingredientInfo;
            document.getElementById('ingredients').appendChild(li);
        }
    }
}
