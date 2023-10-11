import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';
import Input from '../components/input';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/home.png')} />
      <Text style={styles.title}>FIAP RENTAL</Text>

      <Input placeholder='e-mail'/>
      <Input placeholder='senha' secureTextEntry/>

      <Button onPress={() => navigation.navigate('Order')}>
        Entrar
        </Button>
      
      <TouchableOpacity>
        <Text style={styles.text}>criar conta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#950101',
    fontSize: 34,
    fontWeight: 'bold',
  },
  text: {
    color: '#950101',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#3D0000',
    borderColor: 'red',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginTop: 16,
  }, 
  button:{
    backgroundColor: '#121A2C',
    color: '#FFBA26',
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 16
  },
  image: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
  }
});
