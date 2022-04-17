import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PROJECT_PATH, SIGN_IN_PATH } from '../../core/constants/routes';

const styles = {
    marginTop: 200,
}

const buttonStyles = {
    marginTop: 40,
    width: 200,
}

export default function MainPage() {
    const navigate = useNavigate();

    const handleClickButton = path => navigate(path);

    return (
        <Container maxWidth="xl">
            <Typography variant="h1" style={styles}>
                Yard - инструмент разработки для небольших и средних команд
            </Typography>
            <Button 
                size="large"
                style={buttonStyles}
                variant='contained'
                onClick={() => handleClickButton(SIGN_IN_PATH)}
            >
                Войти
            </Button>
            <Button 
                size="large"
                style={{ ...buttonStyles, marginLeft: 20 }}
                variant='contained'
                onClick={() => handleClickButton(PROJECT_PATH)}
            >
                Начать проект
            </Button>
        </Container>
    )
}