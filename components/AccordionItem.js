import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import he from "he";
import shuffleArray from "../util/shuffleArray";

const AccordionItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { incorrect_answers, correct_answer, question } = item;

  const answerIsCorrect = selectedAnswer === correct_answer;

  const allAnswers = useMemo(
    () => shuffleArray([...incorrect_answers, correct_answer]),
    [incorrect_answers, correct_answer]
  );

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const itemClass = (option) => {
    if (selectedAnswer !== option) {
      return styles.option;
    }
    return answerIsCorrect ? styles.correctAnswer : styles.incorrectAnswer;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={styles.button}
      >
        <Text>{he.decode(question)}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.content}>
          {allAnswers.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.option, itemClass(option)]}
              onPress={() => handleSelectAnswer(option)}
            >
              <Text style={styles.text}>{he.decode(option)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  button: {
    paddingBottom: 10,
  },
  content: {
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  option: {
    padding: 8,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  correctAnswer: {
    backgroundColor: "green",
    // borderColor: "#4dd0e1",
  },
  incorrectAnswer: {
    backgroundColor: "red",
    // borderColor: "#4dd0e1",
  },
});

export default AccordionItem;
