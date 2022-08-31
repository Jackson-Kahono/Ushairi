document.addEventListener('DOMContentLoaded', function () {
      App();
});



function App() {
      fetchData();
}


function fetchData() {

      fetch('https://www.poemist.com/api/v1/randompoems')
            .then(resp => resp.json())
            .then(callBack)
            .catch(err => {
                  console.log(err);
                  // setTimeout(fetchData,10000)
            });
}

function addToHtml(cards,item) {
      let txt = item.content
      let previewLines = txt.slice(0,297)
      let card = document.createElement('div');
      let prev = document.createElement('div');
      let info = document.createElement('div');
      let likes = document.createElement('div');
      let count = document.createElement('div');
      let click = document.createElement('div');

      card.className = "card"
      prev.className = "card-prev"
      info.className = "card-info"
      likes.className = "likes"
      count.className = "likes-count"
      click.id = "like"


      prev.addEventListener('click', function () {
            document.querySelector('.content').style.display="none"
            displayOne(item)
      })

      click.addEventListener('click', function () {
            let noOfLikes = parseInt(count.textContent.split(' ')[0])
            count.innerHTML = `<b>${parseInt(noOfLikes) + 1}</b> likes`
      })
      //Add html
      prev.innerHTML = previewLines
      count.innerHTML = `<b>${0}</b> likes`
      click.innerHTML = "Like"
      info.innerHTML = `
      <div class="card-title">${item.title}</div>
      <div class="card-artist">${item.poet.name}</div>
      `

      console.log(card)
      console.log(info)
      console.log(prev)
      console.log(likes)
      console.log(count)
      console.log(click)

      likes.append(count)
      likes.append(click)
      card.append(prev)
      card.append(info)
      card.append(likes)

      cards.append(card)


}

function displayOne(data) {
      let section = document.createElement('div')
      section.className = "poem"
      section.innerHTML=''
      let cancel = `<div class="cancel" onclick="alert()"><i class="fa-solid fa-xmark"></i></div>`
      section.append(cancel)
      section.innerHTML += `
      <div class="poem-title">${data.title}</div>
      <div class="poem-author">${data.poet.name}</div>
      <div class="poem-content">${data.content}</div>
      `
      document.querySelector('.container').append(section)
}
function callBack(data) {
      let cards = document.querySelector(".cards")
      data.forEach(item => {
            console.log(item)
            addToHtml(cards,item)
      })
}
