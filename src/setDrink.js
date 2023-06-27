import displayDrinks from "./displayDrinks.js"

// récupère l'id du coktail cliqué et le stocke dnas le local storage
const setDrink = (section) => {
  section.addEventListener("click", (e) => {
    const id = e.target.parentElement.dataset.id

    localStorage.setItem("list", id)
  })
}

export default setDrink
