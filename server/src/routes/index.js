const {Router} = require('express');

const router = Router();
const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST_IP,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

router.get("/login",(req,res)=>{
    let email  = req.query.email;
    let password = req.query.password;
    let query = "select * from usuario WHERE Usu_password = '"+password+"' AND Usu_correo = '"+email+"';";
    pool.query(query, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(results);
      }
    });
})
router.get('/insert', (req, res) => {
    console.log(req.query.uf);
    console.log(req.query.fecha);
    console.log(req.query.valorMoneda);
    console.log(req.query.total);
    console.log(req.query.id);
    let query = "INSERT INTO `conversion`(`Con_id`, `Con_fecha`, `Con_hora`, `Con_origen_uf`, `Con_fecha_uf`, `Con_destino_clp`, `Con_Usu_id`, `Con_uf_valor`) VALUES (NULL,CURDATE(),CURTIME(),'"+req.query.uf+"','"+req.query.fecha+"','"+req.query.total+"','"+req.query.id+"','"+req.query.valorMoneda+"');";
    pool.query(query, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(results);
      }
    });
  });
  
  router.get('/select', (req, res) => {
    let sql = "select * from conversion";
    pool.query(sql, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(results);
      }
    });
  });
module.exports = router;





  
  
