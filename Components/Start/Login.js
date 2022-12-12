import {
    Button,
    Center,
    Checkbox,
    FormControl,
    Heading,
    Input,
    NativeBaseProvider,
    Text,
    VStack,
} from "native-base";
import React, { useState } from "react";
import { Link } from "react-router-native";
import useLocalStorage from '../../Hooks/useLocalStorage';

const Login = () => {
    const [inputMethodIng, setInputMethodIng] = useState("")

    useState(async () => {
        const method = await useLocalStorage.getItem('@methodIng');
        const convMethod = JSON.parse(method);
        if (method) {
            setInputMethodIng(convMethod.number_phone);
        }
        console.log(method);
    }, []);
    const formLogin = () => {
        return (
            <VStack space={3} mt="5" w="90%">
                <Heading color="primary.500" fontSize="4xl" textAlign="center">
                    Bienvenido
                </Heading>
                <Heading fontSize="xl" fontWeight="medium" textAlign="center" mt="-3">
                    Inicia Sesión
                </Heading>

                <FormControl>
                    <FormControl.Label>
                        <Text textAlign="center">
                            Número Telefonico{" "}
                            <Text
                                color="primary.500"
                                fontSize="lg"
                                onPress={() => alert("Es posible ingresar con tu Numero Telefonico, Cedula, y Correo Electronico.")}
                            >
                                (+)
                            </Text>
                        </Text>
                    </FormControl.Label>
                    <Input pl="3" fontSize="lg" defaultValue={inputMethodIng} />
                </FormControl>


                <FormControl>
                    <FormControl.Label>
                        <Text textAlign="center">Contraseña</Text>
                    </FormControl.Label>
                    <Input pl="3" type="password" fontSize="lg" />
                    <Text textAlign="right" mb="-2" fontSize="sm" color="primary.500" italic underline>¿Recuperar Contraseña?</Text>
                </FormControl>

                <Button bg="primary.500" size="lg">
                    Iniciar Sesion
                </Button>
                <Checkbox defaultIsChecked>Recuerdame</Checkbox>
            </VStack>
        );
    };
    return (
        <NativeBaseProvider>
            <Center flex={1}>{formLogin()}</Center>
            <Center mb="4">
                <Text fontSize="lg" color="primary.500">
                    ¿No tienes una Cuenta?
                </Text>
                <Link to="/Login">
                    <Text fontSize="lg" underline color="primary.600">
                        ¡Crea una Cuenta Nueva!
                    </Text>
                </Link>
            </Center>
        </NativeBaseProvider>
    );
};

export default Login;
