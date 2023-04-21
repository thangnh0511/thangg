
const url = 'https://firebasestorage.googleapis.com/v0/b/porfolio-c82b8.appspot.com/o/data%2Fdata_20230101.json?alt=media&token=52eacd8e-3aeb-4cdb-be64-54e741cbb448'

const source = "./data/data230101.json"
const personal_ID = 1

export default { _experience, _personal, _project, _project_res, _summary };

var _personal = new Array
var _experience = new Array
var _project = new Array
var _project_res = new Array
var _summary = new Array


var myInit = {
    method:'GET',
    headers: {
        'Authorization': 'Basic' +btoa('username:password'),
        'Content-Type': 'application/json',
    },
    mode: 'no-cors',
    cache: 'default'
}

let myRequest = new Request(source, myInit)

fetch(myRequest)
.then(res => 
    res.json()
)
.then(data => {
    // console.log(data.personal[0])

    data.personal.forEach(element => {
        let temp = ''
        temp = element
        // console.log(temp)
        _personal.push(temp)
    });
    data.summary.forEach(element => {
        let temp = ''
        temp = element
        _summary.push(temp)
    });
    data.project.forEach(element => {
        let temp = ''
        temp = element
        _project.push(temp)
    });
    data.project_responsibilities.forEach(element => {
        let temp = ''
        temp = element
        _project_res.push(temp)
    });
    data.experience.forEach(element => {
        let temp = ''
        temp = element
        _experience.push(temp)
    });
    // console.log(_personal)
    // console.log(_summary)
    // console.log(_experience)
    // console.log(_project)
    // console.log(_project_res)
    
})
.catch(error => console.log(error))

// --------------------------------
function loadingHeader() {

    document.getElementById('title-header').innerHTML = `
    <p class="title-name">${_personal.name}</p>
    <p class="update-date">Last Update - ${_personal.lastUpdate}</p>
    `
}
loadingHeader()

// console.log(_summary)
// console.log(_experience)
// console.log(_project)
// console.log(_project_res)