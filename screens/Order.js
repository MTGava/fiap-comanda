import { StyleSheet, View, Text } from "react-native";
import Input from "../components/input";
import Button from "../components/Button";

export default function Order() {
    return (

        <View style={styles.container}>

            <View>
                <Text style={styles.text}>Olá,</Text>
                <Text style={styles.text}>Matheus Gava</Text>
            </View>

            <View>
                <Input/>
                <Button>confirmar</Button>
            </View>

            <Text style={styles.text}>
                Digite o código da Comanda para iniciar um pedido
            </Text>

            <TouchableOpacity>
                <Text style={styles.text2}>sair</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#950101',
        fontWeight: 'bold'
    },
    text2: {
        color: '#950101',
        fontWeight: 'light'
    }
  });
  