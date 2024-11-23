import db from "../basedatos/db.js"
import {Sequelize,DataTypes} from "sequelize"



const AudiografiaModelo= db.define('audiografia', {
    id:{  type: DataTypes.STRING,
        primaryKey: true},
    Nombre:{ type: DataTypes.STRING},
    File:{ type: DataTypes.STRING},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},
    {freezeTableName: true})

   
export default AudiografiaModelo;