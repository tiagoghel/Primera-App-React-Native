import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const mensaje = `Contador: ${contador}`;

  const CambiarContador = () => {
    setContador(contador + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{mensaje}</Text>

      <TouchableOpacity style={styles.boton} onPress={CambiarContador}>
        <Text style={styles.textoBoton}>Contador</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({ 
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222', }, 
  texto: { fontSize: 28, color: 'white', marginBottom: 20, }, 
  boton: { backgroundColor: '#00bfff', padding: 15, borderRadius: 10, }, 
  textoBoton: { color: 'white', fontSize: 18, }, });





  




























































