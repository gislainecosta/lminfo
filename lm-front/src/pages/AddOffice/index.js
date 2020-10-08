import React, { useState } from 'react';

import Context from '../../functions/Context';

import InputText from '../../components/InputText';
import Button from '../../components/Button';

import {
    Container,
    Form,
    Title,
} from './styles';

const AddOffice = () => {
    const [values, setValues] = useState({
        type: '',
        description: '',
    });

    const submitForm = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const sendForm = () =>{
        console.log(values.type, values.description)
    }

    return(
        <Container>
            <Form onSubmit={submitForm}>
                <Title>Adicionar Cargo</Title>
                <InputText 
                    value={values.type}
                    name={'type'}
                    placeholder={'Nome do Cargo'}
                    change={handleChange('type')}
                />
                <InputText 
                    value={values.description}
                    name={'description'}
                    placeholder={'Descrição do Cargo'}
                    change={handleChange('description')}
                />
                <Button click={sendForm} text={'Enviar'}/>
            </Form>
        </Container>
    );
}

export default AddOffice;