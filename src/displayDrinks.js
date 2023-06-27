import get from "./getElement.js"
import { hideLoading } from "./toggleLoading.js"

const section = get(".section-center")
const title = get(".title")
const displayDrinks = async ({ drinks }) => {
  // cache les chargement
  hideLoading()
  // affiche les cocktails
  if (drinks === null) {
    title.textContent = "Sorry, No Drinks Matched Your Search"
    section.innerHTML = ""
    return
  } else {
    const innerDrinks = drinks.map((drink) => {
      const {
        idDrink,
        strDrink: name,

        strDrinkThumb: image,
      } = drink

      return `
        <a href="drink.html">
          <article class="cocktail" data-id="${idDrink}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`
    })

    section.innerHTML = innerDrinks.join("")

    return section
  }
}

export default displayDrinks
