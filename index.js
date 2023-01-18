window.addEventListener('DOMContentLoaded', main)

function main() {
  const galleryDiv = document.getElementById('gallery')
  const images = Array.from(new Array(10), (x, i) => i + 1).map(n => `./assets/images/herald${n.toLocaleString('en', { minimumIntegerDigits: 2 })}.webp`)

  for (const image of images) {
    const card = createImageCard(image)
    galleryDiv.appendChild(card)
  }
}

/**
 * @param {string} path 
 * @returns {HTMLElement}
 */
function createImageCard(path) {
  const card = document.createElement('div')
  card.className = 'card border-0 align-middle p-2 col-sm-12 col-md-6 col-lg-4'

  const img = document.createElement('img')
  img.src = path
  img.className = 'card-img-top rounded-0'

  card.appendChild(img)

  return card
}
