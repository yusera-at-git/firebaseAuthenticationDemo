import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext'
const Home =()=>{
    const {signOut}= useContext(AuthContext);
    return(
        <View>
            <Text>
                Home Screen
            </Text>
            <Button title= 'signOut' onPress={signOut}/>
        </View>
    )
}

export default Home;