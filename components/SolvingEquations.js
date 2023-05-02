import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const equations = [
  {
    id: 5,
    equation: "5 + 5",
    answer: 10,
    choices: [5, 10, 15, 20],
  },
  {
    id: 1,
    equation: "1 + 2",
    answer: 3,
    choices: [1, 2, 3, 4],
  },
  {
    id: 3,
    equation: "2 * 3",
    answer: 6,
    choices: [3, 6, 9, 12],
  },
  {
    id: 2,
    equation: "5 - 2",
    answer: 3,
    choices: [1, 2, 3, 4],
  },
  {
    id: 4,
    equation: "10 / 2",
    answer: 5,
    choices: [2, 5, 10, 20],
  },
  {
    id: 6,
    equation: "10 - 5",
    answer: 5,
    choices: [1, 2, 3, 5],
  },
  {
    id: 7,
    equation: "3 * 3",
    answer: 9,
    choices: [3, 6, 9, 12],
  },
  {
    id: 8,
    equation: "20 / 4",
    answer: 5,
    choices: [2, 5, 10, 20],
  },
  {
    id: 9,
    equation: "2 + 2",
    answer: 4,
    choices: [1, 2, 3, 4],
  },
  {
    id: 10,
    equation: "6 - 2",
    answer: 4,
    choices: [1, 2, 3, 4],
  },
];

export default function MathQuiz() {
  const [currentEquationIndex, setCurrentEquationIndex] = useState(0);
  const currentEquation = equations[currentEquationIndex];
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
  };

  const handleNext = () => {
    if (selectedChoice === currentEquation.answer) {
      alert("Correct!✨✔✔✔");
    } else {
      alert("Incorrect.😥😥😥");
    }
    setSelectedChoice(null);
    if (currentEquationIndex < equations.length - 1) {
      setCurrentEquationIndex(currentEquationIndex + 1);
    } else {
      alert("Quiz complete!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is the correct answer?</Text>
      <Text style={styles.equation}>{currentEquation.equation} = ?</Text>
      <View style={styles.choicesContainer}>
        {currentEquation.choices.map((choice) => (
          <TouchableOpacity
            key={choice}
            style={[
              styles.choice,
              selectedChoice === choice && styles.choiceSelected,
            ]}
            onPress={() => handleChoiceSelect(choice)}
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
        disabled={selectedChoice === null}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e1e1e",
  },
  equation: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#FBBEBE",
  },
  choicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 50,
  },
  choice: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  choiceSelected: {
    backgroundColor: "#FBBEBE",
  },
  choiceText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  nextButton: {
    backgroundColor: "#FBBEBE",
    borderRadius: 10,
    padding: 10,
  },
  nextButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e1e1e",
  },
  text: {
    color: "#f2f2f2",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
