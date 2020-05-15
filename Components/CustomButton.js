import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CustomButton = ({Title,style,textStyle,_handlePressButtonAsync,Link}) => {
    return (
        <TouchableOpacity style={[style,styles.CustomButton]} onPress={()=>_handlePressButtonAsync(Link)}>
            <Text style={[textStyle,styles.Text]}>{Title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    CustomButton:{
        marginVertical:10,
        marginHorizontal:15,
        paddingVertical:20,
        borderRadius:13,
    },
    Text:{
        textAlign:'center'
    }
})
