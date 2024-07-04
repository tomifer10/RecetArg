import React from 'react'
import './footer.css'

function Footer() {
  return (
<div className='vision'>
<footer className=' text-dark pt-5 pb-4 footer-backg'>
    <div className='container-fluid text-center text-md-start backg'>
        <div className='row text-center text-md-start '>
        
            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>

                <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Nosotros</h5>
                <hr className='mb-4' />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quam aperiam perspiciatis architecto cum voluptatem asperiores vero maiores reiciendis voluptate pariatur ratione ex sit illum, earum explicabo tenetur nihil necessitatibus.
                </p>

            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Dejanos ayudarte</h5>
            <hr className='mb-4' />
            <p>
                <a href="#" className='text-dark'> Tu cuenta</a>
            </p>
            <p>
                <a href="#" className='text-dark'> Tus recetas</a>
            </p>
            <p>
                <a href="#" className='text-dark'> Ayuda</a>
            </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Contacto</h5>
            <hr className='mb-4' />
            <p>
                <li className='fas fa-home me-3'> Barcelona</li>
            </p>
            <p>
                <li className='fas fa-envelope me-3'> rctarg</li>
            </p>
            <p>
                <li className='fas fa-phone me-3'> 4486084</li>
            </p>
            <p>
                <li className='fas fa-print me-3'> 4486084</li>
            </p>
            </div>

            <hr className='mb-4'/>
            <div className='text-center mb-2'>
                <p>Copyright Todos los derechos reservados
                    <a href="#" className='text-primary'> Test</a>
                </p>

            </div>

            <div className='text-center'>
                <ul className='list_unlysted list-inline'>
                    <li className='list-inline-item'>
                        <a href="#" className='text-dark'> <i className='fab fa-facebook'></i></a>
                    </li>
                    <li className='list-inline-item'>
                        <a href="#" className='text-dark'> <i className='fab fa-twitter'></i></a>
                    </li>
                    <li className='list-inline-item'>
                        <a href="#" className='text-dark'> <i className='fab fa-google-plus'></i></a>
                    </li>
                    <li className='list-inline-item'>
                        <a href="#" className='text-dark'> <i className='fab fa-linkedin-in'></i></a>
                    </li>
                    <li className='list-inline-item'>
                        <a href="#" className='text-dark'> <i className='fab fa-youtube'></i></a>
                    </li>

                </ul>
            </div>



        </div>

    </div>

</footer>
</div>
  )
}

export default Footer