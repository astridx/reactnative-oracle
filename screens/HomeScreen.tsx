import React from "react";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";

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
            setInAnswer(true);
          }}
          title="Wie ist die Antwort auf diese Frage?"
          color="#841584"
          accessibilityLabel="Wie ist die Antwort auf diese Frage?"
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
