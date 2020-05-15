import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ContactCard = ({HeadContent}) => {
    return (
            <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={styles.CardHeading}>Tollfree number</Text>
                    <Text style={styles.CardValue}>{HeadContent['number-tollfree']}</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.CardHeading}>Alternate contact</Text>
                    <Text style={styles.CardValue}>{HeadContent.number}</Text>
                </View>
            </View>
        </View>
    )
}

export default ContactCard

const styles = StyleSheet.create({
    container:{
        height:200,
        justifyContent:'space-evenly',
        backgroundColor:'#4e8164',
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
        fontSize:25,
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
