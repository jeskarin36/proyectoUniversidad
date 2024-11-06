import {Sequelize} from "sequelize";

const db = new Sequelize("nucleo","root","",{
    host:"localhost",
    dialect: "mysql"
    
})

export default db;