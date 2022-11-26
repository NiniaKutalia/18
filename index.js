

let mainWrapper = document.getElementById('postWrapper');
let overlay = document.getElementById('overlay');
let content = document.getElementById('content');
let close = document.getElementById('close');







function ajax() {
    let requist = new XMLHttpRequest();
    requist.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    requist.addEventListener('load', function () {
        let dataJs = JSON.parse(requist.responseText);
        // console.log(dataJs);
        dataJs.forEach(item => {
            createPost(item);
        })
    })
    requist.send();
}

function createPost(item) {
    let divWrapper = document.createElement('div');
    divWrapper.classList.add('posts');
    divWrapper.setAttribute('data-id', item.id)

    let h4 = document.createElement('h4');
    h4.innerText = item.id;
    let h2 = document.createElement('h2');
    h2.innerText = item.title;
    divWrapper.appendChild(h4);
    divWrapper.appendChild(h2);

    divWrapper.addEventListener('click', function (event) {
        console.log(event.target);
        let id = event.target.getAtribute('data-id');
        console.log(id);
    })

    mainWrapper.appendChild(divWrapper);
    console.log(divWrapper);

   

}


ajax();