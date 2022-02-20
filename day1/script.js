var getRecipeBtn = document.getElementById('get_meal');
if (getRecipeBtn) {
  getRecipeBtn.addEventListener('click', getRecipe);
}

function getRecipe() {
  console.log("Button clicked!");

  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(response => callMeBaby(response.meals[0]));
}

function callMeBaby(recipe) {
  document.getElementById('recipe_title').innerHTML = recipe.strMeal;
  document.getElementById('ingredients').innerHTML = recipe.strIngredient1 + "<br>" + recipe.strIngredient2 + "<br>" + recipe.strIngredient3;
  document.getElementById('instructions').innerHTML = recipe.strInstructions;

}
