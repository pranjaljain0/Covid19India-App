import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({Title}) => {
    return (
        <View style={styles.container}>
            <Text><Text style={styles.headerTitle}>COVID19</Text><Text style={styles.India}>INDIA</Text></Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1e1e30',
        height:120,
        display:"flex",
        justifyContent:'flex-end',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        paddingBottom:20,
        paddingLeft:20,
    },
    headerTitle:{
        color:'#fff',
        fontSize:30,
        padding:20,
        fontFamily:'Montserrat-Regular',
    },
    India:{
        color:'#1a6ed6',
        fontSize:30,
        padding:20,
        fontFamily:'Montserrat-Regular',
    }
    
})
