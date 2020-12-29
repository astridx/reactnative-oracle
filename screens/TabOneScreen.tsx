import * as React from 'react';
import { useState } from "react";
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import HomeScreen from "./HomeScreen";
import AnswerScreen from "./AnswerScreen";

export default function TabOneScreen() {
  const [inAnswer, setInAnswer] = useState(false);
  const [question, setQuestion] = useState(false);

  return (
    <View style={styles.container}>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {inAnswer ? (
        <AnswerScreen setInAnswer={setInAnswer} question={question} />
      ) : (
          <HomeScreen setInAnswer={setInAnswer} setQuestion={setQuestion} />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
