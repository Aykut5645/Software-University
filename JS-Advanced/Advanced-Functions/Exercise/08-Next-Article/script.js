function getArticleGenerator(articles) {
    let divElement = document.querySelector('#content');
    let counter = 0;
 
    return function() {
        let articleElement = document.createElement('article');
        articleElement.textContent = articles[counter];
        
        if (articleElement.textContent === '') {
            return;
        }

        divElement.appendChild(articleElement);
        counter++;
    }
}