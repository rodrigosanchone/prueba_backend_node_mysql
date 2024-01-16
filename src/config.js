import {config} from  'dotenv'

config();
export const PORT = process.env.Port || 3000; 
export const DB_USER = process.env.DB_USER || ShadowRoot;
export const DB_HOST = process.env.DB_HOST;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_PORT = process.env.DB_PORT
/* console.log(process.env.Port)
console.log(process.env.DB_DATABASE) */


