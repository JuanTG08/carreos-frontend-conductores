import React from 'react';
import {View} from 'react-native';
import { Link } from 'react-router-native';

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <Link to='/login'><Text>Login</Text></Link>
        </View>
    );
}

export default Home;
