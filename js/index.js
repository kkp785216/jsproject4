// My news api key
let apiKey = '34b9d15db283431d9239230764d13889';
let topnewsSection = document.getElementById('topnewsSection');
topnewsSection.innerHTML = `<div class="spinner-border d-block m-auto my-5" role="status">
                                <span class="visually-hidden"></span>
                            </div>`

let xhr = new XMLHttpRequest()
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (xhr.status === 200) {
        let topNews = JSON.parse(xhr.responseText);
        result = JSON.parse(xhr.responseText).articles;
        console.log(topNews);
        topNewsDom = '';
        topNews.articles.forEach(function (element) {
            topNewsHtml = '';
            topNewsHtml += `<a class="text-decoration-none" style="color: unset;" href="${element.url}">
                                <div class="card">
                                    <img src="${element.urlToImage}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">${element.title}</h5>
                                        <div class="d-flex justify-content-between" style="font-weight: 600; color: #7190ff;"><span>${element.source.name}</span><span>${element.author}</span></div>
                                        <p class="card-text" style="color: grey;">${element.description}</p>
                                        <div style="font-weight: 600; color: #7190ff;">${element.publishedAt}</div>
                                    </div>
                                </div>
                            </a>`
            topNewsDom += topNewsHtml;
        });
        topnewsSection.innerHTML = topNewsDom;
    }
}
xhr.send();