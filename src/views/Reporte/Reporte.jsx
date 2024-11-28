import React, { useState, useEffect } from 'react'
import "./Reporte.css";
import { useNavigate } from 'react-router-dom';
import * as XLSX from "xlsx"
import axios from "axios"
import Tabla from "./Tabla"

function Reporte({ Manejador }) {





  const url = "http://localhost:8000/Instrumento/";
  const url2 = "http://localhost:8000/Representante/";
  const url3 = "http://localhost:8000/Matricula/";

  const [valor, setValor] = useState("");
  const [isCheckedFe, setIsCheckedFe] = useState(false);
  const [isCheckedMa, setIsCheckedMa] = useState(false);
  const [isChecked, setIsChecked] = useState(false)
  const [instrumentos, setInstrumentos] = useState([])
  const [representante, setRepresentante] = useState([])
  const [Alumnos, setAlumnos] = useState([]);
  const [codigo, setCodigo] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [marca, setMarca] = useState("");
  const [estado, setEstado] = useState("");
  const [filtrarpor, setFiltrarpor] = useState("")
  const [valorExport, setValorExport] = useState([])
  const [nuevoarray, setNuevoArray] = useState([])
  const [Modulo, setModulo] = useState("")
  const [CabeceraInventario, setCabeceraInventario] = useState([])
  const [SelecionModulo, setSelecionModulo] = useState("")
  const [guardari, setGuardari] = useState([])


  const navigate = useNavigate();



  const getInstrumentos = async () => {

    const res = await axios.get(url)
    const res2 = await axios.get(url2)
    const res3 = await axios.get(url3)
    setInstrumentos(res.data)
    setRepresentante(res2.data)
    setAlumnos(res3.data)
  }

  useEffect(() => {
    getInstrumentos();
  }, [])

  useEffect(() => {
   /**if(nuevoarray.length!==0){
    let wb = XLSX.utils.book_new()
    let ws = XLSX.utils.json_to_sheet(nuevoarray)

    XLSX.utils.book_append_sheet(wb, ws, "Mihoja")

    XLSX.writeFile(wb, "MYExcel.xlsx") 
   } */

   console.log(nuevoarray)
  }, [nuevoarray])

  const [seleccionado, setSeleccionado] = useState(
    {
      nombre: false,
      Codigo: false,
      Marca: false,
      Tamaño: false,
      Estado: false
    }

  );
  const [seleccionadofil, setSeleccionadofil] = useState([]);

  const [selec, setSelec] = useState([]);


  const HangleOnExel = () => {

   


    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" &&CabeceraInventario[1] === "Nombre" && CabeceraInventario[2]===undefined) {

      const data = instrumentos.filter(ins =>
      (delete ins.Codigo,
        delete ins.Tamaño,
        delete ins.Estado,
        delete ins.Marca,
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }

    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Codigo" && CabeceraInventario[2]===undefined) {

      const data = instrumentos.filter(ins =>
      (delete ins.Nombre,
        delete ins.Tamaño,
        delete ins.Estado,
        delete ins.Marca,
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }

    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Marca" && CabeceraInventario[2] === undefined) {

      const data = instrumentos.filter(ins =>
      (delete ins.Codigo,
        delete ins.Tamaño,
        delete ins.Estado,
        delete ins.Nombre,
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }

    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Tamaño" && CabeceraInventario[2] === undefined) {

      const data = instrumentos.filter(ins =>
      (delete ins.Codigo,
        delete ins.Nombre,
        delete ins.Estado,
        delete ins.Marca,
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }


    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Estado" && CabeceraInventario[2] === undefined) {

      const data = instrumentos.filter(ins =>
      (delete ins.Codigo,
        delete ins.Tamaño,
        delete ins.Nombre,
        delete ins.Marca,
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }


    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" && CabeceraInventario[2] === "Codigo" && CabeceraInventario[3] ===undefined) {

    
      const data = instrumentos.filter(ins =>
      (
        delete ins.Tamaño,
        delete ins.Estado,
        delete ins.Marca,
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }


    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" &&CabeceraInventario[1] ==="Nombre" && CabeceraInventario[2] ==="Codigo" && CabeceraInventario[3] === "Marca" && CabeceraInventario[4] === undefined) {
     
      const data = instrumentos.filter(ins =>
      (
        delete ins.Tamaño,
        delete ins.Estado,
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }

    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" && CabeceraInventario[2] === "Codigo" && CabeceraInventario[3] === "Marca" && CabeceraInventario[4] === "Tamaño" && CabeceraInventario[5] === undefined) {
      
      const data = instrumentos.filter(ins =>
      (
        
        delete ins.Estado,
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }

    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" && CabeceraInventario[2] === "Codigo" && CabeceraInventario[3] === "Marca" && CabeceraInventario[4] === "Tamaño" && CabeceraInventario[5] === "Estado" && CabeceraInventario[6] ===undefined) {

      const data = instrumentos.filter(ins =>
      (
        
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }


    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" && CabeceraInventario[2] === "Marca" && CabeceraInventario[3] ===undefined) {

      const data = instrumentos.filter(ins =>
      (
        delete ins.Tamaño,
        delete ins.Estado,
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Codigo,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }

    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" && CabeceraInventario[2] === "Tamaño" && CabeceraInventario[3] ===undefined) {

      const data = instrumentos.filter(ins =>
      (
        delete ins.Marca,
        delete ins.Estado,
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Codigo,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }

    if (filtrarpor==="Inventario" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" && CabeceraInventario[2] === "Estado" && CabeceraInventario[3] ===undefined) {

      const data = instrumentos.filter(ins =>
      (
        delete ins.Marca,
        delete ins.Tamaño,
        delete ins.Id_Deposito,
        delete ins.createdAt,
        delete ins.updatedAt,
        delete ins.Codigo,
        delete ins.Deposito
      )
      )
      setNuevoArray(data)


    }

  //********************Representanteee******************** *****************//
  

  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" && CabeceraInventario[2] === undefined) {

    const data = representante.filter(ins =>
    (
      delete ins.Apellido,
      delete ins.Cedula,
      delete ins.Telefono,
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Sector,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }

  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Apellido" && CabeceraInventario[2] === undefined) {

    const data = representante.filter(ins =>
    (
      delete ins.Nombre,
      delete ins.Cedula,
      delete ins.Telefono,
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Sector,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }

  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Cedula" && CabeceraInventario[2] === undefined) {

    const data = representante.filter(ins =>
    (
      delete ins.Apellido,
      delete ins.Nombre,
      delete ins.Telefono,
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Sector,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }

  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Telefono" && CabeceraInventario[2] === undefined) {

    const data = representante.filter(ins =>
    (
      delete ins.Apellido,
      delete ins.Cedula,
      delete ins.Nombre,
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Sector,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }


  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Sector" && CabeceraInventario[2] === undefined) {

    const data = representante.filter(ins =>
    (
      delete ins.Apellido,
      delete ins.Cedula,
      delete ins.Telefono,
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Nombre,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }



  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" &&  CabeceraInventario[2] === "Apellido" && CabeceraInventario[3] === undefined) {

    const data = representante.filter(ins =>
    (
     
      delete ins.Cedula,
      delete ins.Telefono,
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Sector,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }



  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" &&  CabeceraInventario[2] === "Apellido" &&  CabeceraInventario[3] === "Cedula" && CabeceraInventario[4] === undefined) {

    const data = representante.filter(ins =>
    (
     
      
      delete ins.Telefono,
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Sector,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }


  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" &&  CabeceraInventario[2] === "Apellido" &&  CabeceraInventario[3] === "Cedula" && CabeceraInventario[4] === "Telefono" && CabeceraInventario[5] === undefined) {

    const data = representante.filter(ins =>
    (
     
      
      
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Sector,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }
 


  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" &&  CabeceraInventario[2] === "Apellido" &&  CabeceraInventario[3] === "Cedula" && CabeceraInventario[4] === "Telefono" && CabeceraInventario[5] === "Sector" && CabeceraInventario[6] === undefined) {

    const data = representante.filter(ins =>
    (
     
      
      
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }


  
  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" &&  CabeceraInventario[2] === "Cedula" && CabeceraInventario[3] === undefined) {

    const data = representante.filter(ins =>
    (
      delete ins.Apellido,
      delete ins.Telefono,
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Sector,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }


  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" &&  CabeceraInventario[2] === "Telefono" && CabeceraInventario[3] === undefined) {

    const data = representante.filter(ins =>
    (
      delete ins.Apellido,
      delete ins.Cedula,
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Sector,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }


  if (filtrarpor==="Representante" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre" &&  CabeceraInventario[2] === "Sector" && CabeceraInventario[3] === undefined) {

    const data = representante.filter(ins =>
    (
      delete ins.Apellido,
      delete ins.Cedula,
      delete ins.createdAt,
      delete ins.updatedAt,
      delete ins.Id_Audiografia,
      delete ins.Estado,
      delete ins.Municipio,
      delete ins.Telefono,
      delete ins.Calle,
      delete ins.audiografium
      
    )
    )
    setNuevoArray(data)


  }


 //*****************************Matriculaa****************************************** */


 if (filtrarpor==="Matricula" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre"&& CabeceraInventario[2] === undefined) {

  const data = Alumnos.filter(ins =>
  (
    delete ins.Apellido,
    delete ins.Cedula,
    delete ins.createdAt,
    delete ins.updatedAt,
    delete ins.id_audiografia,
    delete ins.id_representante,
    delete ins.id_instrumento,
    delete ins.Edad,
    delete ins.Sexo,
    delete ins.Colegio,
    delete ins.Turno,
    delete ins.Grado,
    delete ins.Enfermedad,
    delete ins.id_modulo,
    delete ins.id_programa,
    delete ins.Representante,
    delete ins.Instrumento,
    delete ins.Modulo,
    delete ins.programa,
    delete ins.id_Modulo,
    delete ins.id_Audiografia
  )
  )
  setNuevoArray(data)


}


if (filtrarpor==="Matricula" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Apellido" && CabeceraInventario[2] === undefined) {

  const data = Alumnos.filter(ins =>
  (
    delete ins.Nombre,
    delete ins.Cedula,
    delete ins.createdAt,
    delete ins.updatedAt,
    delete ins.id_audiografia,
    delete ins.id_representante,
    delete ins.id_instrumento,
    delete ins.Edad,
    delete ins.Sexo,
    delete ins.Colegio,
    delete ins.Turno,
    delete ins.Grado,
    delete ins.Enfermedad,
    delete ins.id_modulo,
    delete ins.id_programa,
    delete ins.Representante,
    delete ins.Instrumento,
    delete ins.Modulo,
    delete ins.programa,
    delete ins.id_Modulo,
    delete ins.id_Audiografia
  )
  )
  setNuevoArray(data)


}


if (filtrarpor==="Matricula" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Cedula"&& CabeceraInventario[2] === undefined) {

  const data = Alumnos.filter(ins =>
  (
    delete ins.Apellido,
    delete ins.Nombre,
    delete ins.createdAt,
    delete ins.updatedAt,
    delete ins.id_audiografia,
    delete ins.id_representante,
    delete ins.id_instrumento,
    delete ins.Edad,
    delete ins.Sexo,
    delete ins.Colegio,
    delete ins.Turno,
    delete ins.Grado,
    delete ins.Enfermedad,
    delete ins.id_modulo,
    delete ins.id_programa,
    delete ins.Representante,
    delete ins.Instrumento,
    delete ins.Modulo,
    delete ins.programa,
    delete ins.id_Modulo,
    delete ins.id_Audiografia
  )
  )
  setNuevoArray(data)


}



if (filtrarpor==="Matricula" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Edad"&& CabeceraInventario[2] === undefined) {

  const data = Alumnos.filter(ins =>
  (
    delete ins.Apellido,
    delete ins.Cedula,
    delete ins.createdAt,
    delete ins.updatedAt,
    delete ins.id_audiografia,
    delete ins.id_representante,
    delete ins.id_instrumento,
    delete ins.Nombre,
    delete ins.Sexo,
    delete ins.Colegio,
    delete ins.Turno,
    delete ins.Grado,
    delete ins.Enfermedad,
    delete ins.id_modulo,
    delete ins.id_programa,
    delete ins.Representante,
    delete ins.Instrumento,
    delete ins.Modulo,
    delete ins.programa,
    delete ins.id_Modulo,
    delete ins.id_Audiografia
  )
  )
  setNuevoArray(data)


}


if (filtrarpor==="Matricula" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Programa"&& CabeceraInventario[2] === undefined) {

  const data = Alumnos.filter(ins =>
  (
    delete ins.Apellido,
    delete ins.Cedula,
    delete ins.createdAt,
    delete ins.updatedAt,
    delete ins.id_audiografia,
    delete ins.id_representante,
    delete ins.id_instrumento,
    delete ins.Edad,
    delete ins.Sexo,
    delete ins.Colegio,
    delete ins.Turno,
    delete ins.Grado,
    delete ins.Enfermedad,
    delete ins.id_modulo,
    delete ins.id_programa,
    delete ins.Representante,
    delete ins.Instrumento,
    delete ins.Modulo,
    delete ins.Nombre,
    delete ins.id_Modulo,
    delete ins.id_Audiografia
  )
  )
  setNuevoArray(data[0].programa.Nombre)


}


if (filtrarpor==="Matricula" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Instrumento"&& CabeceraInventario[2] === undefined) {

  const data = Alumnos.filter(ins =>
  (
    delete ins.Apellido,
    delete ins.Cedula,
    delete ins.createdAt,
    delete ins.updatedAt,
    delete ins.id_audiografia,
    delete ins.id_representante,
    delete ins.Nombre,
    delete ins.Edad,
    delete ins.Sexo,
    delete ins.Colegio,
    delete ins.Turno,
    delete ins.Grado,
    delete ins.Enfermedad,
    delete ins.id_modulo,
    delete ins.id_programa,
    delete ins.Representante,
    delete ins.Modulo,
    delete ins.programa,
    delete ins.id_Modulo,
    delete ins.id_Audiografia
  )
  )
 
    const r= data.filter(d=>d.Instrumento!==null)
   
    setNuevoArray(r)
    
}



if (filtrarpor==="Matricula" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre"&& CabeceraInventario[2] === "Apellido"&& CabeceraInventario[3] === undefined) {

  const data = Alumnos.filter(ins =>
  (
    
    delete ins.Cedula,
    delete ins.createdAt,
    delete ins.updatedAt,
    delete ins.id_audiografia,
    delete ins.id_representante,
    delete ins.id_instrumento,
    delete ins.Edad,
    delete ins.Sexo,
    delete ins.Colegio,
    delete ins.Turno,
    delete ins.Grado,
    delete ins.Enfermedad,
    delete ins.id_modulo,
    delete ins.id_programa,
    delete ins.Representante,
    delete ins.Instrumento,
    delete ins.Modulo,
    delete ins.programa,
    delete ins.id_Modulo,
    delete ins.id_Audiografia
  )
  )
  setNuevoArray(data)


}




if (filtrarpor==="Matricula" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre"&& CabeceraInventario[2] === "Apellido"&& CabeceraInventario[3] === "Cedula"&& CabeceraInventario[4] === undefined) {

  const data = Alumnos.filter(ins =>
  (
    
    
    delete ins.createdAt,
    delete ins.updatedAt,
    delete ins.id_audiografia,
    delete ins.id_representante,
    delete ins.id_instrumento,
    delete ins.Edad,
    delete ins.Sexo,
    delete ins.Colegio,
    delete ins.Turno,
    delete ins.Grado,
    delete ins.Enfermedad,
    delete ins.id_modulo,
    delete ins.id_programa,
    delete ins.Representante,
    delete ins.Instrumento,
    delete ins.Modulo,
    delete ins.programa,
    delete ins.id_Modulo,
    delete ins.id_Audiografia
  )
  )
  setNuevoArray(data)


}


if (filtrarpor==="Matricula" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre"&& CabeceraInventario[2] === "Apellido"&& CabeceraInventario[3] === "Cedula"&& CabeceraInventario[4] === "Edad"&& CabeceraInventario[5] === undefined) {

  const data = Alumnos.filter(ins =>
  (
    
    
    delete ins.createdAt,
    delete ins.updatedAt,
    delete ins.id_audiografia,
    delete ins.id_representante,
    delete ins.id_instrumento,
    delete ins.Sexo,
    delete ins.Colegio,
    delete ins.Turno,
    delete ins.Grado,
    delete ins.Enfermedad,
    delete ins.id_modulo,
    delete ins.id_programa,
    delete ins.Representante,
    delete ins.Instrumento,
    delete ins.Modulo,
    delete ins.programa,
    delete ins.id_Modulo,
    delete ins.id_Audiografia
  )
  )
  setNuevoArray(data)


}


if (filtrarpor==="Matricula" &&  CabeceraInventario[0] === "" && CabeceraInventario[1] === "Nombre"&& CabeceraInventario[2] === "Apellido"&& CabeceraInventario[3] === "Cedula"&& CabeceraInventario[4] === "Edad"&& CabeceraInventario[5] === "Programa"&& CabeceraInventario[6] === undefined) {

  const data = Alumnos.filter(ins =>
  (
    
    
    delete ins.createdAt,
    delete ins.updatedAt,
    delete ins.id_audiografia,
    delete ins.id_representante,
    delete ins.id_instrumento,
    delete ins.Sexo,
    delete ins.Colegio,
    delete ins.Turno,
    delete ins.Grado,
    delete ins.Enfermedad,
    delete ins.id_modulo,
    delete ins.id_programa,
    delete ins.Representante,
    delete ins.Instrumento,
    delete ins.Modulo,
    delete ins.id_Modulo,
    delete ins.id_Audiografia
  )
  )
  setNuevoArray(data)


}

  console.log(CabeceraInventario)
    /*let wb = XLSX.utils.book_new()
    let ws = XLSX.utils.json_to_sheet(nuevoarray)

    XLSX.utils.book_append_sheet(wb, ws, "Mihoja")

    XLSX.writeFile(wb, "MYExcel.xlsx") */



  }



  const BuscarPintar = (va) => {
    setValor(va)
    setFiltrarpor(va)

    if (va === "") {
      setAlumnos(alumnospor)
    }


  }



  const handleOnChange = (e) => {

    setSeleccionado({
      ...seleccionado,
      [e.target.value]: e.target.checked,
    })
    if (e.target.checked) {
      if (e.target.value === "Nombre" || "Codigo" || "Marca" || "Tamaño" || "Estado") {
       


        setCabeceraInventario([...CabeceraInventario,e.target.value])


      }

    } else if (e.target.checked === false) {

      const filtredData = CabeceraInventario.filter(item => item !== e.target.value)
      setCabeceraInventario(filtredData)
    }


  }



  const verificarModulo=(e)=>{
    
    if (e.target.checked) {
      setSelecionModulo(e.target.value)
      
    } else if (e.target.checked === false) {
       setSelecionModulo("")
    }
  }


  return (
    <div className="container-reporte">
      <div className="cabeza">
        <div className="top">
          <button id="menu-btn">
            <span className="material-icons-sharp"> menu</span>
          </button>
          <div className="theme-toggler" onClick={Manejador}>
            <span className="material-icons-sharp active"> light_mode</span>
            <span className="material-icons-sharp"> dark_mode</span>
          </div>
          <div className="profilee">
            <div className="info">
              <p>

                Hey,
              </p>
              <small className="text-muted"></small>
            </div>
            <div className="profile-photo">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <h3>Generar Reportes de:</h3>


      <div className='contenedor-opcion'>


        <select name="" id="" onChange={(e) => BuscarPintar(e.target.value)}>
          <option value="">Selecciona</option>
          <option value="Inventario">Inventario</option>
          <option value="Representante">Representante</option>
          <option value="Matricula">Matricula</option>
          <option value="Modulo">Modulo</option>
        </select>




        {
          valor === "Inventario" && <label htmlFor="" >
            <label htmlFor="" >
              <label htmlFor="" >

                <input
                  type="checkbox"
                  value="Nombre"
                  id='Nombre'
                  onChange={handleOnChange} />
                Nombre
              </label>
              <label htmlFor="">

                <input type="checkbox" value="Codigo" onChange={handleOnChange} />
                Codigo
              </label>
              <label htmlFor="">

                <input type="checkbox" value="Marca" onChange={handleOnChange} />
                Marca
              </label>
              <label htmlFor="">

                <input type="checkbox" value="Tamaño" onChange={handleOnChange} />
                Tamaño
              </label>
              <label htmlFor="">

                <input type="checkbox" value="Estado" onChange={handleOnChange} />
                Estado
              </label>
            </label>
          </label>
        }

        {
          valor === "Representante" && <label htmlFor="">
            <label htmlFor="">

              <input type="checkbox" value="Nombre" onChange={handleOnChange} />
              Nombre
            </label>
            <label htmlFor="">

              <input type="checkbox" value="Apellido" onChange={handleOnChange} />
              Apellido
            </label>
            <label htmlFor="">

              <input type="checkbox" value="Cedula" onChange={handleOnChange} />
              Cedula
            </label>
            <label htmlFor="">

              <input type="checkbox" value="Telefono" onChange={handleOnChange} />
              Telefono
            </label>
            <label htmlFor="">

              <input type="checkbox" value="Sector" onChange={handleOnChange} />
              Sector
            </label>
          </label>
        }
        {
          valor === "Matricula" && <label htmlFor="">
            <label htmlFor="">

              <input type="checkbox" value="Nombre" onChange={handleOnChange} />
              Nombre
            </label>
            <label htmlFor="">

              <input type="checkbox" value="Apellido" onChange={handleOnChange} />
              Apellido
            </label>
            <label htmlFor="">

              <input type="checkbox" value="Cedula" onChange={handleOnChange} />
              Cedula
            </label>
            <label htmlFor="">

              <input type="checkbox" value="Edad" onChange={handleOnChange} />
              Edad
            </label>
            <label htmlFor="">

              <input type="checkbox" value="Programa" onChange={handleOnChange} />
              Programa
            </label>
            <label htmlFor="">

              <input type="checkbox" value="Instrumento" onChange={handleOnChange} />
              Instrumento
            </label>
          </label>

        }
        {
          valor === "Modulo" && <select name="" id="" onChange={(e)=>setModulo(e.target.value)}>

            <option value="">Seleccione</option>
            <option value="San Jose"> San Jose </option>
            <option value="Pueblo Nuevo"> Pueblo Nuevo</option>
            <option value="Mato">Mato</option>
            <option value="Cumbo">Cumbo</option>
          </select>
        }

        {
          valor === "Modulo" && Modulo!=="" &&<label htmlFor="">
            <label htmlFor="">

              <input type="checkbox" value="Representante" onChange={verificarModulo} />
              Representante
            </label>
            <label htmlFor="">

              <input type="checkbox" value="Inventario" onChange={verificarModulo}/>
              Inventario
            </label>
            <label htmlFor="">

              <input type="checkbox" value="Matricula" onChange={verificarModulo}/>
              Matricula
            </label>

          </label>
        }

      </div>
      <div className="contenedor-registro">
        <table>
          <tbody>


            {
              <Tabla cabecera={CabeceraInventario} SelecionModulo={SelecionModulo} setCabeceraInventario={setCabeceraInventario} Modulo={Modulo} setValorExport={setValorExport} instrumentos={instrumentos} filtro={filtrarpor} representantes={representante} alumnos={Alumnos}></Tabla>

            }




          </tbody>
        </table>
        <button onClick={(e) => { HangleOnExel() }}>Generar reporte</button>

      </div>


    </div>
  )
}

export default Reporte
