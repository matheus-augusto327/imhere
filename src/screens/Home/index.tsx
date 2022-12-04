import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant/";
import React, { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState(["joão"]);

  function handleParticipantAdd() {
    if (participants.includes("Matheus")) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome"
      );
    }
    setParticipants((prevState) => [...prevState, "Ana"]);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
    `Você clicou em remover o participante ${name}`;
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes na sua lista
            de presença!
          </Text>
        )}
      />
    </View>
  );
}
