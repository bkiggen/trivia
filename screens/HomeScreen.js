import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useTrivia } from "../hooks/useTrivia";
import AccordionItem from "../components/AccordionItem";

const HomeScreen = () => {
  const [correctAnswers, setCorrectAnswers] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { refetch, facts, error, isLoading } = useTrivia();
  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleFetchQuestions = () => {
    handleScrollToTop();
    refetch();
  };

  return (
    <ScrollView style={{ flex: 1, paddingTop: 20 }} ref={scrollViewRef}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {error && <Text>Error fetching data</Text>}
        {isLoading && <Text>Loading...</Text>}
        {facts &&
          facts.map((fact, index) => (
            <AccordionItem
              key={index}
              item={fact}
              index={index}
              setCorrectAnswers={setCorrectAnswers}
            />
          ))}
        <View>
          <Text style={{ textAlign: "center", margin: 20 }}>
            {correctAnswers.filter(Boolean).length} / {correctAnswers.length}{" "}
            correct
          </Text>
        </View>
        <TouchableOpacity onPress={handleFetchQuestions} style={styles.button}>
          <Text style={styles.buttonText}>Reset Questions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "skyblue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    margin: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default HomeScreen;
