import { Text } from 'react-native';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import Home from './Components/Home';
import Login from './Components/Start/Login'
import Register from './Components/Start/Register'
import FormRegister from './Components/Start/Register/FormRegister';
import Homescreen from './HomeScreen';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path='/' element={<Homescreen />}>
          <Route path='Home' element={<Home />} />
        </Route>


        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Register/FormRegister' element={<FormRegister />} />
      </Routes>
    </NativeRouter>
  );
}