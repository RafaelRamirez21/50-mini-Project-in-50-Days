const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=99')
    const data = await res.json()
    results = data.results
    console.log(results)

    results = data.results
    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img class="profile" src="${user.picture.large}">
            <div class="user-info">
            <h4> ${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city},${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        console.log(item)
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}