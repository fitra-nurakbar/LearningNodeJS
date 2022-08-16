const { command, parse } = require("yargs");
const { simpanContact, listContact, detailContact, deleteContact } = require("./app");

// mengambil argument dari command line
// console.log(process.argv)

command({
  command: "add",
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Alamat Email",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "No handphone",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const nama = argv.nama;
    const email = argv.email.toLowerCase();
    const noHP = argv.noHP;
    simpanContact(nama, email, noHP);
  },
}).demandCommand();
// menampilkan semua list kontak
command({
  command: "list",
  describe: "Menampilkan list contact",
  handler() {
    listContact();
  },
});
// menampilkan detail kontak berdasarkan nama
command({
  command: "detail",
  describe: "Menampilkan detail contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});
// menghapus kontak berdasarkan nama
command({
  command: "delete",
  describe: "Menghapus contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

parse();

// const { mauTanya, simpanContact } = require("./app.js");

// const main = async () => {
//   const nama = await mauTanya("Masukan Nama Anda : ");
//   const noHP = await mauTanya("Masukan No HP Anda : ");
//   const email = await mauTanya("Masukan Email Anda : ");

//   simpanContact(nama, noHP, email);
// };

// main();
