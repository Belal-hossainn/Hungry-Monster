const displayName = name=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res=> res.json())
     .then(data=> console.log(data.meal[0].strMeal))
}


// const displayFoodMenus = foodMenu =>{
//     const foodListDiv = document.getElementById('foodMenu');
//     for (let i = 0; i < foodMenu.length; i++) {
//         const food = foodMenu[i];
//         const div = document.createElement('div');
//         div.innerText = food.meals[0].strMeal;
//         foodListDiv.appendChild(div);
       
    

        //console.log(food.meals[0].strMeal)
        
//     }

// }
