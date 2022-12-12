import axios from "axios";

const DOMAIN_API = "http://192.168.100.111:";
const PORT_API = 8000;

// Obtenemos la conectividad con el servidor 
export const getConApiTest = async () => {
  const URL = DOMAIN_API + PORT_API + "/test";
  try {
    const response = await axios.get(URL);
    if (response.status === 200) {
        return 200;
    }
  }catch(error) {
    alert("Error de Conexion al Servidor, revisa tu conexion a internet.");
  }
  return 503;
};

export const createConductor = async (data) => {
    const veryConexion = await getConApiTest();
    if (veryConexion === 200) {
        const URL = DOMAIN_API + PORT_API + "/api/users";
        const response = await axios.post(URL, data);
        return response.data;
    }
    return 503;
}
