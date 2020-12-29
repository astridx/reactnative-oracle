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
        <Text style={styles.answer1}>Die Antwort lautet:</Text>
        <Text style={styles.answer2}>{initAnswers()[0].title}</Text>
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
  answer1: {
  },
  answer2: {
    borderBottomWidth: 1,
    margin: 25,
  },
});

export default AnswerScreen;
