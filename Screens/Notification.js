import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Header from '../Components/Header'
import { Button } from 'react-native-paper'
import CustomButton from '../Components/CustomButton'
import * as WebBrowser from 'expo-web-browser';

const Notification = () => {

    const [result, setResult] = useState(null);

    const _handlePressButtonAsync = async (Link) => {
        let result = await WebBrowser.openBrowserAsync(Link);
        setResult(result);
    };

    return (
        <View style={styles.container}>
            <Header Title="COVID19INDIA"/>
            <View style={styles.content}>
                <Text style={styles.quoteText}>We stand with everyone fighting on the frontlines</Text>
                <View style={styles.Buttons}>
                    <CustomButton 
                    Title="Open Sourced on GitHub" 
                    style={styles.Github} textStyle={styles.GithubText} 
                    _handlePressButtonAsync={_handlePressButtonAsync}
                    Link="https://github.com/covid19india/covid19india-react"/>
                    <CustomButton 
                    Title="Crowdsourced Patient Database" 
                    style={styles.Patinet} textStyle={styles.PatientText} 
                    _handlePressButtonAsync={_handlePressButtonAsync}
                    Link="http://patientdb.covid19india.org"/>
                    <CustomButton 
                    Title="View updates on Twitter" 
                    style={styles.Twitter} 
                    textStyle={styles.TwitterText} 
                    _handlePressButtonAsync={_handlePressButtonAsync}
                    Link="https://twitter.com/covid19indiaorg"/>
                    <CustomButton 
                    Title="Join Telegram to Collaborate!" 
                    style={styles.Telegram} 
                    textStyle={styles.TelegramText} 
                    _handlePressButtonAsync={_handlePressButtonAsync}
                    Link="https://bit.ly/covid19crowd"/>
                </View>
                <View style={styles.MadeByText}>
                    <Text style={styles.Text}>Made and managed by</Text>
                    <Text style={styles.Text}>Web Palace</Text>
                </View>
            </View>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#191727",
    },
    content:{
        marginTop:120,
        flexDirection:'column',
        justifyContent:'space-between',
        flex:1,
    },
    quoteText:{
        color:'#fff',
        fontSize:17,
        textAlign:"center",
        marginTop:40,
    },
    Buttons:{

    },
    MadeByText:{
        backgroundColor:'#1e1e30',
        paddingTop:20,
        paddingBottom:20,
    },
    Text:{
        color:'#3d3d3d',
        textAlign:'center',
        fontSize:20,
    },
    Github:{
        backgroundColor:'#000',
    },
    GithubText:{
        color:'#fff',
    },
    PatientText:{
        color:'#33a667',
    },
    TwitterText:{
        color:'rgba(0,123,255,.6)',
    },
    TelegramText:{
        color:'rgba(0,123,255,.6)',
    },
    Patinet:{
        backgroundColor:'rgba(51,166,103,.19)',
    },
    Twitter:{
        backgroundColor:'rgba(0,123,255,.0627451)',
    },
    Telegram:{
        backgroundColor:'rgba(0,123,255,.0627451)',
    }
})

