// My news api key
let apiKey = '34b9d15db283431d9239230764d13889';
let topnewsSection = document.getElementById('topnewsSection');
window.addEventListener('DOMContentLoaded', (event) => {
    topnewsSection.innerHTML = `<div class="spinner-border d-block m-auto my-5" role="status">
                                    <span class="visually-hidden"></span>
                                </div>`
});

async function topNewsApi() {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
    let data = response.json();
    return data;
}

let a = topNewsApi();
a.then((data) => {
    let topNews = data;
    topNewsDom = '';
    topNews.articles.forEach(function (element) {
        topNewsHtml = '';
        topNewsHtml += `<a class="text-decoration-none" style="color: unset;" href="${element.url}">
                                <div class="card">
                                    <img src="${element.urlToImage}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h5 class="card-title" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;"">${element.title}</h5>
                                        <div class="d-flex justify-content-between" style="font-weight: 600; color: #7190ff;"><em>${element.source.name}</em><em>${element.author}</em></div>
                                        <p class="card-text" style="color: grey; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${element.description}</p>
                                        <div style="font-weight: 600; color: #7190ff;">${element.publishedAt}</div>
                                    </div>
                                </div>
                            </a>`
        topNewsDom += topNewsHtml;
    });
    topnewsSection.innerHTML = topNewsDom;
}).catch(()=>{
    topnewsSection.innerHTML = 'Some error occured';
})