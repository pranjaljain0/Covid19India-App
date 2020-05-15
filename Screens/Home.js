import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from '../Components/Header'
import Card from '../Components/Card';
import { AppLoading } from 'expo';
import { DataTable } from 'react-native-paper';


const Home = () => {

    const [data, setData] = useState();
    const [DataLoaded, setDataLoaded] = useState(false)
    const [LastUpdateDate, setLastUpdateDate] = useState()
  useEffect(() => {
    // Create an scoped async function in the hook
    const fetchData = async () => {
        const result = await axios('https://api.rootnet.in/covid19-in/stats/latest',);
        setData(result.data.data);
        setLastUpdateDate(result.data.lastOriginUpdate)
        setDataLoaded(true)
    }
    // Execute the created function directly
    fetchData();
  }, []);

    return (
        <View style={styles.container}>
            <Header Title="COVID19INDIA"/>
                {DataLoaded?
                (
                <View><View style={styles.content}>
                <View style={styles.CardsView}>
                    <Card Title="Total" Value={data.summary.total} StyleContainer={{
                        backgroundColor:'#351928',}}
                        StyleText={{
                            color:'#fe093a',}}
                        />
                    <Card Title="Active" Value={data.summary.total-(data.summary.deaths+data.summary.discharged)} StyleContainer={{
                        backgroundColor:'#181d33',}}
                        StyleText={{
                            color:'#007bff',}}
                        />
                    <Card Title="Recovered" Value={data.summary.discharged} StyleContainer={{
                        backgroundColor:'#1a292a',}}
                        StyleText={{
                            color:'#2aa545',}}
                        />

                    <Card Title="Deceased" Value={data.summary.deaths} StyleContainer={{
                        backgroundColor:'#1d1c2b',}}
                        StyleText={{
                            color:'#6c757c',}}
                        />
                </View>
            </View>
            <View style={styles.secondaryHeaderView}>
                <Text style={styles.subHeading}>Regional wise</Text>
                <Text style={styles.lastUpdated}>Last updated : {LastUpdateDate}</Text>
            </View>
            <DataTable>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title><Text style={styles.itemText}>State</Text></DataTable.Title>
                <DataTable.Title numeric ><Text style={styles.itemText}>Total</Text></DataTable.Title>
                <DataTable.Title numeric ><Text style={styles.itemText}>Recovered</Text></DataTable.Title>
                <DataTable.Title numeric ><Text style={styles.itemText}>Deaths</Text></DataTable.Title>
            </DataTable.Header> 
            <ScrollView>
                {
                    data.regional.map((item,index)=>{
                        return(
                            <DataTable.Row style={index%2==0?styles.oddRow:styles.evenRow}>
                                <DataTable.Cell><Text style={styles.itemText}>{item.loc}</Text></DataTable.Cell>
                                <DataTable.Cell numeric style={styles.itemText}><Text style={styles.itemText}>{item.totalConfirmed}</Text></DataTable.Cell>
                                <DataTable.Cell numeric style={styles.itemText}><Text style={styles.itemText}>{item.discharged}</Text></DataTable.Cell>
                                <DataTable.Cell numeric style={styles.itemText}><Text style={styles.itemText}>{item.deaths}</Text></DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                }
                </ScrollView>
            </DataTable>
            </View>
            ):(<Text>Loading</Text>)}
        </View>
        )
    }

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#191727",
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    content:{
        marginTop:120,
    },
    CardsView:{
        flexWrap: 'wrap',
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    secondaryHeaderView:{
        flexDirection:"row",
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
    },
    subHeading:{
        color:'#fff',
        fontSize:18,
    },
    lastUpdated:{
        color:'#3d3d3d',
        fontSize:12,
    },
    itemStyle:{
        backgroundColor:'pink',
        flexDirection:'row',
    },
    itemText:{
        color:'#fff',
        fontSize:13,
    },
    tableHeader:{
        backgroundColor:'#022c8c',
        margin:7,
        borderRadius:11,
    },  
    oddRow:{
        backgroundColor:'#5c5f6e',
        margin:7,
        borderRadius:11,
    },
    evenRow:{
        margin:7,
        borderRadius:11,
    }
})
