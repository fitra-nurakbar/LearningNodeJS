const nami = "Ahmad Kun";
const yuswa = "19";

// const data = (nami, yuswa) => `Sampurasun, tepangkeun simkuring ${nami} yuswa simkuring ${yuswa}`;
function data(nami, yuswa) {
  return `Sampurasun, tepangkeun simkuring ${nami} yuswa simkuring ${yuswa},`;
}
mahasiswa = {
  nama: 'Ujang Solihat',
  umur: 35,
  ctkMhs() {
    return `nama saya ${this.nama}, dan umur saya ${this.umur} tahun`
  }
};
const test = `Simkuring masih jomblo`;
class Orang {
  constructor() {
    console.log('Objek orang telah di buat');
  }
}


// module.exports.data = data;
// module.exports.test = test;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = {data, test, mahasiswa, Orang}