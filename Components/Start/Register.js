import React from 'react';
import {
    NativeBaseProvider,
    Center,
    Box,
    Text,
    Button,
    Heading,
} from 'native-base'
import { Link, useNavigate, } from 'react-router-native';

const Register = () => {
    const navigate = useNavigate();

    const navigateFormRegister = () => {
        navigate('/Register/FormRegister');
    }

    return (
        <Box>
            <Center>
                <Heading color="primary.500" fontSize="3xl">¿Eres Conductor?</Heading>
                <Text mt="3" width="80%" textAlign="center" color="primary.700">¿Eres conductor, tienes vehiculo pero no tienes trabajo?</Text>
                <Button
                    bg="primary.500"
                    mt="2"
                    size="lg"
                    onPress={() => { navigateFormRegister() }}
                >
                    CREA NUEVA CUENTA
                </Button>
                <Text mt="3" width="80%" textAlign="center" color="primary.700">Y empieza ahora mismo!</Text>
            </Center>
            
            
        </Box>
    );
}

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <Register />
            </Center>
            <Center mb="4">
                <Text fontSize="lg" color="primary.500">¿Ya tienes Cuenta?</Text>
                <Link to="/Login">
                    <Text fontSize="xl" underline color="primary.600">
                        Ingresa Aquí
                    </Text>
                </Link>
            </Center>
        </NativeBaseProvider>
    );
};
