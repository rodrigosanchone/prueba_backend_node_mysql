import { json } from 'express';
import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
       try {
              const [rows] = await pool.query('SELECT * FROM employee')
              res.json(rows)
       } catch (error) {
              return res.status(500).json({
                     message: 'Error',
              })
       }

      
};

export const getEmployee = async (req, res) => {
       try {
              console.log(req.params.id);
              const [rows] = await pool.query('SELECT * FROM employee WHERE ID = ?', [req.params.id]);
              console.log(rows);
              
              if (rows.length <= 0) {
                     return res.status(404).json({
                            messages: 'No existe'
                     });
              }
              res.json(rows[0]);
              
       } catch (error) {
              return res.status(500).json({
                     message: 'Error',
              })
       }


      

      
     
}

export const createEmployees = async (req, res) => {
       try {
              console.log(req.body)
              const { name, salary, email } = req.body
              const [rows] = await pool.query('Insert Into employee (name,salary,email) VALUES (?,?,?)', [name, salary, email]);
              res.send({
                     id: rows.insertId,
                     name,
                     salary,
                     email

              })
              res.status(201).json({ id: rows.insertId, name, salary });
       } catch (error) {
              return res.status(500).json({
                     message: 'Error',
              })
       }

}
export const deleteEmployee = async (req, res) => {
       try {
              console.log(req.params.id);
              const [result] = await pool.query('Delete  FROM employee WHERE ID = ?', [req.params.id]);
              if (result.affectedRows <= 0) return res.status(404).json({
                     messages: 'No existe'
              });
              res.sendStatus(204);
       } catch (error) {
              return res.status(500).json({
                     message: 'Error',
              })
       }


      

}
export const updateEmployee = async (req, res) => {
      
       try {
              const { id } = req.params;
              const { name, salary, email } = req.body;
              const [result] = await pool.query('Update employee SET name = IFNULL(?), salary =IFNULL(?), email =IFNULL(?) WHERE  id = ?', [name, salary, email, id])
              if (result.affectedRows === 0) return res.status(404).json({
                     message: "No hay resultados"
              })
              const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
              res.json(rows);
       } catch (error) {
              return res.status(500).json({
                     message: 'Error',
              })
       }





       

}
