import React, { useEffect } from "react";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";
import { initAnswers } from "../src/utils/answer-supplier";

const AnswerScreen = ({ setInAnswer }) => {
  useEffect(() => {
    let answer = initAnswers()[0].title;
    console.log(answer);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text>Die Antwort lautet:</Text>
        <Text>{initAnswers()[0].title}</Text>
        <Button
          onPress={() => {
            setInAnswer(false);
          }}
          title="Zurück zur Frageseite"
          color="#841584"
          accessibilityLabel="Zurück zur Frageseite"
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

export default AnswerScreen;
