
/*wkrótce*/
const container = document.querySelector(".pojemnik")
const coffees = [
  { name: "Test", image: "obrazki/firmowe/luktvpl min.png", link:"/index.html" },
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      function ({ name, image, link }) {
        return (output += `
                <div class="itemSZ">
                  <img src="${image}" alt="Obrazek" class="itemIMGL"/>
                  <tytul>${name}</tytul>
                  <a class="guzik" href="${link}">klik</a>
                </div>
                `)
      }
    )
    container.innerHTML = output
    
    }
    document.addEventListener("DOMContentLoaded", showCoffees)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

