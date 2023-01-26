import Navegacion from "../Navegacion";
import "./Adopcion.css";
import { Segment, Image, Icon, Card } from 'semantic-ui-react'

const Adopcion = () => {
    return (
        <>
            <Navegacion />
            <div className="titu">
                <h1 className="titulo">Trae a casa el amor incondicional </h1>
                <h1 className="titulo">de un perro rescatado.</h1>
            </div>

            <div>
                <Card className="card1">
                    <Image src='./imagenes/adopta2.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Elige la adopcion con nosotros</Card.Header>
                        <Card.Description>
                            Nosotros no peleamos adopciones, estamos convencidos que un perrito fuera de los refugios es un oportunidad de un perrito feliz.
                            <br/>
                            <br/>
                            Te preguntaras ¿Es dificil?.
                            <br/>
                            <br/>
                            La verdad es que no,  los perros como muchos animales domesticos son almas muy nobles, no piden nada y lo dan todo, son seres increibles y seguro que conectas con uno, por eso damos la oportidad de convivir con ellos y cnocerlos un poco mas.
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>

        </>
    )
}

export default Adopcion;