import React, { useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { useNavigate } from 'react-router-native';

const Homescreen = () => {
    const navigate = useNavigate();

    const Navigation = () => {
        // Nos redirigiremos al Register
        navigate('/Register');
    }

    useEffect(() => {
        Navigation();
    }, []);

    return (
        <View>
            
        </View>
    );
}
export default Homescreen;