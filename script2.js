  let urlright = "https://newsapi.org/v2/everything?q=%20trade%20war%20AND%20Xi%20Jinping&apiKey=789530644cd74ad69e6e406a4b9e30b0&sortBy=popularity&pageSize=5&from=2019-01-24"

  let receivedNewsRight = (newsData) => {

    newsData.articles.forEach((article) => {

      document.querySelector(".allNewsRight").innerHTML +=
        `<div class="topmentions">
          <a href="${article.url}">
            <div class="newsimage" style= "background-image: url(${article.urlToImage});"></div> </a>
            <div class="headlinedescription">
              <h5>${article.title}</h5>
              <p>${article.description}</p>
            </div>
        </div>`

    })
  }


  fetch(urlright)
    .then(response => response.json())
    .then(receivedNewsRight)


  let urlleft = "https://newsapi.org/v2/everything?q=trade%20war%20AND%20trump&apiKey=789530644cd74ad69e6e406a4b9e30b0&sortBy=popularity&pageSize=5&from=2019-01-24"

  let receivedNewsLeft = (newsData) => {

      newsData.articles.forEach((article) => {

        document.querySelector(".allNewsLeft").innerHTML +=
          `<div class="topmentions">
            <a href="${article.url}">
              <div class="newsimage" style= "background-image: url(${article.urlToImage});"></div> </a>
              <div class="headlinedescription">
                <h5>${article.title}</h5>
                <p>${article.description}</p>
              </div>
          </div>`

      })
    }


    fetch(urlleft)
      .then(response => response.json())
      .then(receivedNewsLeft)


      let urltotalleft = "https://newsapi.org/v2/everything?q=trade%20war%20AND%20trump&apiKey=789530644cd74ad69e6e406a4b9e30b0&from=2019-01-30"

      let receivedNewsCounterLeft = (newsData) => {

          newsData.article.length((article) => {

            document.querySelector(".newsCounterLeft").innerHTML +=
              `<div class="topmentions">
                    <h5>${totalResults}</h5>
              </div>`

          })
        }


        fetch(urltotalleft)
          .then(response => response.json())
          .then(receivedNewsCounterLeft)
