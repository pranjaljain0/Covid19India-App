import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { ActivityIndicator,StyleSheet, Text, View,ScrollView } from 'react-native'
import Header from '../Components/Header'
import { DataTable } from 'react-native-paper'
import ContactCard from '../Components/ContactCard';

// https://api.rootnet.in/covid19-in/contacts

const Contact = () => {


    const [data, setData] = useState();
    const [HeadContent, setHeadContent] = useState()
    const [DataLoaded, setDataLoaded] = useState(false)
    const [LastUpdateDate, setLastUpdateDate] = useState()

  useEffect(() => {
    // Create an scoped async function in the hook

    const fetchData = async () => {
        const result = await axios('https://api.rootnet.in/covid19-in/contacts',);
        setHeadContent(result.data.data.contacts.primary)
        setData(result.data.data.contacts.regional);
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
                    <ContactCard HeadContent={HeadContent}/>
                    <DataTable>
                    <DataTable.Header style={styles.tableHeader}>
                        <DataTable.Title><Text style={styles.itemText}>Location</Text></DataTable.Title>
                        <DataTable.Title numeric><Text style={styles.itemText}>Contact</Text></DataTable.Title>
                    </DataTable.Header> 
                    <ScrollView>
                        {
                            // console.log(Object.keys( data.medicalColleges))
                            data.map((item,index)=>{
                                return(
                                    <DataTable.Row style={index%2==0?styles.oddRow:styles.evenRow}>
                                        <DataTable.Cell style={styles.itemText}><Text style={styles.itemText}>{item.loc}</Text></DataTable.Cell>
                                        <DataTable.Cell numeric style={styles.itemText}><Text style={styles.itemText}>{item.number}</Text></DataTable.Cell>
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

export default Contact

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

