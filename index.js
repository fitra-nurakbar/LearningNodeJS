// const getUserSync = (id) => {
//      const nama = id === 1 ? "Test Satu" : "Test Dua";
//      return {id, nama};
// }

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const userTiga = "Test Tiga";
// console.log(userTiga);

const data = require("./test/coba");

console.log(data.data("ahmad", 19), data.test, data.mahasiswa.ctkMhs(), new data.Orang);
const getUserAsync = (id, cb) => {
  const time = id === 1 ? 300 : 500;
  setTimeout(() => {
    const nama = id === 1 ? "Test Satu" : "Test Dua";
    cb({ id, nama });
  }, time);
};

const userSatu = getUserAsync(1, (hasil) => {
  console.log(hasil);
});

const userDua = getUserAsync(2, (hasil) => {
  console.log(hasil);
});

const userTiga = "Test Tiga";
console.log(userTiga);
