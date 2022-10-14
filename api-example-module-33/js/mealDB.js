// api link https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

// const link = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`;

// const loadMeals = async () => {
//     await fetch(link)
//         .then((res) => res.json())
//         .then((data) => displayMeals(data.meals));
// };

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", (e) => {
    const searchMeal = searchInput.value;
    fetchMeals(searchMeal);
    searchInput.value = "";
});

const fetchMeals = async (meal) => {
    try {
        await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
        )
            .then((res) => res.json())
            .then((data) => displayMeals(data.meals));
    } catch (err) {
        document.write(err);
    }
};

const displayMeals = (meals) => {
    const mealsContainer = document.getElementById("mealsContainer");
    mealsContainer.innerHTML = ""
    console.log(meals[0]);
    meals.forEach((meal) => {
        const {strMeal,strMealThumb,strYoutube} = meal
        const mealDiv = document.createElement("div");
        mealDiv.classList.add("col");
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="${strYoutube}" class="btn btn-primary" target="_/blank">Full Racipy</a>
            <button class="btn btn-primary" onclick="seeDeTails('${strMeal}')">See Details</button>
            </div>
        </div>
        
        `;
        mealsContainer.appendChild(mealDiv);
    });
    mealsContainer.textContext = "";
};

// loadMeals();
