var searchButton = $("#search-btn");
//var searchInput = $("#searchBar").val();
//var resultsText = $("#results-list");
var resultsSec = $("#results-section")

function getApi(event) {
  event.preventDefault()
  var searchInput = $("#search-bar").val();
  console.log(searchInput)
  var requestUrl = "https://www.googleapis.com/books/v1/volumes?q=" + searchInput + "&key=AIzaSyA3C3fX17i43ey6iVthUwijF1A1MySz0lU";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(searchInput);
      //console.log(requestUrl)
      console.log(response);
      //console.log(response.kind);
      //console.log(response.totalItems);
      console.log(response.items);
      for (var i = 0; i < response.items.length; i++) {
        var bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'card');
        bookCard.setAttribute('style', 'width: 150px')

        var resultsText = document.createElement('li');
        resultsText.textContent = response.items[i].volumeInfo.title;

        var linkText = document.createElement('a');
        linkText.textContent = "  Click Here";
        linkText.href = response.items[i].volumeInfo.infoLink;
        resultsText.append(linkText);

        //console.log(response.items[i].volumeInfo);
        console.log(response.items[i].volumeInfo.imageLinks.thumbnail);
        var thumbImg = document.createElement('img');
        thumbImg.src = response.items[i].volumeInfo.imageLinks.thumbnail;
        bookCard.append(thumbImg);

        bookCard.append(resultsText);
        resultsSec.append(bookCard);

        console.log(response.items[i].volumeInfo.infoLink);
        //console.log(response.items[i].volumeInfo.industryIdentifiers)
      }
      if (searchInput != "") {
        console.log(searchInput);
      } else {
        (function (response) {
          console.log(searchInput)
        })
      }
    });
}
searchButton.on('click', getApi);


