import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import InputFields from '../../components/InputFields/InputFields';
import { Link } from 'react-router-dom';
import { SIGN_IN_PATH } from '../../core/constants/routes';
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
            label: 'Почта',
            name: 'email',
        },
        {
            label: 'Фамилия',
            name: 'surname',
        },
        {
            label: 'Имя',
            name: 'name',
        },
        {
            label: 'Отчетство',
            name: 'patronymic',
        },
        {
            label: 'Пароль',
            name: 'password',
            type: 'password',
        },
        {
            label: 'Повторите пароль',
            name: 'confirmPassword',
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
                Уже есть аккаунт?&nbsp;
                <Link style={linkStyle} to={SIGN_IN_PATH}>
                    Войти
                </Link>
            </Typography>  
        </Form>
    )
}

export default function SignUpPage() {
    return (
        <Container maxWidth="sm">
            <YarnFormHeader label="Регистрация"/>
            <Formik>
                {() => <CustomForm />}
            </Formik>
        </Container>
    )
}