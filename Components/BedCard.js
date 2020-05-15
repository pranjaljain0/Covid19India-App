import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BedCard = ({HeadContent}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.col}>
                <Text style={styles.CardHeading}>Hospitals</Text>
                <Text style={styles.CardValue}>{HeadContent.summary.totalHospitals}</Text>
                </View>
                <View style={styles.col}>
                <Text style={styles.CardHeading}>Beds</Text>
                <Text style={styles.CardValue}>{HeadContent.summary.totalBeds}</Text>
                </View>
            </View>
            {/* <Text>{HeadContent.summary.ruralHospitals}</Text>
            <Text>{HeadContent.summary.ruralBeds}</Text>
            <Text>{HeadContent.summary.urbanHospitals}</Text>
            <Text>{HeadContent.summary.urbanBeds}</Text> */}
            <Text style={styles.subText}>Available for COVID 19</Text>
        </View>
    )
}

export default BedCard

const styles = StyleSheet.create({
    container:{
        height:200,
        justifyContent:'space-evenly',
        backgroundColor:'#5c5f6e',
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
        color:'#fff',
    },
    lastUpdateDate:{
        fontFamily:'Montserrat-Regular',
        fontSize:15,
        textAlign:"center",
        color:'#3d3d3d'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    col:{
        justifyContent:'center'
    },
    subText:{
        textAlign:'center',
        color:'#3d3d3d',
    }
})
