var pool = require('../models/db');

async function getNovedadesGanadores(){
    var query = 'select * from ganadores';
    var rows = await pool.query(query);
    return rows;
    
}

async function deleteNovedadesGanadoresById (id) {
    var query = 'delete from ganadores where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function insertNovedadGanadores (obj) {
    try {
      var query = "insert into ganadores set ?";
      var rows = await pool.query(query, [obj])
      return rows;
  
    } catch (error) {
        console.log(error);
        throw error;
    }
  }

async function getNovedadesGanadoresById(id) {
    var query = "select * from ganadores where id=? ";
    var rows = await pool.query(query, [id]);
    return rows [0];
}


async function modificarNovedadGanadoresById(obj, id) {
    try {
      var query = "update ganadores set ? where id=?";
      var rows = await pool.query(query, [obj,id]);
      return rows;
    } catch (error) {
      throw error;
    }
  }





module.exports = {getNovedadesGanadores, deleteNovedadesGanadoresById, insertNovedadGanadores, getNovedadesGanadoresById, modificarNovedadGanadoresById}

