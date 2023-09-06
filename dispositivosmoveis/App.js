import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const fortunes = [
  "A sorte está do seu lado!",
  "Grandes coisas estão por vir.",
  "Acredite em si mesmo.",
  "O sucesso é uma jornada, não um destino.",
  "Você é mais forte do que pensa.",
  "O otimismo é a chave para o sucesso.",
  "Hoje é o primeiro dia do resto de sua vida.",
  "Aja como se o que você faz fizesse diferença. Isso faz!",
  "A vida é um presente, aproveite cada momento.",
  "O universo sempre conspira a seu favor.",
];

export default function App() {
  
  const [fortune, setFortune] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const breakCookie = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
    setButtonDisabled(true);
  };

  const resetCookie = () => {
    setFortune("");
    setButtonDisabled(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./bi")}
        style={styles.cookieImage}
      />
      <Text style={styles.fortuneText}>{fortune}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={breakCookie}
        disabled={buttonDisabled}
      >
        <Text style={styles.buttonText}>Quebrar Biscoito</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton} onPress={resetCookie}>
        <Text style={styles.resetButtonText}>Reiniciar Biscoito</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  cookieImage: {
    width: 200,
    height: 200,
  },
  fortuneText: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  resetButton: {
    marginTop: 20,
  },
  resetButtonText: {
    color: "#007AFF",
    fontSize: 18,
  },
});