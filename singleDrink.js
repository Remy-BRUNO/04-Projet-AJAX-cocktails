import fetchDrinks from "./src/fetchDrinks.js"
import displayDrink from "./src/displaySingleDrink.js"

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const presentDrink = async () => {
  // récupère les infos du cocktail

  const id = localStorage.getItem("list")
  if (id === null) {
    window.location = "index.html"
  } else {
    const result = url + id
    // affiche les infos du cocktail
    const single = await fetchDrinks(result)
    displayDrink(single)
  }
}

window.addEventListener("DOMContentLoaded", () => {
  presentDrink()
})
