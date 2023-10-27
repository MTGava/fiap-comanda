import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardDvd({ dvd }) {

    return (
        <View style={styles.dvds}>

            <View style={styles.cardDvd}>
                <Image style={styles.thumb} source={{ uri: dvd.imagePath }} />

                <View style={styles.dvdData}>
                    <Text  style={styles.text2}>{dvd.nome}</Text>
                    <Text style={styles.price}>R$ {dvd.preco.toFixed(2)}</Text>
                </View>

                <View style={styles.spinner}>
                    <TouchableOpacity >
                        <Text style={styles.spinnerMinus}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.spinnerValue}>0</Text>
                    <TouchableOpacity >
                        <Text style={styles.spinnerPlus}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
  text2: {
    color: '#2D2D2D',
    fontWeight: 'light'
  },
    box: {
        borderColor: '#FFFFFF',
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
      cardDvd: {
        backgroundColor: '#FFBA26',
        borderColor: '#2D2D2D',
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
        color: '#2D2D2D',
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