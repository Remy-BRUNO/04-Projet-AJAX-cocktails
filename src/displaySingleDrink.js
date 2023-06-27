import { hideLoading } from "./toggleLoading.js"
import get from "./getElement.js"

const drinkImg = get(".drink-img")
const drinkName = get(".drink-name")
const description = get(".drink-description")
const ingredients = get(".drink-ingredients")

const displayDrink = async (data) => {
  // cache le chargement
  hideLoading()
  // affiche les infos d'un cocktail

  const {
    strDrink: name,
    strInstructions: instruction,
    strDrinkThumb: image,
  } = data.drinks[0]
  const dataObjs = Object.entries(data.drinks[0])

  const dataObj = dataObjs.filter((obj) => {
    if (obj[0].includes("strIngredient") && obj[1] !== null) {
      return obj
    }
  })

  // console.log(ingrs)
  drinkImg.src = image
  drinkName.textContent = name
  description.textContent = instruction
  const ingredient = dataObj.map((item) => {
    return `
      <li>
        <i class="fa-solid fa-martini-glass-citrus"></i>
        ${item[1]}
      </li>`
  })
  ingredients.innerHTML = ingredient.join("")
}

export default displayDrink
