import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [img, setImg] = useState(require("../dispositivosmoveis/assets/biscoitofechado.jpeg"));
  const [textFrase, setTextFrase] = useState("");

  let frases = [
    "O sucesso é uma soma de pequenos esforços repetidos dia após dia.",
    "O bom-senso vale mais do que muito conhecimento.",
    "O riso é a menor distância entre duas pessoas.",
    "Você é mais capaz do que imagina, e suas conquistas são ilimitadas.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "A persistência é o caminho do êxito.",
    "A maior barreira para o sucesso é o medo do fracasso.",
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextFrase(' "' + frases[numeroAleatorio] + '" ');
    setImg(require("../dispositivosmoveis/assets/biscoitoaberto.jpeg"));
  }

  function reiniciarBiscoito() {
    setImg(require("../dispositivosmoveis/assets/biscoitofechado.jpeg"));
    setTextFrase("");
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textoFrase}>{textFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: "#000000" }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#000000" }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: "#000000",
    margin: 30,
    fontStyle: "normal",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
});