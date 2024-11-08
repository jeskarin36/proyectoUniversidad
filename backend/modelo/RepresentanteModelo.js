import db from "../basedatos/db.js"

import {Sequelize,DataTypes} from "sequelize"

const RepresentanteModelo= db.define('Representante', {
    id:{  type: DataTypes.INTEGER,
        primaryKey: true},
    Nombre:{ type: DataTypes.STRING},
    Apellido:{ type: DataTypes.STRING},
    Cedula:{ type: DataTypes.INTEGER},
    Telefono: {type: DataTypes.STRING},
    Estado:{ type: DataTypes.STRING},
    Municipio:{ type: DataTypes.STRING},
    Sector:{ type: DataTypes.STRING},
    Calle:{ type: DataTypes.STRING},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},
    {freezeTableName: true})


 

export default RepresentanteModelo;