import React, { useEffect } from "react";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";
import { initAnswers } from "../src/utils/answer-supplier";

const AnswerScreen = ({ setInAnswer }) => {
  useEffect(() => {
    let answer = initAnswers()[0].title;
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
          title="Zurück zum Orakel"
          color="#841584"
          accessibilityLabel="Zurück zum Orakel"
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
