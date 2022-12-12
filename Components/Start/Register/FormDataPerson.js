import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import {
  Box,
  CheckIcon,
  Divider,
  FormControl,
  Heading,
  Icon,
  Input,
  InputGroup,
  Select,
  Text,
} from "native-base";

const Formdataperson = ({ setValues, getValues }) => {
  return (
    <View>
      <Heading textAlign="center" color="primary.500" fontSize="3xl">
        Crea Tu Cuenta
      </Heading>
      <Divider bg="primary.500" my="2" h="2" />

      <Box p="2">
        <Heading textAlign="center" fontSize="lg" color="warmGray.500" mb="3">
          DATOS PERSONALES
        </Heading>
        <FormControl isRequired>
          <FormControl.Label>
            <Text color="warmGray.500" fontSize="lg">
              Nombre y Apellido
            </Text>
          </FormControl.Label>
          <InputGroup fontSize="lg">
            <Input
              placeholder="Nombre"
              w="49%"
              onChangeText={(e) => setValues(e, "name", "string", "person")}
              value={getValues.name ? getValues.name : ""}
            />
            <Box w="2%"></Box>
            <Input
              placeholder="Apellido"
              w="49%"
              onChangeText={(e) => setValues(e, "lastname", "string", "person")}
              value={getValues.lastname ? getValues.lastname : ""}
            />
          </InputGroup>
        </FormControl>
        <FormControl mt="2" isRequired>
          <FormControl.Label>
            <Text color="warmGray.500" fontSize="lg">
              Numero Telefonico
            </Text>
          </FormControl.Label>
          <InputGroup fontSize="lg">
            <Input
              w="28%"
              maxLength={3}
              type="number"
              keyboardType="numeric"
              onChangeText={(e) => setValues(e, "phone_1", "number", "person")}
              value={getValues.phone_1 ? getValues.phone_1 : ""}
            />
            <Box w="2%"></Box>
            <Input
              w="28%"
              maxLength={3}
              type="number"
              keyboardType="numeric"
              onChangeText={(e) => setValues(e, "phone_2", "number", "person")}
              value={getValues.phone_2 ? getValues.phone_2 : ""}
            />
            <Box w="2%"></Box>
            <Input
              w="38%"
              maxLength={4}
              type="number"
              keyboardType="numeric"
              onChangeText={(e) => setValues(e, "phone_3", "number", "person")}
              value={getValues.phone_3 ? getValues.phone_3 : ""}
            />
          </InputGroup>
        </FormControl>

        <FormControl my="2">
          <FormControl.Label>
            <Text color="warmGray.500" fontSize="lg">
              Correo Electronico
            </Text>
          </FormControl.Label>
          {
            // Verificacion del correo electronico
          }
          <Input
            placeholder="example@example.com"
            w="100%"
            fontSize="lg"
            onChangeText={(e) => setValues(e, "mail", "string", "person")}
            value={getValues.mail ? getValues.mail : ""}
          />
        </FormControl>

        <FormControl mt="2" isRequired>
          <FormControl.Label>
            <Text color="warmGray.500" fontSize="lg">
              Contraseña
            </Text>
          </FormControl.Label>
          <Input
            placeholder="********"
            fontSize="lg"
            type="password"
            onChangeText={(e) => setValues(e, "password", "string", "person")}
            value={getValues.password ? getValues.password : ""}
          />
        </FormControl>

        <FormControl mt="2" isRequired>
          <FormControl.Label>
            <Text color="warmGray.500" fontSize="lg">
              Cedula de Ciudadania
            </Text>
          </FormControl.Label>
          <Input
            w="100%"
            fontSize="lg"
            keyboardType="numeric"
            onChangeText={(e) => setValues(e, "cedula", "number", "person")}
            value={getValues.cedula ? getValues.cedula : ""}
          />
        </FormControl>

        {
          // Configuracion de la ciudad de residencia !!!!!!!!!!!!
        }

        <FormControl mt="2" isRequired>
          <FormControl.Label>
            <Text color="warmGray.500" fontSize="lg">
              Ciudad de Residencia
            </Text>
          </FormControl.Label>
          <Select
            selectedValue={getValues.city ? getValues.city : ""}
            w="100%"
            accessibilityLabel="Ciudad de Residencia"
            placeholder="Ciudad de Residencia"
            fontSize="lg"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            onValueChange={(e) => setValues(e, "city", "string", "person")}
          >
            <Select.Item label="Guaduas" value="1" key={1} />
            <Select.Item label="Villeta" value="2" key={2} />
          </Select>
        </FormControl>
      </Box>
    </View>
  );
};
export default Formdataperson;
