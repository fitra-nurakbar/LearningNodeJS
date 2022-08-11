// Core Module
// File System

const fs = require("fs");

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

const mauTanya = (pertanyaan) => {
  return new Promise((resolve, rejects) => {
    rl.question(pertanyaan, (inputan) => {
      resolve(inputan);
    });
  });
};

const simpanContact = ( nama, noHP, email ) => {
  const data = { nama, noHP, email };
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const bio = JSON.parse(file);

  bio.push(data);

  fs.writeFileSync("./data/contacts.json", JSON.stringify(bio));
  console.log(`Selamat ${nama}, Datanya udah masuk...`);
  rl.close();
};

module.exports = { mauTanya, simpanContact };
