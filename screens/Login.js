import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/button';
import Input from '../components/input';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login({navigation}) {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const {login} = useContext(AuthContext)
  const [erro, setErro] = useState('')

  async function handleLogin() {
    if (await login({email, senha})) {
      navigation.navigate("Order")
    } else {
      setErro("usuário ou senha inválidos")
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/home.png')} />
      <Text style={styles.title}>FIAP RENTAL</Text>

      <Input placeholder='e-mail' value={email} onChangeText={setEmail}/>
      <Input placeholder='senha' value={senha} onChangeText={setSenha} secureTextEntry/>

      <Button onPress={handleLogin}>
        Entrar
        </Button>

        <Text style={styles.text2}>{erro}</Text>
      
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
  text2: {
    color: '#FFBA26',
    fontWeight: 'light'
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
