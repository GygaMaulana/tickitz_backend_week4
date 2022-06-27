const db = require("../helper/db_connection");

module.exports = {
  get: (req, res) => {
    return new Promise((resolve, reject) => {
      // const { title = "", director = "" } = req.query;
      // const sql = `SELECT * FROM movies ${
      //   title
      //     ? `WHERE title LIKE '%${title}%'`
      //     : title && director
      //     ? `WHERE title LIKE '%${title}%' AND director LIKE '${director}%'`
      //     : ""
      // } ORDER BY releaseDate DESC`;
      const sql = `SELECT * FROM movies left join categories on movies.categoryID = categories.categoryID`;
      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get all from movies success",
          status: 200,
          data: results,
        });
      });
    });
  },
  add: (req, res) => {
    return new Promise((resolve, reject) => {
      const {
        title,
        categoryID,
        durationHours,
        durationMinute,
        director,
        releaseDate,
        cast,
        description,
        cover,
      } = req.body;

      db.query(
        `INSERT INTO movies(title, categoryID, durationHours, durationMinute, director, releaseDate, cast, description,  cover) VALUES('${title}','${categoryID}','${durationHours}','${durationMinute}','${director}','${releaseDate}','${cast}', '${description}', '${cover}')`,
        (err, results) => {
          if (err) {
            console.log(err);
            reject({ message: "Update Error" });
          }
          resolve({
            message: "Add new movies success",
            status: 200,
            data: {
              id: results.insertId,
              ...req.body,
            },
          });
        }
      );
    });
  },
  update: (req, res) => {
    return new Promise((resolve, reject) => {
      const { movieID } = req.params;
      db.query(`SELECT * FROM movies where movieID=${movieID}`, (err, results) => {
        if (err) {
          res.send({ message: "Something wrong" });
        }

        const previousData = {
          ...results[0],
          ...req.body,
        };
        const {
          title,
          categoryID,
          durationHours,
          durationMinute,
          director,
          releaseDate,
          cast,
          description,
          cover,
        } = previousData;

        db.query(
            `UPDATE movies SET title='${title}', categoryID='${categoryID}', durationHours='${durationHours}', durationMinute='${durationMinute}', director='${director}', releaseDate='${releaseDate}', cast='${cast}', description='${description}', cover='${cover}' WHERE movieID="${movieID}"`,
            (err, results) => {
              if (err) {
                console.log(err);
                reject({ message: "Something wrong" });
              }
              resolve({
                message: "Update movies success",
                status: 200,
                data: results,
              });
          }
        );
      });
    });
  },
  remove: (req, res) => {
    return new Promise((resolve, reject) => {
      const { movieID } = req.params;
      db.query(`DELETE FROM movies WHERE movieID=${movieID}`, (err, results) => {
        if (err) {
          reject({ message: "Something wrong" });
        }
        resolve({
          message: "Delete movies success",
          status: 200,
          data: results,
        });
      });
    });
  },
};