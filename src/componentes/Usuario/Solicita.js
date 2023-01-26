import NavegacionU from "./NavegacionU";
import { Form, Input, TextArea, Button, Select, Card } from 'semantic-ui-react'
import './Solicita.css';

const Solicita = () => {

    const genderOptions = [
        { key: 'm', text: 'Masculino', value: 'male' },
        { key: 'f', text: 'Femenino', value: 'female' },
        { key: 'o', text: 'Otro', value: 'other' },
    ]

    return (
        <>
            <NavegacionU />

                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-input-control-first-name'
                                control={Input}
                                label='Nombre(s)'
                                placeholder=''
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                label='Apellido'
                                placeholder=''
                            />
                            <Form.Field
                                control={Select}
                                options={genderOptions}
                                label={{ children: 'Genero', htmlFor: 'form-select-control-gender' }}
                                placeholder=''
                                search
                                searchInput={{ id: 'form-select-control-gender' }}
                            />
                        </Form.Group>
                        <Form.Field
                            id='form-input-control-error-email'
                            control={Input}
                            label='Nuemro de integrantes de la familia'
                            placeholder=''
                        />
                        <Form.Field
                            id='form-input-control-error-email'
                            control={Input}
                            label='Domicilio'
                            placeholder=''
                        />
                        <Form.Field
                            id='form-input-control-error-email'
                            control={Input}
                            label='Sueldo mensual'
                            placeholder=''
                        />
                        <Form.Field
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Razon para adoptar'
                            placeholder=''
                        />
                        <Form.Field
                            id='form-input-control-error-email'
                            control={Input}
                            label='Numero de telefono'
                            placeholder=''
                        />
                        <Form.Field
                            id='form-button-control-public'
                            control={Button}
                            content='Enviar'
                            label=''
                        />
                    </Form>
        </>
    )
}

export default Solicita;