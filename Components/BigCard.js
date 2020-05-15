import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BigCard = ({data,LastUpdateDate}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.CardHeading}>Total samples tested</Text>
            <Text style={styles.CardValue}>{data.totalSamplesTested}</Text>
            <Text style={styles.lastUpdateDate}>Last updated : {LastUpdateDate}</Text>
        </View>
    )
}

export default BigCard

const styles = StyleSheet.create({
    container:{
        height:200,
        justifyContent:'center',
        backgroundColor:'#dbbd37',
        margin:20,
        borderRadius:13,
        elevation:10,
    },
    CardHeading:{
        fontFamily:'Montserrat-Bold',
        fontSize:20,
        textAlign:"center",
        color:'#fff'
    },
    CardValue:{
        fontFamily:'Montserrat-Regular',
        fontSize:30,
        textAlign:"center",
        color:'#fff'
    },
    lastUpdateDate:{
        fontFamily:'Montserrat-Regular',
        fontSize:15,
        textAlign:"center",
        color:'#3d3d3d'
    }

})
