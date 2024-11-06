import db from "../basedatos/db.js"

import {Sequelize,DataTypes} from "sequelize"

const UsuarioModelo= db.define('Usuario', {
    id:{  type: DataTypes.INTEGER,
        primaryKey: true},
    Nombre:{ type: DataTypes.STRING},
    Apellido:{ type: DataTypes.STRING},
    Usuario:{ type: DataTypes.STRING},
    Contraseña:{ type: DataTypes.STRING},
    Cargo:{ type: DataTypes.STRING},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},
    {freezeTableName: true})


 

export default UsuarioModelo;