// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cards = document.querySelector('.cards-container');
console.log(cards);

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then (response => {
        console.log(response.data.articles);
        response.data.articles.bootstrap.forEach(element => {
            cards.appendChild(createCard(element));
        })

        response.data.articles.javascript.forEach(element => {
            cards.appendChild(createCard(element));
        })

        response.data.articles.technology.forEach(element => {
            cards.appendChild(createCard(element));
        })

        response.data.articles.jquery.forEach(element => {
            cards.appendChild(createCard(element));
        })

        response.data.articles.node.forEach(element => {
            cards.appendChild(createCard(element));
        })
        
    })
    .catch(error => {
        console.log('data not returned');
    })


function createCard (data) {
    // console.log(data);
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    //put in img source//
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorName);

    headline.textContent = data.headline;
    author.textContent = data.authorName;
    // img.src = `../../${data.articles.authorPhoto}`;
    authorName.textContent = 'Author\'s Name' + data.authorName;


    return card;
}
