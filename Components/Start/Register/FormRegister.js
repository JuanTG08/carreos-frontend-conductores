import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Icon,
  NativeBaseProvider,
  ScrollView,
  Text,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Link, useNavigate } from "react-router-native";
import Formdataperson from "./FormDataPerson";
import Formdatacar from "./FormDataCar";
import Showdata from "./ShowData";
import { createConductor, getConApiTest } from "../../../api/api";
import AlertView from "../../Layouts/AlertView";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import Endregister from "./EndRegister";

const FormRegister = () => {
  // Datos personales
  const [data, setData] = useState({
    name: false,
    lastname: false,
    phone_1: false,
    phone_2: false,
    phone_3: false,
    password: false,
    cedula: false,
    city: false,
    mail: false,
  });

  const [dataAuto, setDataAuto] = useState({
    photoAutoUrl: false,
    carPlate1: false,
    carPlate2: false,
    weight: false,
    modelAuto: false,
  });

  const [message, setMessage] = useState(false);

  const [redirect, setRedirect] = useState("DataPerson");
  const [acceptTermsAndCond, setAcceptTermsAndCond] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setMessage(false), 5000);
  }, [message]);

  const renderFormulario = () => {
    const setNumber = (e, input, category) => {
      if (category === "person") {
        setData((ant) => {
          return { ...ant, [input]: e.replace(/[^0-9]/g, "") };
        });
      } else {
        setDataAuto((ant) => {
          return { ...ant, [input]: e.replace(/[^0-9]/g, "") };
        });
      }
    };

    const setString = (e, input, category) => {
      // console.log(e+" "+input);
      if (category === "person") {
        setData((ant) => {
          return { ...ant, [input]: e };
        });
      } else {
        setDataAuto((ant) => {
          return { ...ant, [input]: e };
        });
      }
    };

    const setValues = (e, input, type, category) => {
      if (category === "person") {
        if (type === "number") {
          setNumber(e, input, "person");
        }
        if (type === "string") {
          setString(e, input, "person");
        }
      } else if (category === "auto") {
        if (type === "number") {
          setNumber(e, input, "auto");
        } else if (type === "string") {
          if (input === "carPlate2") {
            // console.log(dataAuto);
          }
          setString(e, input, "auto");
        }
      }
    };

    return redirect === "DataPerson" ? (
      <ScrollView maxHeight="100%" width="90%">
        <Formdataperson setValues={setValues} getValues={data} />
      </ScrollView>
    ) : redirect === "DataCar" ? (
      <ScrollView maxHeight="100%" width="90%">
        <Formdatacar setValues={setValues} getValues={dataAuto} />
      </ScrollView>
    ) : redirect === "ShowData" ? (
      <Box maxHeight="100%">
        <Showdata dataPerson={data} dataCar={dataAuto} setAcceptTermsAndCond={setAcceptTermsAndCond} acceptTermsAndCond={acceptTermsAndCond} />
      </Box>
    ) : redirect === "createdCount" ? (
      <Endregister />
    ) : (
      <Text>Error</Text>
    );
  };

  const verifyErrorData = (datos) => {
    let error = false;
    let errorBody = [];
    for (let item in datos) {
      if (
        !datos[item] ||
        datos[item] === false ||
        datos[item].length === 0 ||
        datos[item] === null
      ) {
        error = true;
        errorBody.push(item);
      }
    }
    if (error) {
      return errorBody;
    }
    return null;
  };

  // Se verifica cuando dan al boton si existe los datos personales
  const verifyDataPerson = () => {
    const dataPersonVerify = verifyErrorData(data);

    if (dataPersonVerify === null) {
      setRedirect("DataCar");
    } else {
      setMessage({
        status: "warning",
        title: "Error en los datos Ingresados, por favor no dejar espacios en blanco."
      });
    }
  };

  // Se verifica cuando dan al boton si existe los datos del Auto
  const veryDataAll = () => {
    const dataPersonVerify = verifyErrorData(data);
    const dataCarVerify = verifyErrorData(dataAuto);

    if (dataPersonVerify === null && dataCarVerify === null) {
      setRedirect("ShowData");
    } else {
      setMessage({ status: "warning", title: "Error en los datos Ingresados, por favor no dejar espacios en blanco." })
    }
  };

  // Ultima verificacion y dar lugar a la creacion de la cuenta
  const createAccountAssic = async () => {
    let very = true;
    if (!acceptTermsAndCond) {
      very = false;
      alert("Es necesario acceptar los terminos y condiciones de nuestro aplicativo.");
    }

    if (very) {
      const dataInfo = {
        mail: data.mail,
        password: data.password,
        id_rol: 2,
        name: data.name,
        last_name: data.lastname,
        number_phone: parseInt(data.phone_1 + data.phone_2 + data.phone_3),
        identification_id: data.cedula,
        id_city: data.city,
        placa_car: dataAuto.carPlate1 + " " + dataAuto.carPlate2,
        modelo: dataAuto.modelAuto,
        foto_car: dataAuto.photoAutoUrl,
        peso_max: dataAuto.weight,
      }
      const queryCreateCond = await createConductor(dataInfo);
      console.log(queryCreateCond);
      if (!queryCreateCond.error && queryCreateCond.id > 0) {
        const methodIng = {
          mail: dataInfo.mail,
          number_phone: dataInfo.number_phone,
          identification_id: dataInfo.identification_id,
        }
        useLocalStorage.setItem('@methodIng', JSON.stringify(methodIng));
        setRedirect("createdCount");
      } else if (queryCreateCond.status === 1062) {
        alert("Esta Cuenta ya esta en Uso.")
      } else if (queryCreateCond.status === 422) {
        alert("Error en los datos.");
      }
    }
  }

  const backPage = () => {
    if (redirect === "DataCar") {
      setRedirect("DataPerson");
    } else if (redirect === "ShowData") {
      setRedirect("DataCar");
    }
  }

  const redirectingLogin = (end = false) => {
    if (end) {
      setData(false);
      setDataAuto(false);
      navigate('/Login');
      return true;
    }
    navigate('/Login');
  }

  const buttons = () => {
    return (
      <Box w="90%">
        {redirect === "DataPerson" ? (
          <Button
            size="lg"
            w="100%"
            endIcon={<Icon as={AntDesign} name="right" size="sm" />}
            onPress={() => verifyDataPerson()}
          >
            SIGUIENTE
          </Button>
        ) : (redirect === "DataCar" || redirect === "ShowData") ? (
          <Button.Group>
            <Button
              size="lg"
              bg="emerald.500"
              w="40%"
              startIcon={<Icon as={AntDesign} name="left" size="sm" />}
              onPress={() => backPage()}
            >
              ATRAS
            </Button>
            <Button
              size="lg"
              w="58%"
              endIcon={<Icon as={AntDesign} name="right" size="sm" />}
              onPress={() => redirect === "ShowData" ? createAccountAssic() : veryDataAll()}
            >
              {redirect === "ShowData" ? "FINALIZAR" : "SIGUIENTE"}
            </Button>
          </Button.Group>
        ) : (redirect === 'createdCount') ? (
          <Button
            size="lg"
            w="100%"
            endIcon={<Icon as={AntDesign} name="right" size="sm" />}
            onPress={() => redirectingLogin(true)}
          >
            Iniciar Sesion
          </Button>
        ) : <Text>Error</Text>}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <Center flex="1" mt="8">
        {
          message
            ? <AlertView status={message.status} title={message.title} />
            : ""
        }

        {renderFormulario()}
      </Center>
      <Box>
        <Center mt="3">
          <Divider bg="primary.500" my="2" h="2" w="90%" />
          {buttons()}
          {
            redirect !== "createdCount" ?
              <Text
                fontSize="md"
                color="primary.500"
                textAlign="center"
                marginBottom="2"
                onPress={() => redirectingLogin()}
                underline
              >
                INICIAR SESION
              </Text>
              : ""
          }

        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default FormRegister;
