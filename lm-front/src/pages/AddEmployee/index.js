import React, { useState } from 'react';

import InputText from '../../components/InputText';
import Button from '../../components/Button';

import DropZone from '../../components/DropZone';

import {
    Container,
    Form,
    Title,
    InputNumber,
    DropContainer
} from './styles';

const AddEmpoylee = () => {
    const [values, setValues] = useState({
        name: '',
        surname: '',
        office: '',
        birthDate: '',
        salary: ''
    });

    const submitForm = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const sendForm = () =>{
        console.log(values.birthDate)
    }


    return(
        <Container onSubmit={submitForm}>
            <Title>Adicionar Funcionário</Title>
            <Form>
                <DropContainer>
                    <DropZone />
                </DropContainer>
                <InputText 
                    value={values.type}
                    name={'name'}
                    placeholder={'Nome'}
                    change={handleChange('name')}
                />
                <InputText
                    value={values.type}
                    name={'surname'}
                    placeholder={'Sobrenome'}
                    change={handleChange('surname')}
                />

                <InputNumber
                    value={values.birthDate}
                    label="Data de Nascimento"
                    type="date"
                    variant="filled"
                    onChange={handleChange('birthDate')}
                />
                
                <InputNumber
                    value={values.salary}
                    label="Salário"
                    type="number"
                    variant="filled"
                    onChange={handleChange('salary')}
                />
            </Form>
            <Button click={sendForm} text={'Enviar'} />
        </Container>
        
    );
}

export default AddEmpoylee;