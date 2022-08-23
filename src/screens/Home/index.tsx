import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant/";

export function Home() {

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!")
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native
      </Text>

      <Text style={styles.eventDate}>
        React Native
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Matheus" onRemove={() => handleParticipantRemove("Matheus")}/>
    </View>
  )
}