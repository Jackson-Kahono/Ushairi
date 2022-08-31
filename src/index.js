document.addEventListener('DOMContentLoaded', function () {
      App();
});



function App() {
      let prev = document.querySelector('.card-prev');
      console.log(prev.textContent.length)
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
      // // let toAppend = `
      // // <div class="card">
      // //                               <div class="card-prev">
      // //                                     ${previewLines}
      // //                               </div>
      // //                               <div class="card-info">
      // //                                     <div class="card-title">${item.title}</div>
      // //                                     <div class="card-artist">${item.poet.name}</div>
      // //                               </div>
      // //                               <div class="likes">
      // //                                     <div class="likes-count"><b>${0}</b> likes</div>
      // //                                     <div id="like">Like</div>
      // //                               </div>
      // // `


      // // card.innerHTML += toAppend

      // //declare
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
            card.className = "hidden"
            // displayOne(data)
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


      // //bind attributes


      // //bind events


      // //append to html
      likes.append(count)
      likes.append(click)
      card.append(prev)
      card.append(info)
      card.append(likes)

      cards.append(card)


}

function callBack(data) {
      let cards = document.querySelector(".cards")
      data.forEach(item => {
            console.log(item)
            addToHtml(cards,item)
      })
}
