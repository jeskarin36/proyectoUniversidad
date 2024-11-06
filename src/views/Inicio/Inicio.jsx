import React, { useState, useEffect } from 'react';
import "./Inicio.css"
import axios from "axios"

function Inicio({ Manejador }) {

    const URL = "http://localhost:8000/representante/"
    const [representantes, setRepresentantes] = useState([]);

    useEffect(() => {
        getRepresentantes();
    }, [])


    const getRepresentantes = async () => {
        const res = await axios.get(URL)
        setRepresentantes(res.data)
        
    }
  
    const deleteRepresentantes = async (id) => {
       await axios.delete(`${URL}${id}`)
        getRepresentantes();
    }
  

    return (
        <div className='container-inicio'>
            <main>
                

                <div className="insights">
                    <div className="sales">
                        <span className="material-icons-sharp">analytics</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Alumnos</h3>
                                <h2>100</h2>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"> </circle>
                                </svg>
                                <div className="number">
                                    <p>81%</p>
                                </div>
                            </div>

                        </div>
                        <small className="text-muted">Last 24 Hours </small>
                    </div>
                    <div className="expenses">
                        <span className="material-icons-sharp">bar_chart</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Instrumentos</h3>
                                <h2>100</h2>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"> </circle>
                                </svg>
                                <div className="number">
                                    <p>64%</p>
                                </div>
                            </div>

                        </div>
                        <small className="text-muted">Last 24 Hours </small>
                    </div>
                    <div className="income">
                        <span className="material-icons-sharp">stacked_line_chart</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Trabajadores</h3>
                                <h2>43</h2>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"> </circle>
                                </svg>
                                <div className="number">
                                    <p>44%</p>
                                </div>
                            </div>

                        </div>
                        <small className="text-muted">Last 24 Hours </small>
                    </div>
                </div>

            </main>
            <div className="right">
                <div className="top">
                    <button id="menu-btn">
                        <span className="material-icons-sharp"> menu</span>
                    </button>
                    <div className="theme-toggler" onClick={Manejador}>
                        <span className="material-icons-sharp active"> light_mode</span>
                        <span className="material-icons-sharp"> dark_mode</span>
                    </div>
                    <div className="profile">
                        <div className="info">
                            <p>Hey, <b>Daniel</b></p>
                            <small className="text-muted">Admin</small>
                        </div>
                        <div className="profile-photo">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Inicio
