document.addEventListener('DOMContentLoaded', function() {
      App();
});

function App(){
      let prev = document.querySelector('.card-prev');
      console.log(prev.textContent.length)
      fetchData();
}


function fetchData(){

      fetch('https://www.poemist.com/api/v1/randompoems')
      .then(resp=>resp.json())
      .then(callBack)
      .catch(err=>{
            console.log(err);
      });
}

function addToHtml(){
      let toAppend = `
      <div class="card">
                                    <div class="card-prev">
                                          ${previewLines}
                                    </div>
                                    <div class="card-info">
                                          <div class="card-title">${item.title}</div>
                                          <div class="card-artist">${item.poet.name}</div>
                                    </div>
                                    <div class="likes">
                                          <div class="likes-count"><b>${0}</b> likes</div>
                                          <div id="like">Like</div>
                                    </div>
      `
}
