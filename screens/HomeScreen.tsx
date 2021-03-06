import React from "react";
import { Alert, Button, View, StyleSheet, Text, TextInput } from "react-native";

const HomeScreen = ({ setInAnswer, setQuestion }) => {
  const [value, onChangeText] = React.useState("");

  return (
    <>
      <View style={styles.container}>
        <Text>Welche Frage beschäftigt dich?</Text>
        <TextInput
          multiline
          autoFocus
          numberOfLines={1}
          onChangeText={(text) => onChangeText(text)}
          style={styles.textinput}
          value={value}
        />
        <Button
          onPress={() => {
            if (value) {
             { setInAnswer(true); setQuestion(value)}
            } else {
              Alert.alert(
                'Etwas fehlt!',
                'Bitte die Frage ins Textfeld eingeben',
                [
                  { text: 'OK' }
                ],
              );

            }
          }}
          title="Zeige mir die Antwort!"
          color="#841584"
          accessibilityLabel="Zeige mir die Antwort!"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    borderBottomWidth: 1,
    margin: 25,
  },
});

export default HomeScreen;
