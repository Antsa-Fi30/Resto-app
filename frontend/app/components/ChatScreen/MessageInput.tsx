import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const theme = useTheme();
  const handleSend = () => {
    if (message.trim().length > 0) {
      onSend(message);
      setMessage(""); // Réinitialiser le champ de texte après l'envoi
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Message"
        multiline
        value={message}
        onChangeText={(text) => setMessage(text)}
        placeholder="Tapez votre message..."
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleSend}
        style={[
          styles.sendButton,
          { backgroundColor: theme.colors.elevation.level3 },
        ]}
        disabled={message.trim().length === 0}
      >
        <Feather name="send" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1, // Pour occuper tout l'espace horizontal
    marginRight: 10,
  },
  sendButton: {
    padding: 14,
    borderRadius: 80,
    backgroundColor: "#FF4D4D", // Couleur rouge pour le bouton
  },
  buttonLabel: {
    color: "#FFF", // Couleur du texte du bouton
  },
});
