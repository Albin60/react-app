import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {MaterialComunityIcons} from '@expo/vector-icons';

const Icon =(props) => {
    return(
        <View style ={StyleSheet.iconContainer}>
            <View style ={StyleSheet.iconWrapper}>
                <MaterialCommunityIcons name={props.name} size={27} color="#22D4FF"></MaterialCommunityIcons>
            </View>
            <Text style={StyleSheet.iconText}>{props.iconText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor:'#3840',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 50
    },
    iconContainer: {
        alightItems:'center',
        width:60,
        height:60,
    },
    iconText: {
        height:60,
        fontWeight:'600'
    }
});

export default Icon;