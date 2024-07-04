import React from 'react'

function ChipaRecipe() {
  return (
    <div>
    <div className="container-fluid">
      <h1 className='text-center singlerec-title'>Chipá</h1>
      <div className="row">
        <div className="col-md-6">
          <img src="src/assets/chipacitos.webp" className="img-fluid singlerec-image" alt="Chipa" />
        </div>
        <div className="col-md-6 singlerec-info">
          <p className="fa-solid fa-user-group"> 4 Personas</p>
          <p className="fa-regular fa-clock card-text rec-icons"> 30 min</p>
          <p className='fa-solid fa-signal'> Facil</p>
        </div>
      </div>
    </div>
     <div className='container singlerec-ingr'>
     <hr  class="border border-danger border-2 opacity-50"/>
      <h3> Ingredientes</h3>
          <ul>
              <li>1/2 Taza de leche</li>
              <li>1/2 Taza de agua</li>
              <li>1/4 taza de aceite de maiz/girasol</li>
              <li>1 taza de fécula de mandioca</li>
              <li>1 cucharada de sal</li>
              <li>1 huevo</li>
              <li>150 gramos de queso rallado</li>
          </ul>
          <hr  class="border border-danger border-2 opacity-50"/>
     </div>
      <div className='container'>
          <p>
              1- Precalentamos el horno a 180.
          </p>
          <p>
              2- Llevar a ebullicion en una olla el agua junto con la leche, sal y aceite. Cuando hierva, retiramos del fuego y agregamos la harina y la fecula de mandioca. Se formara una masa espesa.
          </p>
          <p>
              3- Dejamos enfriar e incorporamos el huevo. Volvera a espesarse la mezcla, pero seguimos mezclando.
          </p>
          <p>
              4- Añadimos el queso rallado y mezclamos hasta que todo este unido de forma homogenea.
          </p>
          <p>
              5- Nos untamos las manos en aceite para hacer las bolitas. Las formamos del tamaño que nos guste.
          </p>
          <p>
              6- Colocamos todo en la bandeja para horno, respetando el espacio de separacion para evitar que se peguen cuando crezcan.
          </p>
          <p>
              7- Horneamos durante 20-25 min o hasta que se doren.
          </p>
          <p>
            8- A disfrutar!
          </p>
      </div>
  </div>
  )
}

export default ChipaRecipe