import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import Header from '../Components/Header'
import BigCard from '../Components/BigCard';
import { DataTable } from 'react-native-paper';

const Testing = () => {

    const [data, setData] = useState();
    const [HeadContent, setHeadContent] = useState()
    const [DataLoaded, setDataLoaded] = useState(false)
    const [LastUpdateDate, setLastUpdateDate] = useState()

  useEffect(() => {
    // Create an scoped async function in the hook

    const fetchData = async () => {
        const result = await axios('https://api.rootnet.in/covid19-in/stats/testing/history',);
        const result1 = await axios('https://api.rootnet.in/covid19-in/stats/testing/latest',);
        setData(result.data.data);
        setHeadContent(result1.data.data);
        setLastUpdateDate(result1.data.lastRefreshed)
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
                    <View style={styles.content}>
                        <View style={styles.CardsView}>
                            <BigCard data={HeadContent} LastUpdateDate={LastUpdateDate}/>
                        </View>
                        <DataTable>
                    <DataTable.Header style={styles.tableHeader}>
                        <DataTable.Title><Text style={styles.itemText}>Date</Text></DataTable.Title>
                        <DataTable.Title numeric ><Text style={styles.itemText}>Tested</Text></DataTable.Title>
                        <DataTable.Title numeric ><Text style={styles.itemText}>Samples</Text></DataTable.Title>
                        <DataTable.Title numeric ><Text style={styles.itemText}>Positive</Text></DataTable.Title>
                    </DataTable.Header> 
                    <ScrollView>
                        {
                            // console.log(data)
                            data.map((item,index)=>{
                                return(
                                    <DataTable.Row style={index%2==0?styles.oddRow:styles.evenRow}>
                                        <DataTable.Cell><Text style={styles.itemText}>{item.day}</Text></DataTable.Cell>
                                        <DataTable.Cell numeric style={styles.itemText}><Text style={styles.itemText}>{item.totalIndividualsTested}</Text></DataTable.Cell>
                                        <DataTable.Cell numeric style={styles.itemText}><Text style={styles.itemText}>{item.totalSamplesTested}</Text></DataTable.Cell>
                                        <DataTable.Cell numeric style={styles.itemText}><Text style={styles.itemText}>{item.totalPositiveCases}</Text></DataTable.Cell>
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

export default Testing

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#191727",
    },
    content:{
        marginTop:120,
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

