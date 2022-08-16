// Core Module
// File System

const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

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
// function load contact
const loadContact = () => {
  const fileBuffer = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  // const fileBuffer = fs.readFileSync("./data/contacts.json", "utf-8");
  // const contacts = JSON.parse(fileBuffer);
  const contacts = loadContact();
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
      console.log(
        chalk.red.bold(`Format email tidak benar, contoh: '${email}@mail.com'`)
      );
      return false;
    }
  }
  // cek email formatter
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.bold(`Format No Handphone tidak benar, ${noHP}`));
    return false;
  }

  contacts.push(contact);
// menambah kan data ke JSON
  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));

  console.log(chalk.green.bold(`Selamat ${nama}, Datanya udah masuk...`));
};
// list contact
const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.bold("Daftar contact : "));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
  });
};
// detail contact
const detailContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  if (!contact) {
    console.log(chalk.red.bold(`${nama}, tidak di temukan!`));
    return false;
  }
  const detail = () => {
    console.log(chalk.yellow.bold(contact.nama));
    if (contact.email) {
      console.log(contact.email);
    }
    console.log(contact.noHP);
  };
  detail();
};
// delte kontak
const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );
  // capitalize function
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.bold(`${capitalizeFirstLetter(nama)}, tidak di temukan!`));
    return false;
  }

  fs.writeFileSync("./data/contacts.json", JSON.stringify(newContacts));
  
  console.log(chalk.red.bold(`${nama}, Datanya udah terhapus...`));
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };
