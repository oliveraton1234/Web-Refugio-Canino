import NavegacionU from "./NavegacionU";
import './Requisitos.css'

const RequisitosU = () =>{
    return(
        <>
            <NavegacionU/>
            <img alt="principal" className="Reqp" src="/imagenes/RequisitoD.jpg" />
            <p className="Contenedor1">
                <p className="Titulo1">Requisitos</p>
            </p>

            <div className="texto1">
                <p className="p1"> <img alt="check" className="check" src="/imagenes/Garrapata.png"/>Rellenar y enviar el fromulario de citas.</p>             
                <p className="p1"> <img alt="check" className="check" src="/imagenes/Garrapata.png"/>Esperar nuestra llamada.</p>
                <p className="p1"> <img alt="check" className="check" src="/imagenes/Garrapata.png"/>Visitar nuestro centro en las fechas acordadas.</p>
                <p className="p1"> <img alt="check" className="check" src="/imagenes/Garrapata.png"/>Comprobante de domicilio no mayor a 3 meses (original y copia).</p>
                <p className="p1"> <img alt="check" className="check" src="/imagenes/Garrapata.png"/>Donativo de 500 para continuar ayudando.</p>
                <p className="p1"> <img alt="check" className="check" src="/imagenes/Garrapata.png"/>Asistir con correa o transportadora.</p>
                <p className="p1"> <img alt="check" className="check" src="/imagenes/Garrapata.png"/>Aceptar el compromiso legal de cuidado.</p>
                <p className="p1"> <img alt="check" className="check" src="/imagenes/Garrapata.png"/>Esperar nuestra llamada.</p>
                <p className="p1"> <img alt="check" className="check" src="/imagenes/Garrapata.png"/>Cumplir con con las visitas.</p>
            </div>

            <p className="Contenedor2">
                <p className="Titulo2">Compromisos</p>
            </p>

            <div className="texto1">
                <p className="p1"> <img alt="check" className="compromiso" src="/imagenes/compromiso.png"/>El perro debera portar siempre la placa de identificacion.</p>             
                <p className="p1"> <img alt="check" className="compromiso" src="/imagenes/compromiso.png"/>Tener en casa un lugar asignado donde no este a la intemperie directa.</p>
                <p className="p1"> <img alt="check" className="compromiso" src="/imagenes/compromiso.png"/>Proporcionar el alimento adecuado.</p>
                <p className="p1"> <img alt="check" className="compromiso" src="/imagenes/compromiso.png"/>Tener vigilancia medica y visitas periodicas al veterinario.</p>
                
            </div>
        </>
    )
}

export default RequisitosU;