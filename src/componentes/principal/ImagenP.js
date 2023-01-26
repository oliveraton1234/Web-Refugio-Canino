import Carousel from 'react-bootstrap/Carousel';

const ImagenP = () => {
    return (
        <div className='carrousell'>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/imagenes/perro6.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/imagenes/perro7.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/imagenes/perro8.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default ImagenP;