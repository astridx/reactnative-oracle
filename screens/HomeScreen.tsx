import React from "react";
import { Alert, Button, View, StyleSheet, Text, TextInput } from "react-native";

const HomeScreen = ({ setInAnswer }) => {
  const [value, onChangeText] = React.useState("");

  return (
    <>
      <View style={styles.container}>
        <Text>Welche Frage beschäftigt dich?</Text>
        <TextInput
          multiline
          autoFocus
          numberOfLines={4}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <Button
          onPress={() => {
            if (value) {
              setInAnswer(true);
            } else {
              /* https://reactnative.dev/docs/alert */
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
});

export default HomeScreen;
