const { command, parse } = require("yargs");
const { simpanContact } = require("./app");

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
    noHP: {
      describe: "No handphone",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Alamat Email",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    const nama = argv.nama;
    const email = argv.email;
    const noHP = argv.noHP;
    simpanContact(nama, noHP, email);
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
