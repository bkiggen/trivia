import React from "react";
import { Button, Text, View, ScrollView } from "react-native";
import { useTrivia } from "../hooks/useTrivia";
import AccordionItem from "../components/AccordionItem";

const HomeScreen = () => {
  const { refetch, facts, error, isLoading } = useTrivia();

  const handleFetchQuestions = () => {
    refetch();
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {error && <Text>Error fetching data</Text>}
        {isLoading && <Text>Loading...</Text>}
        {facts &&
          facts.map((fact, index) => <AccordionItem key={index} item={fact} />)}
        <Button title="Fetch Questions" onPress={handleFetchQuestions} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
