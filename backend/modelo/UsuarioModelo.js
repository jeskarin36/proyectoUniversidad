import db from "../basedatos/db.js"
import AudiografiaModelo from "./AudiografiaModelo.js"
import {Sequelize,DataTypes} from "sequelize"

const UsuarioModelo= db.define('Usuario', {
    id:{  type: DataTypes.INTEGER,
        primaryKey: true},
    Nombre:{ type: DataTypes.STRING},
    Apellido:{ type: DataTypes.STRING},
    Usuario:{ type: DataTypes.STRING},
    Contraseña:{ type: DataTypes.STRING},
    Cargo:{ type: DataTypes.STRING},
    Cedula:{ type: DataTypes.INTEGER},
    id_audiografia:{ type: DataTypes.INTEGER},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},
    {freezeTableName: true})

    AudiografiaModelo.hasMany(UsuarioModelo,{
        foreignKey:"Id_Audiografia",
        sourceKey:"id"
    })

    UsuarioModelo.belongsTo(AudiografiaModelo,{
        foreignKey:"Id_Audiografia",
         sourceKey:"id"
    })
 

export default UsuarioModelo;