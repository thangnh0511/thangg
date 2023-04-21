const __URL = 'https://firebasestorage.googleapis.com/v0/b/porfolio-c82b8.appspot.com/o/data%2Fdata_20230101.json?alt=media&token=094f8f29-81fa-471e-90bd-4db7bb6e738c'


import { _DATA } from "./data230101"

// fetch(
//     __URL,
//     { method: 'GET' }
//   )
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch( error => console.error('error:', error) );

let json = JSON.stringify(_DATA)
console.log(json)  
console.log(typeof json)
// fetch('https://firebasestorage.googleapis.com/v0/b/porfolio-c82b8.appspot.com/o/data%2Fdata_20230101.json?alt=media&token=094f8f29-81fa-471e-90bd-4db7bb6e738c')
// .then((response) => response.json())
// .then((data) => console.log(data));