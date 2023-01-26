import Card from 'react-bootstrap/Card';

const CuerpoP = () => {
    return(
        <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="Justify" src="/imagenes/mision.png" style={{ width: '50%', margin: 'auto'}} />
        <Card.Body>
          <Card.Title>Mision</Card.Title>
          <Card.Text>
          Creemos en el gran impacto que tiene nuestro 
          trabajo y asi llegar a erradicar organismos como el nuestro que en realidad no deberían de existir.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/imagenes/vision.png" style={{ width: '60%', margin: 'auto' }} />
        <Card.Body>
          <Card.Title>Vision</Card.Title>
          <Card.Text>
          Llegar a la mayor cantidad de animales y personas, concientizandolas y capacitandolas 
          para asi llegar a nuestra mision.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/imagenes/somos.png" style={{ width: '60%', margin: 'auto' }} />
        <Card.Body>
          <Card.Title>¿Quienes somos?</Card.Title>
          <Card.Text>
            Somos una organizacion sin fines de lucro, creada por voluntarios con las puertas abiertos a mas 
            para llegar a nuestra mision.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>


    );
}

export default CuerpoP;
