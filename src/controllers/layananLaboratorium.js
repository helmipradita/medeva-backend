const { response } = require("../middleware/common");
const {
  createLayananLaboratorium,
  getLayananLaboratorium,
  countLayananLaboratorium,
  getLayananLaboratoriumById,
  updateLayananLaboratorium,
  deleteLayananLaboratorium,
} = require("../models/layananLaboratorium");

const layananLaboratoriumController = {
  create: async (req, res, next) => {
    try {
      let digits = "0123456789";
      let id = "LLB";
      for (let i = 0; i < 6; i++) {
        id += digits[Math.floor(Math.random() * 10)];
      }
      const data = {
        id,
        id_laboratorium: req.body.id_laboratorium,
        id_pemeriksaan: req.body.id_pemeriksaan,
        kategori: req.body.kategori,
      };
      await createLayananLaboratorium(data);
      response(res, 200, true, data, "Create layanan lab success");
    } catch (err) {
      console.log(err);
      response(res, 400, false, err, "Create layanan lab failed");
    }
  },
  get: async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const sortBy = req.query.sortBy || "created_at";
      const sortOrder = req.query.sortOrder || "desc";
      const searchLaboratorium = req.query.searchLaboratorium || "";
      const searchPemeriksaan = req.query.searchPemeriksaan || "";
      const searchKategori = req.query.searchKategori || "";
      const offset = (page - 1) * limit;
      const result = await getLayananLaboratorium({
        searchLaboratorium,
        searchPemeriksaan,
        searchKategori,
        sortBy,
        sortOrder,
        limit,
        offset,
      });
      const {
        rows: [count],
      } = await countLayananLaboratorium();
      const totalData = parseInt(count.total);
      const totalPage = Math.ceil(totalData / limit);
      const pagination = {
        currentPage: page,
        limit,
        totalData,
        totalPage,
      };
      response(
        res,
        200,
        true,
        result.rows,
        "Get layanan lab data success",
        pagination
      );
    } catch (err) {
      console.log("Get layanan lab data error", err);
      response(res, 400, false, null, "Get layanan lab data failed");
    }
  },
  getById: async (req, res, next) => {
    try {
      const result = await getLayananLaboratoriumById(req.params.id);
      response(
        res,
        200,
        true,
        result.rows,
        "Get layanan lab data by ID success"
      );
    } catch (err) {
      console.log("Get layanan lab data by ID error", err);
      response(res, 400, false, err, "Get layanan lab data by ID failed");
    }
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      const id_laboratorium = req.body.id_laboratorium;
      const id_pemeriksaan = req.body.id_pemeriksaan;
      const kategori = req.body.alamat;
      const data = {
        id,
        id_laboratorium,
        id_pemeriksaan,
        kategori,
      };
      await updateLayananLaboratorium(data);
      response(res, 200, true, data, "Update layanan lab data success");
    } catch (err) {
      console.log("Update layanan lab data error", err);
      response(res, 400, false, "Update layanan lab data failed");
    }
  },
  delete: async (req, res, next) => {
    try {
      await deleteLayananLaboratorium(req.params.id);
      response(res, 200, true, null, "Delete layanan lab success");
    } catch (err) {
      console.log("Delete layanan lab error", err);
      response(res, 400, false, err, "Delete layanan lab failed");
    }
  },
};

exports.layananLaboratoriumController = layananLaboratoriumController;
