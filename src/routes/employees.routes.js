import {Router}  from 'express';
import {getEmployees, createEmployees,getEmployee, updateEmployee, deleteEmployee} from '../controllers/employess.controllers.js'

const router = Router();

router.get('/empleados', getEmployees);
router.get('/empleados/:id', getEmployee);
router.post('/empleados', createEmployees);
router.put('/empleados/:id', updateEmployee);/*Actualiza todos los datos */
router.patch('/empleados/:id', updateEmployee);/*Actualiza algunos datos */
router.delete('/empleados/:id',deleteEmployee);

export default router;