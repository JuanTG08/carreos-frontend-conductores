import { Box, Divider, Text } from "native-base";
import React from "react";

const Endregister = () => {
  return (
    <Box width="90%" mt="-5">
      <Text fontSize="3xl" textAlign="center" color="primary.500">
        Cuenta Creada Satisfactoriamente!
      </Text>
      <Divider bg="primary.500" h="2" />

      <Text textAlign="center" mt="3" fontSize="lg">
        Ingresa con tu Numero Celular, o tu numero de Cedula, o con tu Correo Electronico
      </Text>
    </Box>
  );
};
export default Endregister;
