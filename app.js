// Core Module
// File System

const fs = require('fs');

// menuliskan string ke file (synchronous)
// try {
//      fs.writeFileSync('test/test.txt', 'Hello World Syncrhonous');
// } catch (e){
//      console.log(e)
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile('test/test.txt', 'Hello World Asynchronous', (e) => {
//      console.log(e)
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync('test/test.txt', 'utf-8');
// // console.log(data.toString())
// console.log(data)

// membaca file (asynchronous)
fs.readFile('tes/test.txt', 'utf-8', (e, data) => {
     if (e) throw e;
     console.log(data);
});
