import Carousel from 'react-bootstrap/Carousel'
import portada from '../assets/img/banner.png'
import {  NavLink  } from "react-router-dom";




const Home = () => {
 
  return (
    <div>
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={portada}
                />
              </Carousel.Item>
          </Carousel>
          <div id='tarjeta'>
            <NavLink to={'/tipo'} id='chome'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
            </svg>¡Click aquí para mirar nuestra librería! <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
            </svg></NavLink>
          </div>
  </div>
  )
}
export default Home