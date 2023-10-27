import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TextInput, View } from 'react-native';

import CardDvd from '../components/card.js';
import { StyleSheet } from 'react-native';
import Button from '../components/button.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dvds({navigation}) {
    const [dvds, setDvds] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/dvds")
            .then(resp => setDvds(resp.data))
    }, [])

    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <MaterialIcons onPress={() => navigation.navigate("Order")} name="arrow-back" size={24} color="red" />

                <View style={styles.box}>
                    <Text style={styles.text2}>comanda</Text>
                    <Text style={styles.text2}>2457</Text>
                </View>
            </View>

            <View style={styles.dvds}>
                <Text style={styles.subtitle}>dvd</Text>
                <View style={styles.dvdData}>
                    <Text style={styles.text2}>Saldo da comanda</Text>
                    <Text style={styles.text2}>R$ 0,00</Text>
                </View>
                <View style={styles.dvdData}>
                    <Text style={styles.text2}>Total do dvd</Text>
                    <Text style={styles.text2}>R$ +20,00</Text>
                </View>
                <View style={styles.dvdDataTotal}>
                    <Text style={styles.text2}>Saldo final</Text>
                    <Text style={styles.text2}>R$ 149,00</Text>
                </View>
            </View>

            <TextInput style={styles.input} placeholder="procurar" />

            <Text style={styles.subtitle}>DVDS</Text>

            <ScrollView style={styles.scroll}>
                
                { dvds.map(dvd =>                
                  <CardDvd key={dvd.id} dvd={dvd} />) }
                
            </ScrollView>

            <Button>finalizar</Button>
        </View>

    )
}

const styles = StyleSheet.create({
  header:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  text2: {
    color: '#FFBA26',
    fontWeight: 'light'
  },
  containerBetween: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  box: {
    borderColor: '#950101',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  dvds: {
    width: '100%',
  },
  dvdData:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dvdDataTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
  },
  CardDvd: {
    borderColor: '#3D0000',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginVertical: 5,
  },
  dvdData: {
    flex: 1,
    alignSelf: 'flex-start',
  },  
  thumb: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  price: {
    color: '#FFBA26',
    fontSize: 18,
  },
  spinner: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderRadius: 999,
  },
  spinnerMinus: {
    textAlign: 'center',
    backgroundColor: '#E9E9E9',
    borderRadius: 999,
    width: 24,
    height: 24,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  spinnerPlus: {
    textAlign: 'center',
    backgroundColor: '#121A2C',
    borderRadius: 999,
    width: 24,
    height: 24,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#FFF',
  },
  spinnerValue: {
    textAlign: 'center',
    width: 24,
    height: 24,
    lineHeight: 24,
  },
  scroll: {
   width: '100%',
  }

})