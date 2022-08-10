let url2 = 'https://jsonplaceholder.typicode.com/photos'

for (let index = 0; index <= 10 ; index++) {
    axios.get(url2 + '/' + index)
        .then(res => {
            if(res.status === 200 || res.status === 200){
                reload(res.data)
            }
        })
        .catch(err => console.log(err))
}
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => console.log(json))

const cont = document.querySelector('.container')
  function reload(item) {
    // cont.innerHTML = ''
    // for (let item of smth) {
        cont.innerHTML += `
        <div class="container">
        <h1 class="title">${item.title}</h1>
        <img src="${item.url}" alt="">
    </div>
        `
    }
//   }