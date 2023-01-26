import { Table } from "react-bootstrap";
import NavegacionU from "./NavegacionU";

const VisitasU = () => {
    return(
        <>
            <NavegacionU/>
            <p/>
            <img alt="principal" className="imagenP" src="/imagenes/ImagenPrincipal.jpg" />
            <p/>
            <Table className="tableP">
                <thead>
                    <tr className="titulos">
                        <th>
                            #
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Fecha
                        </th>
                        <th>
                            Descripcion
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Vista programada
                        </td>
                        <td>
                            20/12/2022
                        </td>
                        <td>
                            Visita para ver la vivienda del peludo.
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default  VisitasU;