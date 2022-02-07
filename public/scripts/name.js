fetch('http://localhost:5000/users').then(function (response) {
    return response.json()
}).then(function (response) {

    response.forEach(function (el, i) {
        document.querySelector('tbody:last-of-type').insertAdjacentHTML('beforeend', '<tr></tr>');

        var allTr = document.querySelectorAll('tbody:last-of-type > tr')
        for (let key in response[i]) {
            allTr[i].insertAdjacentHTML('beforeend', '<td>' +
                `${response[i][key]}` +
                '</td>')
        }

    })

})

function funPost(e) {
    e.preventDefault()
    fetch('http://localhost:5000/post', {
        method: 'POST',
        body: JSON.stringify({
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())
        .then(json => console.log(json));
}

document.querySelector('button[type="submit"]').addEventListener('click', funPost)

fetch('http://localhost:5000/users/id').then(function (response) {
    return response.json()
}).then(function (response) {

    console.log(response[0].name)

})