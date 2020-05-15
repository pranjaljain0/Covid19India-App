import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { ActivityIndicator,StyleSheet, Text, View,ScrollView } from 'react-native'
import Header from '../Components/Header'
import BedCard from '../Components/BedCard';
import { DataTable } from 'react-native-paper'

const Beds = () => {

    const [data, setData] = useState();
    const [HeadContent, setHeadContent] = useState()
    const [DataLoaded, setDataLoaded] = useState(false)
    const [LastUpdateDate, setLastUpdateDate] = useState()

  useEffect(() => {
    // Create an scoped async function in the hook

    const fetchData = async () => {
        const result = await axios('https://api.rootnet.in/covid19-in/hospitals/medical-colleges',);
        const summary=await axios('https://api.rootnet.in/covid19-in/hospitals/beds');
        setHeadContent(summary.data.data);
        setData(result.data.data);
        setDataLoaded(true)
    }
    // Execute the created function directly
    fetchData();
  }, []);


    return (
        <View style={styles.container}>
            <Header Title="COVID19INDIA"/>
            {DataLoaded?
                (<View style={styles.content}>
                    <BedCard HeadContent={HeadContent}/>
                    <DataTable>
                    <DataTable.Header style={styles.tableHeader}>
                        <DataTable.Title><Text style={styles.itemText}>Name</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.itemText}>Location</Text></DataTable.Title>
                        <DataTable.Title numeric><Text style={styles.itemText}>Admission Capacity</Text></DataTable.Title>
                        <DataTable.Title numeric><Text style={styles.itemText}>Beds</Text></DataTable.Title>
                    </DataTable.Header> 
                    <ScrollView>
                        {
                            // console.log(Object.keys( data.medicalColleges))
                            data.medicalColleges.map((item,index)=>{
                                return(
                                    <DataTable.Row style={index%2==0?styles.oddRow:styles.evenRow}>
                                        <DataTable.Cell style={styles.itemText}><Text style={styles.itemText}>{item.name}</Text></DataTable.Cell>
                                        <DataTable.Cell style={styles.itemText}><Text style={styles.itemText}>{item.city}, {item.state}</Text></DataTable.Cell>
                                        <DataTable.Cell numeric style={styles.itemText}><Text style={styles.itemText}>{item.admissionCapacity}</Text></DataTable.Cell>
                                        <DataTable.Cell numeric style={styles.itemText}><Text style={styles.itemText}>{item.hospitalBeds}</Text></DataTable.Cell>
                                    </DataTable.Row>
                                )
                            })
                        }
                        </ScrollView>
                    </DataTable>
                </View>):(<View style={styles.container}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>)

            }
            
        </View>
    )
}

export default Beds

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

