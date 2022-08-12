// Core Module
// File System

const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
const { argv } = require("process");

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

const simpanContact = (nama, noHP, email, argv) => {
  const contact = { nama, noHP, email };
  const fileBuffer = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);

  // cek duplikat
  const duplikat = contacts.find((contacts) => contacts.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.bold("Nama contact sudah terdaftar, gunakan nama lain")
    );
    return false;
  }
  // cek email formatter
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.bold(`Format email tidak benar, contoh: '${email}@mail.com'`));
      return false;
    }
  }
if(!validator.isMobilePhone(noHP, 'id-ID')){
  console.log(chalk.red.bold(`Format No Handphone tidak benar, contoh: '(+62)${noHP}'`))
  return false;
};
  contacts.push(contact);

  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));
  console.log(chalk.green.bold(`Selamat ${nama }, Datanya udah masuk...`));
};

module.exports = { simpanContact };
