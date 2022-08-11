// Core Module
// File System

const fs = require("fs");
const { resolve } = require("path");
const { rejects } = require("assert");

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
// fs.readFile('tes/test.txt', 'utf-8', (e, data) => {
//      if (e) throw e;
//      console.log(data);
// });

// Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat directory jika belum ada
const dirPath = "./data/";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
// membuat file JSON jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const pertanyaan1 = () => {
  return new Promise((resolve, rejects) => {
    rl.question("Masukan nama anda : ",
      (nama) => {
        resolve(nama);
      });
  });
};

const pertanyaan2 = () => {
  return new Promise((resolve, rejects) => {
   rl.question("Masukan No HP anda : ",
      (noHP) => {
        resolve(noHP);
      });
  });
};

const main = async () => {
  const nama = await pertanyaan1()
  const noHP = await pertanyaan2()

  const data = { nama, noHP };
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const bio = JSON.parse(file);

  bio.push(data);

  fs.writeFileSync("./data/contacts.json", JSON.stringify(bio));
  console.log(`Hallo ${nama}, Datanya udah masuk...`);
  rl.close();
};

main();

// rl.question("Masukan nama anda : ", (nama) => {
//   rl.question("Masukan No HP anda : ", (noHP) => {
//     const data = { nama, noHP };
//     const file = fs.readFileSync("./data/contacts.json", "utf-8");
//     const bio = JSON.parse(file);

//     bio.push(data);

//     fs.writeFileSync("./data/contacts.json", JSON.stringify(bio));
//     console.log(`Hallo ${nama}, Datanya udah masuk...`);
//     rl.close();
//   });
// });
