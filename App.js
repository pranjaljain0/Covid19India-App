import React,{useState,useEffect} from 'react';
import Index from './Navigation/Index';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
  'wotfard': require('./assets/fonts/ProductSans.ttf'),
  'Montserrat-Regular': require('./assets/fonts/ProductSans.ttf'),
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Light': require('./assets/fonts/ProductSansBold.ttf'),
  });
  };

export default function App() {
  const [DataLoaded, setDataLoaded] = useState(false)

  if(!DataLoaded){
    return(
      <AppLoading
      startAsync={fetchFonts}
      onFinish={()=>setDataLoaded(true)}/>
    )
  }

  return (
    <Index/>
  );
}
