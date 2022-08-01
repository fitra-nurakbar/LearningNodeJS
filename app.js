// Core Module
// File System

const fs = require('fs');

// menuliskan string ke file (synchronous)
try {
     fs.writeFileSync('test/test.txt', 'Hello world syncrhonous');
} catch (e){
     console.log(e)
}