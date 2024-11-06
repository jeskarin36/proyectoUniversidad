import db from "../basedatos/db.js"
import {Sequelize,DataTypes} from "sequelize"



const DepositoModelo= db.define('Deposito', {
    id:{  type: DataTypes.INTEGER,
        primaryKey: true},
    Nombre:{ type: DataTypes.STRING},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},
    {freezeTableName: true})

   
export default DepositoModelo;