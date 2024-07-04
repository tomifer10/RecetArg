import React from 'react'
import './tradicontent.css'

function TradiContent() {
  return (
    <div className='container-fluid backg'>
      <div className='row align-items-center mb-4 '>
        <div className='col-md-6'>
          <img src="src/assets/mate1.webp" alt="Welcome Image" className="img-fluid" />
        </div>
        <div className='col-md-6'>
          <h1>Historia del Mate</h1>
          <p>
            La yerba mate, cuyo nombre científico es Ilex Paraguariensis, es un árbol nativo de la Selva Paranaense, que en estado silvestre puede alcanzar una altura de entre 12 y 16 metros. Para facilitar su cosecha, las plantas son podadas hasta dos veces al año a una altura promedio de 2 metros.
            En la Argentina, llamamos mate a la infusión que se prepara con sus hojas, como también al recipiente donde se la toma, siendo el más utilizado el de calabaza.
          </p>
        </div>
      </div>
      <div className='row align-items-center mb-4 '>
        <div className='col-md-6 order-md-2'>
          <img src="src/assets/mate2.webp" alt="Welcome Image" className="img-fluid" />
        </div>
        <div className='col-md-6 order-md-1'>
          <p>
            Su origen se remonta a los pueblos guaraníes, que utilizaban las hojas del árbol como bebida, objeto de culto y moneda de cambio. Durante las largas travesías por la selva, los conquistadores españoles notaron que los guaraníes tenían mayor resistencia luego de tomar esta bebida sagrada.
            Más tarde, los jesuitas introdujeron el cultivo en las reducciones y contribuyeron a su difusión y comercialización, al punto tal de que la infusión se hizo conocida entonces como té de los jesuitas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TradiContent