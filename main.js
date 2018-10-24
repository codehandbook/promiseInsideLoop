const helper = require('./helper')
const user_ids = [1,2,3,4,5]

let promises = [];
user_ids.forEach((id) => {
    promises.push(helper.make_API_call('https://jsonplaceholder.typicode.com/todos/' + id))
})

Promise.all(promises)
.then((result) => {
    console.log('all resolved ', result)
})
.catch((error) => {
	console.log('error is ',error)
})