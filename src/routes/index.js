const express = require("express");
const router = express.Router();
const pasienControllers = require("./pasien");
const asuransiControllers = require("./asuransi");
const skriningControllers = require("./skrining");
const alergiControllers = require("./alergi");
const alergiPasienControllers = require("./alergiPasien");
const vitalSignsControllers = require("./vitalSigns");
const kunjunganControllers = require("./kunjungan");
const penyakitControllers = require("./penyakit");
const diagnosisControllers = require("./diagnosis");
const tempKunjunganControllers = require("./tempKunjungan");
const pemeriksaanControllers = require("./pemeriksaan");
const pemeriksaanPenunjangControllers = require("./pemeriksaanPenunjang");
const poliControllers = require("./poli");
const rekamMedisControllers = require("./rekamMedis");

const karyawanRouter = require("./karyawan");
const klinikRouter = require("./klinik");
const divisiRouter = require("./divisi");
const shiftRouter = require("./shift");
const jagaRouter = require("./jaga");
const antrianRouter = require("./antrian");

router.use("/pasien", pasienControllers);
router.use("/asuransi", asuransiControllers);
router.use("/skrining", skriningControllers);
router.use("/alergi", alergiControllers);
router.use("/alergi-pasien", alergiPasienControllers);
router.use("/vital-signs", vitalSignsControllers);
router.use("/kunjungan", kunjunganControllers);
router.use("/penyakit", penyakitControllers);
router.use("/diagnosis", diagnosisControllers);
router.use("/temp-kunjungan", tempKunjunganControllers);
router.use("/pemeriksaan", pemeriksaanControllers);
router.use("/pemeriksaan-penunjang", pemeriksaanPenunjangControllers);
router.use("/poli", poliControllers);
router.use("/rekam-medis", rekamMedisControllers);

router.use("/karyawan", karyawanRouter);
router.use("/klinik", klinikRouter);
router.use("/divisi", divisiRouter);
router.use("/shift", shiftRouter);
router.use("/jaga", jagaRouter);
router.use("/antrian", antrianRouter);

module.exports = router;
