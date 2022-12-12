import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Modal,
  ScrollView,
  Text,
} from "native-base";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Showdata = ({ dataPerson, dataCar, setAcceptTermsAndCond, acceptTermsAndCond }) => {
  const fontSizeH = "md";
  const [acceptTerm, setAcceptTerm] = useState(acceptTermsAndCond);
  const [modalVisible, setModalVisible] = useState(false);

  const showDataPerson = () => {
    console.log(dataCar);
    return (
      <Box alignItems="center" color="black">
        <Text isTruncated fontSize={fontSizeH} maxW="100%">
          Nombre:
          <Text bold> {dataPerson.name + " " + dataPerson.lastname}</Text>
        </Text>
        <Text isTruncated fontSize={fontSizeH} maxW="100%">
          Cedula:
          <Text bold> {dataPerson.cedula}</Text>
        </Text>
        <Text isTruncated fontSize={fontSizeH} maxW="95%">
          Correo:
          <Text bold> {dataPerson.mail}</Text>
        </Text>
        <Text isTruncated fontSize={fontSizeH} maxW="100%">
          Telefono:
          <Text bold>
            {" "}
            {dataPerson.phone_1 +
              " " +
              dataPerson.phone_2 +
              " " +
              dataPerson.phone_3}
          </Text>
        </Text>
        <Text isTruncated fontSize={fontSizeH} maxW="100%">
          Ciudad/Pueblo:
          <Text bold> {dataPerson.city}</Text>
        </Text>
        <Text isTruncated fontSize={fontSizeH} maxW="100%">
          Placa del Vehiculo:
          <Text bold> {dataCar.carPlate1 + " " + dataCar.carPlate2}</Text>
        </Text>
      </Box>
    );
  };

  const terminosCondiciones = () => {
    return (
      <>
        <Modal isOpen={modalVisible} onClose={setModalVisible} size="lg">
          <Modal.Content maxH="sm">
            <Modal.CloseButton />
            <Modal.Header>Terminos y Condiciones</Modal.Header>
            <Modal.Body>
              <ScrollView>
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  facere quaerat, at cumque unde officiis iusto laudantium.
                  Incidunt repellat expedita aspernatur, dolor enim quibusdam ut
                  nobis aut architecto, voluptas quam. Iusto qui at illo
                  repellendus nihil autem? Quidem, corrupti minima. Optio
                  consectetur repellat fugit quod voluptatem veniam, maxime
                  inventore quo ipsam? Id mollitia tenetur quas debitis dolores
                  veniam at voluptatum!
                </Text>
              </ScrollView>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  onPress={() => {
                    setAcceptTerm(true);
                    setAcceptTermsAndCond(true);
                    setModalVisible(false);
                  }}
                >
                  Aceptar
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  };

  return (
    <Box>
      { terminosCondiciones() }
      <Center flex={1}>
        <Box
          borderWidth={4}
          p="5"
          borderRadius={20}
          borderColor="primary.500"
          h="40%"
        >
          <Heading color="primary.500" textAlign="center" mb="2">
            ¡YA CASI ACABAMOS!
          </Heading>
          <ScrollView>{showDataPerson()}</ScrollView>
          <Button
            bg="warning.500"
            mt="2"
            color="white"
            endIcon={ acceptTerm ? <Icon as={AntDesign} name="check" size="sm" /> : <Icon as={AntDesign} name="right" size="sm" /> }
            onPress={() => { setModalVisible(true) }}
            isDisabled={ acceptTerm ? true : false }
            _disabled={{ bg: 'success.300' }}
          >
            Terminos y Condiciones
          </Button>
        </Box>
      </Center>
    </Box>
  );
};
export default Showdata;
