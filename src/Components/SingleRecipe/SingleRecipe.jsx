import React from 'react'
import './singlerecipe.css'

function SingleRecipe() {
  return (
    <div>
      <div className="container-fluid">
        <h1 className='text-center singlerec-title'>Pastafrola</h1>
        <div className="row">
          <div className="col-md-6">
            <img src="src/assets/pastafrolawebp.webp" className="img-fluid singlerec-image" alt="Pastafrola" />
          </div>
          <div className="col-md-6 singlerec-info">
            <p className="fa-solid fa-user-group"> 4 Personas</p>
            <p className="fa-regular fa-clock card-text rec-icons"> 45 min</p>
            <p className='fa-solid fa-signal'> Facil</p>
          </div>
        </div>
      </div>
       <div className='container singlerec-ingr'>
       <hr  class="border border-danger border-2 opacity-50"/>
        <h3> Ingredientes</h3>
            <ul>
                <li>2 Tazas de harina</li>
                <li>1 Taza de azúcar</li>
                <li>2 huevos</li>
                <li>100 gramos de manteca</li>
                <li>1 cucharadita de esencia de vainilla (opcional)</li>
                <li>400 gramos de dulce de membrillo/batata</li>
            </ul>
            <hr  class="border border-danger border-2 opacity-50"/>
       </div>
        <div className='container'>
            <p>
                1- Mezclamos en un bol la manteca derretida con el azúcar. Incorporamos los huevos uno a uno y vamos agregando la harina (y la escencia de vainilla) poco a poco.
            </p>
            <p>
                2- Volcamos la masa en una superfice con harina y amasamos hasta obtener una masa blanda. Envolvemos en papel film, y dejamos reposar en la heladera/nevera por 30 minutos mas o menos.
            </p>
            <p>
                3- Una vez cumplido el tiempo, retiramos la masa y dejamos que tome la temperatura ambiente. Engrasamos o aceitamos el molde para horno. Comenzamos a extender la masa con las manos, haciendo la base para la pastafrola.
            </p>
            <p>
                4- Cortamos el dulce de membrillo/batata en trocitos, lo colocamos en una cacerola con agua caliente y lo aplastamos hasta que se ablande todo y conseguir la textura deseada.
            </p>
            <p>
                5- Añadimos el membrillo sobre la base de masa y esparcimos bien hasta cubrir la superficie. Cubrimos todo con las tiritas de masa para decorar.
            </p>
            <p>
                6- Lo llevamos al horno a una temperatura media de 180 C durante 45 minutos.
            </p>
            <p>
                7- A disfrutar!
            </p>
        </div>
    </div>
  )
}

export default SingleRecipe