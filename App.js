import { useState } from 'react';
import { View, StyleSheet, Image, TextInput, Pressable } from 'react-native';

const formValuesInitialState = { user: '', password: ''};

export default function App() {
  const [formValues, setFormValues] = useState(formValuesInitialState);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/americanas.jpg')} />
      <TextInput
        placeholder='Usuário'
        placeholderTextColor='#aaaaaa'
        style={styles.input}
        value={formValues.user}
        onChangeText={(text) => setFormValues((prevState) => ({ ...prevState, user: text }))}
      />

      <TextInput
        secureTextEntry={true}
        placeholder='Senha'
        placeholderTextColor='#aaaaaa'
        style={styles.input}
        value={formValues.password}
        onChangeText={(text) => setFormValues((prevState) => ({ ...prevState, password: text }))}
      />
      <Pressable style={styles.button} onPress={() => { 
        setFormValues(formValuesInitialState)
        }}>
        Entrar
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '0.5rem 2rem 0 2rem',
    backgroundColor: '#0000',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    color: 'white',
  },
  logo: {
    width: '100%',
    height: '40%',
    marginBottom: '-2rem',
  },
  input: {
    width: '100%',
    height: '5%',
    backgroundColor: 'white',
    color: 'black',
    marginTop: '2rem',
    padding: '1rem 0.5rem',
    borderRadius: '0.4rem',
    outline: 'solid',
  },
  button: {
    width: '100%',
    margin: '2rem',
    backgroundColor: 'red',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.8rem',
    borderRadius: '1rem',
  },
});