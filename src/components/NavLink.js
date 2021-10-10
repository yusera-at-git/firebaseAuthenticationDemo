import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { useNavigation } from '@react-navigation/native';
const NavLink = (props) => {
    const navigation =useNavigation();
    return(
        <TouchableOpacity onPress={()=>{navigation.navigate(props.routename)}}>
            <Spacer>
                <Text style={Styles.textStyle}>
                    {props.children}
                </Text>
            </Spacer>
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    textStyle:{
        textAlign:'center',
        color:'blue'
    }
});

export default NavLink;