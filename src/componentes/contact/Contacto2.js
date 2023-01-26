import Navegacion from '../Navegacion';
import './Contacto2.css';


const Contacto2 = () => {
    // let url1="https://www.facebook.com/profile.php?id=100057336314304";
    // let url2="https://www.instagram.com/colitasfelicesdeoaxaca/?hl=es-la";
    // let url3="https://l.instagram.com/?u=https%3A%2F%2Fpaypal.me%2Fcolitasfelicesdeoax&e=ATM_NNAXuzModNHkm_78p1w1_aymulCqgSCyt8GBcSbL9Ih4HDB5MUYWBmNhJIEJd7_hIFedAdSvVaTtpz-ZBA&s=1";
    return (
        <>
            <Navegacion/>
            <div class="imagenes">
                <h3>Grupos asociados</h3>
                <img src="./imagenes/Adop_Queretaro.jpg"/> 
                <img src="./imagenes/Apasdem.jpg"/>
                <img src="./imagenes/El_refugio.jpg"/>
                <img src="./imagenes/Refugio_Alfa.jpg"/>
            </div>
            <div className="Contacto">
                <h2>Contacta con nosotros</h2>
                <h2>Para ustedes y los peludos</h2>
                <img src="./imagenes/Ubicacion.jpg"/>

                <h4>Ubicanos</h4>
                <p>
                    <a href={'https://www.google.com/maps/place/Veterinaria+y+Estética+Canina+"Colitas+Felices"/@17.0230712,-96.7033832,15z/data=!4m5!3m4!1s0x0:0x33da3017323309eb!8m2!3d17.0215761!4d-96.7043562'}>
                        Ortiz de Dominguez 113, Agencia de Policia la Experimental,
                        71236 San Antonio de la Cal, Oax.
                    </a>
                </p>

                <h4>Contacto</h4>
                <p>951-32-06-734</p>

                <h4>Sitios oficiales</h4>
                <a href={'https://www.facebook.com/profile.php?id=100057336314304'} style={{width: '10%', float: 'left'}}><img src="./imagenes/facebook.png"/></a>
                <a href={'https://www.instagram.com/colitasfelicesdeoaxaca/?hl=es-la'} style={{width: '10%', float: 'left'}}><img src="./imagenes/instagram.png"/></a>
                <a href={'https://l.instagram.com/?u=https%3A%2F%2Fpaypal.me%2Fcolitasfelicesdeoax&e=ATM_NNAXuzModNHkm_78p1w1_aymulCqgSCyt8GBcSbL9Ih4HDB5MUYWBmNhJIEJd7_hIFedAdSvVaTtpz-ZBA&s=1'}style={{width: '10%', float: 'left'}}><img src="./imagenes/paypal.png"/></a>  
            </div > 
        </>
    );
}

export default Contacto2;