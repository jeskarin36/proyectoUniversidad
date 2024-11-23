import db from "../basedatos/db.js"
import {Sequelize,DataTypes} from "sequelize"
import AudiografiaModelo from "./AudiografiaModelo.js"

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
    Id_Audiografia:{ type: DataTypes.STRING},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},
    {freezeTableName: true})

    AudiografiaModelo.hasMany(RepresentanteModelo,{
        foreignKey:"Id_Audiografia",
        sourceKey:"id"
    })

    RepresentanteModelo.belongsTo(AudiografiaModelo,{
        foreignKey:"Id_Audiografia",
         sourceKey:"id"
    })


 

export default RepresentanteModelo;