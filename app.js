const baseUrl = "http://localhost:3000/games"

fetch(baseUrl)
  .then(response => response.json())
  .then(games => games.forEach(game => {
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    let p = document.createElement('p')

    h2.textContent = game.name
    img.src = game.image_url
    p.textContent = game.likes

    div.append(h2, img, p)
    document.body.appendChild(div)
  }))