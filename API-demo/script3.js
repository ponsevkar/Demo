// Our variables
let url = "https://newsapi.org/v2/everything?q=trade%20war%20AND%20trump&apiKey=789530644cd74ad69e6e406a4b9e30b0&sortBy=popularity&pageSize=5&from=2019-01-24"


// Our main function which handles the news items and adds them to the DOM
let receivedNews = (newsData) => {

  // newsData is the entire response from the API.
  // newsData.articles is an array of objects representing each article.
  // For each article object from the API, we create a new div in HTML.
  newsData.articles.forEach((article) => {

    // Here we create and add html elements to our html file
    document.querySelector(".allNews").innerHTML +=
      `<div class="topmentions">
        <a href="${article.url}">
          <div class="newsimage"></div> </a>
          <div class="headlinedescription">
            <h5>${article.title}</h5>
            <p>${article.description}</p>
          </div>
      </div>`

  })
}

// Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
// These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
fetch(url)
  .then(response => response.json())
  .then(receivedNews)
