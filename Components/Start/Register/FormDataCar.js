import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  Heading,
  Input,
  InputGroup,
  Slider,
  Text,
} from "native-base";
import IconSearch from "./IconSearch.png";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
});

const Formdatacar = ({ setValues, getValues }) => {
  //console.log(getValues.photoAutoUrl);
  const [imageCar, setImageCar] = useState(getValues.photoAutoUrl || false);
  const [pesoMax, setPesoMax] = useState(getValues.weight || 150);
  const [placaAutoString, setPlacaAutoString] = useState(
    getValues.carPlate1 || ""
  );
  const [placaAutoInt, setPlacaAutoInt] = useState(getValues.carPlate2 || "");

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Es necesario acceder a tu galeria de Imagenes");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setImageCar(pickerResult.uri);
  };

  useEffect(() => {
    // Enviamos la informacion de la imagen al FormRegister
    if (imageCar && imageCar.length > 0) {
      setValues(imageCar, "photoAutoUrl", "string", "auto");
    }

    // Enviamos la informacion de la placa del Auto al FormRegister
    if (placaAutoInt.length > 0) {
      setValues(placaAutoInt, "carPlate2", "string", "auto");
    }else {
      setValues(false, "carPlate2", "string", "auto");
    }
    if (placaAutoString.length > 0) {
      setValues(placaAutoString, "carPlate1", "string", "auto");
    }else {
      setValues(false, "carPlate1", "string", "auto");
    }

    // Enviamos la informacion del peso max
    setValues(pesoMax, "weight", "string", "auto");
  }, [imageCar, pesoMax, placaAutoString, placaAutoInt]);

  const setPlacaVehiculo = (e, input) => {
    const pattern = new RegExp("^[A-Z]+$", "i");
    const patternInt = new RegExp("^[0-9]+$");

    if (input === "string") {
      if (pattern.test(e)) {
        setPlacaAutoString(e.toUpperCase());
      }
      if (e === null || e.length === 0) {
        setPlacaAutoString("");
      }
    } else {
      if (patternInt.test(e)) {
        setPlacaAutoInt(e);
      }
      if (e === null || e.length === 0) {
        setPlacaAutoInt("");
      }
    }
  };

  return (
    <View>
      <Heading textAlign="center" color="primary.500" fontSize="2xl">
        Informacion de tu Vehiculo
      </Heading>
      <Divider bg="primary.500" my="2" h="2" />
      <Box p="2">
        <FormControl>
          <FormControl.Label>Foto del Vehiculo</FormControl.Label>
          <Center>
            <Image
              style={styles.logo}
              source={imageCar ? { uri: imageCar } : IconSearch}
              alt="Imagen del Vehiculo"
            />
          </Center>
          <Button mt="2" onPress={openImagePickerAsync}>
            {!imageCar ? "Cargar Imagen" : "Cambiar Imagen"}
          </Button>

          <FormControl.Label mt="2">
            Placa del Vehiculo{" "}
            {placaAutoInt !== "" || placaAutoString !== ""
              ? `( ${placaAutoString} - ${placaAutoInt} )`
              : ""}
          </FormControl.Label>
          <InputGroup textAlign="center" fontSize="lg" InputRightElement>
            <Input
              w="48%"
              placeholder="AAA"
              onChangeText={(e) => setPlacaVehiculo(e, "string")}
              maxLength={3}
              value={placaAutoString}
              variant="underlined"
            />
            <Box w="2%"></Box>
            <Input
              w="48%"
              placeholder="123"
              onChangeText={(e) => setPlacaVehiculo(e, "int")}
              maxLength={3}
              value={placaAutoInt}
              variant="underlined"
            />
          </InputGroup>

          <FormControl.Label mt="2">
            Peso Maximo ( {pesoMax + "Kg"} )
          </FormControl.Label>
          <Slider
            defaultValue={getValues.weight ? getValues.weight : pesoMax}
            w="90%"
            colorScheme="primary.500"
            minValue={50}
            maxValue={1000}
            step={50}
            size="lg"
            onChange={(e) => {
              parseInt(setPesoMax(Math.floor(e)));
            }}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>

          <FormControl.Label mt="2">Modelo del Auto</FormControl.Label>
          <Input
            fontSize="lg"
            textAlign="center"
            onChangeText={(e) => setValues(e, "modelAuto", "string", "auto")}
            value={getValues.modelAuto || ""}
          />
        </FormControl>
      </Box>
    </View>
  );
};

export default Formdatacar;
