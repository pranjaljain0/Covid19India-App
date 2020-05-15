import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = ({Title,Value,StyleContainer,StyleText}) => {
    return (
        <View style={[StyleContainer,styles.container]}>
            <Text style={[styles.title,StyleText]}>{Title}</Text>
            <Text style={[styles.value,StyleText]}>{Value}</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:'center',
        borderRadius:11,
        margin:7,
        padding:20,
        elevation: 10,
        flexBasis:200,
    },
    title:{
        fontSize:22,
        fontFamily:'Montserrat-Bold',
    },
    value:{
        fontSize:30,
        fontFamily:'wotfard',
    }
})
