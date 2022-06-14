fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>response.text())
.then((result) => {
    const users = JSON.parse(result)
    console.log(users)
    console.log(users.length)
    console.log(users.name)
})