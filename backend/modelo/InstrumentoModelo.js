import db from "../basedatos/db.js"
import {Sequelize,DataTypes} from "sequelize"
import DepositoModelo from "./DepositoModelo.js"


const InstrumentoModelo= db.define('Instrumento', {
    id:{  type: DataTypes.INTEGER,
        primaryKey: true},
    Nombre:{ type: DataTypes.STRING},
    Marca:{ type: DataTypes.STRING},
    Tamaño:{ type: DataTypes.STRING},
    Codigo:{ type: DataTypes.STRING},
    Estado: {type: DataTypes.STRING},
    Id_Deposito: {type: DataTypes.INTEGER},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},
    {freezeTableName: true})

    DepositoModelo.hasMany(InstrumentoModelo,{
        foreignKey:"Id_Deposito",
        sourceKey:"id"
    })

    InstrumentoModelo.belongsTo(DepositoModelo,{
        foreignKey:"Id_Deposito",
         sourceKey:"id"
    })



   

export default InstrumentoModelo;