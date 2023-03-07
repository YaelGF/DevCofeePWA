const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "images/cafe.jpg"
  },
  {
    name: "Voluptatem",
    image: "images/cafe.jpg"  },
  {
    name: "Explicabo",
    image: "images/cafe.jpg"  },
  {
    name: "Rchitecto",
    image: "images/cafe.jpg"  },
  {
    name: " Beatae",
    image: "images/cafe.jpg"  },
  {
    name: " Vitae",
    image: "images/cafe.jpg"  },
  {
    name: "Inventore",
    image: "images/cafe.jpg"  },
  {
    name: "Veritatis",
    image: "images/cafe.jpg"  },
  {
    name: "Accusantium",
    image: "images/cafe.jpg"  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('serviceWorker.js', { scope: 'https://yaelgf.github.io/DevCofeePWA/' });
      }