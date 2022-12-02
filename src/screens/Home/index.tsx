import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant/";
import React from "react";

export function Home() {
  const participants = [
    "Matheus",
    "Julia",
    "Marcelo",
    "Jotaro",
    "Dio",
    "Pucci",
    "Jolyne",
    "Josias",
    "Marcelão",
    "Monster Energy",
  ];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>

      <Text style={styles.eventDate}>React Native</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove("Matheus")}
          />
        ))}
      </ScrollView>
    </View>
  );
}
