document.addEventListener('DOMContentLoaded', function() {
      App();
});

function App(){
      let prev = document.querySelector('.card-prev');
      console.log(prev.textContent.length)
      // fetchData();
}


function fetchData(){

      fetch('https://www.poemist.com/api/v1/randompoems')
      .then(resp=>resp.json())
      .then(data=>{
            console.log(data[0].poet.photo_avatar_url);
            img.src = data[3].poet.photo_avatar_url;

      })
      .catch(err=>{
            console.log(err);
      });
}
