import React from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader
  } from '@coreui/react'
  import {
    CChartLine,
    CChartDoughnut,
    CChartPie,
   
  } from '@coreui/react-chartjs'
const Tablas = () => {
    return (
      <>
        <div className="card">
          <div className="card-header">
            Empresa
          </div>
          <div className="card-body">
            <p>Datos recopilados por el control</p>
            
            <table className="table">
              <thead>
              <tr>
                <th>Representación Gráfica</th>
                <th>Datos</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  
                  <CCard>
        <CCardHeader>
          Contagios
        </CCardHeader>
        <CCardBody>
          <CChartDoughnut
            type="doughnut"
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [40, 20, 80, 10]
              }
            ]}
            labels={['Sospechosos por contacto', 'Sospechosos por síntomas', 'Positivos confirmados', 'Negativos Confirmados']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
                </td>
                <td><span className="h3">Posibles Casos</span></td>
              </tr>

              <tr>
                <td>
                  
                  <CCard>
        <CCardHeader>
          Proyectos
        </CCardHeader>
        <CCardBody>
          <CChartPie
            type="pie"
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [40, 20, 80, 10]
              }
            ]}
            labels={['Proyecto A', 'Proyecto B', 'Proyecto C', 'Proyecto D']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
                </td>
                <td><span className="h3">Registros</span></td>
              </tr>
              <tr>
                <td>
                <CCard>
        <CCardHeader>
          Line Chart
        </CCardHeader>
        <CCardBody>
          <CChartLine
            type="line"
            datasets={[
              {
                label: 'Colaboradores',
                backgroundColor: 'rgb(228,102,81,0.9)',
                data: [36, 35.5, 38, 37, 34, 38, 35]
              },
              {
                label: 'Externos',
                backgroundColor: 'rgb(0,216,255,0.9)',
                data: [39, 35, 36, 35, 36.5, 37, 35]
              }
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels={['Lunes', 'Mártes', 'Miércoles', 'Jueves','Viernes','Sábado', 'Domingo']}
          />
        </CCardBody>
      </CCard>
                </td>
                <td><span className="h3">Temperatura</span></td>
              </tr>
              
              </tbody>
            </table>
          </div>
        </div>
        
       
      </>
    )
  }
  
  export default Tablas