import db from "../basedatos/db.js"
import InstrumentoModelo from "./InstrumentoModelo.js"
import RepresentanteModelo from "../modelo/RepresentanteModelo.js"
import ProgramaModelo from "../modelo/ProgramaModelo.js"
import ModuloModelo from "../modelo/ModuloModelo.js"
import AudiografiaModelo from "./AudiografiaModelo.js"

import {Sequelize,DataTypes} from "sequelize"


const MatriculaModelo= db.define('Matricula', {
    id:{  type: DataTypes.INTEGER,
        primaryKey: true},
    Nombre:{ type: DataTypes.STRING},
    Apellido:{ type: DataTypes.STRING},
    Cedula:{ type: DataTypes.STRING},
    Edad: {type: DataTypes.INTEGER},
    Sexo: {type: DataTypes.STRING},
    Colegio: {type: DataTypes.STRING},
    Turno: {type: DataTypes.STRING},
    Grado: {type: DataTypes.STRING},
    Enfermedad: {type: DataTypes.STRING},
    id_audiografia: {type: DataTypes.STRING},
    id_representante: {type: DataTypes.INTEGER},
    id_instrumento: {type: DataTypes.INTEGER},
    id_modulo: {type: DataTypes.INTEGER},
    id_programa: {type: DataTypes.INTEGER},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},
    {freezeTableName: true})

   
    InstrumentoModelo.hasMany(MatriculaModelo,{
        foreignKey:"id_instrumento",
        sourceKey:"id"
    })

    MatriculaModelo.belongsTo(InstrumentoModelo,{
        foreignKey:"id_instrumento",
         sourceKey:"id"
    })

    RepresentanteModelo.hasMany(MatriculaModelo,{
        foreignKey:"id_representante",
        sourceKey:"id"
    })

    MatriculaModelo.belongsTo(RepresentanteModelo,{
        foreignKey:"id_representante",
         sourceKey:"id"
    })

    ProgramaModelo.hasMany(MatriculaModelo,{
        foreignKey:"id_programa",
        sourceKey:"id"
    })

    MatriculaModelo.belongsTo(ProgramaModelo,{
        foreignKey:"id_programa",
         sourceKey:"id"
    })

   ModuloModelo.hasMany(MatriculaModelo,{
        foreignKey:"id_Modulo",
        sourceKey:"id"
    })

    MatriculaModelo.belongsTo(ModuloModelo,{
        foreignKey:"id_Modulo",
         sourceKey:"id"
    })

    AudiografiaModelo.hasMany(MatriculaModelo,{
        foreignKey:"id_Audiografia",
        sourceKey:"id"
    })

    MatriculaModelo.belongsTo(AudiografiaModelo,{
        foreignKey:"id_Audiografia",
         sourceKey:"id"
    })
export default MatriculaModelo;