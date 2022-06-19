var pool = require('./db');

async function getNovedades(){
    var query = 'select * from inscripciones';
    var rows = await pool.query(query);
    return rows;
}

async function deleteNovedadesById (id) {
    var query = 'delete from inscripciones where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function insertNovedad (obj) {
    try {
      var query = "insert into inscripciones set ?";
      var rows = await pool.query(query, [obj])
      return rows;
  
    } catch (error) {
        console.log(error);
        throw error;
    }
  }

async function getNovedadesById(id) {
    var query = "select * from inscripciones where id=? ";
    var rows = await pool.query(query, [id]);
    return rows [0];
}


async function modificarNovedadById(obj, id) {
    try {
      var query = "update inscripciones set ? where id=?";
      var rows = await pool.query(query, [obj,id]);
      return rows;
    } catch (error) {
      throw error;
    }
  }





module.exports = {getNovedades, deleteNovedadesById, insertNovedad, getNovedadesById, modificarNovedadById}