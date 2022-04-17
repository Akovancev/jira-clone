import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import InputFields from '../../components/InputFields/InputFields';
import { Link } from 'react-router-dom';
import { SIGN_UP_PATH } from '../../core/constants/routes';
import YarnFormHeader from '../../components/YarnFormHeader/YarnFormHeader';

const style = {
    marginTop: 20,
}

const linkStyle = {
    textDecoration: 'none',
}

function CustomForm() {
    const config = [
        {
            label: 'Логин',
            name: 'login',
        },
        {
            label: 'Пароль',
            name: 'password',
            type: 'password',
        },
    ]

    return (
        <Form>
            <InputFields config={config} />
            <Button style={style} variant='contained' fullWidth>
                Войти
            </Button>
            <Typography style={style}>
                Еще нет аккаунта?&nbsp;
                <Link style={linkStyle} to={SIGN_UP_PATH}>
                    Зарегистрироваться
                </Link>
            </Typography>  
        </Form>
    )
}

export default function SignInPage() {
    return (
        <Container maxWidth="sm">
            <YarnFormHeader label="Вход" />
            <Formik>
                {() => <CustomForm />}
            </Formik>
        </Container>
    )
}