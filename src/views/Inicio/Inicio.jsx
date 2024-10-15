import React from 'react'
import "./Inicio.css"
function Inicio({Manejador}) {
  return (
    <div className='container-inicio'>
    <main>
      <h2>INICIO</h2>
     
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

      <div className="recent-order">
          <h3>Ultimos Alumnos Registrados</h3>
          <table>
              <thead>
                  <tr>
                      <th>Nombre</th>
                      <th>Apellidos</th>
                      <th>Edad</th>
                      <th>Instrumento</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Foldable Mini Drone</td>
                      <td>85331</td>
                      <td>Due</td>
                      <td>Due</td>
                      <td className="primary">Datale</td>
                  </tr>
                  <tr>
                      <td>Foldable Mini Drone</td>
                      <td>85331</td>
                      <td>Due</td>
                      <td>Due</td>
                      <td className="primary">Datale</td>
                  </tr>
                  <tr>
                      <td>Foldable Mini Drone</td>
                      <td>85331</td>
                      <td>Due</td>
                      <td>Due</td>
                      <td className="primary">Datale</td>
                  </tr>
                  <tr>
                      <td>Foldable Mini Drone</td>
                      <td>85331</td>
                      <td>Due</td>
                      <td>Due</td>
                      <td className="primary">Datale</td>
                  </tr>
                 
                 
              </tbody>
          </table>
          <a href="#">Show all</a>
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
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Inicio
