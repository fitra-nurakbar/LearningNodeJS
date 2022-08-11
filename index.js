const { mauTanya, simpanContact } = require("./app.js");

const main = async () => {
  const nama = await mauTanya("Masukan Nama Anda : ");
  const noHP = await mauTanya("Masukan No HP Anda : ");
  const email = await mauTanya("Masukan Email Anda : ");

  simpanContact(nama, noHP, email);
};

main();
