const Pool = require('../config/db');

const insertAlergiPasien = (data) => {
  const { id, id_pasien, id_alergi } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO tbl_alergi_pasien 
        (id, id_pasien, id_alergi,
            created_at, updated_at) 
        VALUES
        ('${id}', '${id_pasien}', '${id_alergi}', 
            NOW(), NOW())`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const allAlergiPasien = ({ search, sortBy, sortOrder, limit, offset }) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT tbl_alergi_pasien.id, 
          tbl_alergi_pasien.id_pasien, 
            tbl_pasien.nama_lengkap AS nama_lengkap,
          tbl_alergi_pasien.id_alergi,
            tbl_alergi.nama AS nama,
          to_char( tbl_alergi_pasien.created_at, 'DD Month YYYY - HH:MI' ) AS created_at,
          to_char( tbl_alergi_pasien.updated_at, 'DD Month YYYY - HH:MI' ) AS updated_at
        FROM tbl_alergi_pasien AS tbl_alergi_pasien
        INNER JOIN tbl_pasien AS tbl_pasien ON tbl_alergi_pasien.id_pasien = tbl_pasien.id
        INNER JOIN tbl_alergi AS tbl_alergi ON tbl_alergi_pasien.id_alergi = tbl_alergi.id
        WHERE tbl_pasien.nama_lengkap
        ILIKE '%${search}%' ORDER BY tbl_alergi_pasien.${sortBy} ${sortOrder} 
        LIMIT ${limit} OFFSET ${offset}`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const countAllAlergiPasien = () => {
  return Pool.query(`SELECT COUNT(*) AS total FROM tbl_alergi_pasien`);
};

const getAlergiPasienById = ({ id }) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT tbl_alergi_pasien.id, 
            tbl_alergi_pasien.id_pasien, 
                tbl_pasien.nama_lengkap AS nama_lengkap,
            tbl_alergi_pasien.id_alergi,
                tbl_alergi.nama AS nama,
            to_char( tbl_alergi_pasien.created_at, 'DD Month YYYY - HH:MI' ) AS created_at,
            to_char( tbl_alergi_pasien.updated_at, 'DD Month YYYY - HH:MI' ) AS updated_at
        FROM tbl_alergi_pasien AS tbl_alergi_pasien
        INNER JOIN tbl_pasien AS tbl_pasien ON tbl_alergi_pasien.id_pasien = tbl_pasien.id
        INNER JOIN tbl_alergi AS tbl_alergi ON tbl_alergi_pasien.id_alergi = tbl_alergi.id
        WHERE tbl_alergi_pasien.id = '${id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const findAlergiPasienById = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM tbl_alergi_pasien 
        WHERE
            id = '${id}' 
        `,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const editAlergiPasien = (data) => {
  const { id, id_pasien, id_alergi } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE tbl_alergi_pasien 
          SET
            id_pasien='${id_pasien}', id_alergi='${id_alergi}', 
            updated_at=NOW()
          WHERE id='${id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

module.exports = {
  insertAlergiPasien,
  allAlergiPasien,
  countAllAlergiPasien,
  getAlergiPasienById,
  findAlergiPasienById,
  editAlergiPasien,
};
