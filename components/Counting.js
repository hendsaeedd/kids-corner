import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";

const counts = [
  { image: require("../assets/maths/count6.png"), correctNumber: 8 },
  { image: require("../assets/maths/count1.png"), correctNumber: 6 },
  { image: require("../assets/maths/count2.png"), correctNumber: 1 },
  { image: require("../assets/maths/count4.png"), correctNumber: 16 },
  { image: require("../assets/maths/count5.png"), correctNumber: 7 },
  { image: require("../assets/maths/count3.png"), correctNumber: 6 },
  { image: require("../assets/maths/count7.png"), correctNumber: 11 },
  { image: require("../assets/maths/count8.png"), correctNumber: 7 },
];

export default function Counting() {
  const [currentCountIndex, setCurrentCountIndex] = useState(0);
  const currentCount = counts[currentCountIndex];
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
  };

  const handleNext = () => {
    if (selectedNumber === currentCount.correctNumber) {
      Alert.alert(
        "Correct!",
        "Congratulations✨🎉✔✔! You got it right!",
        [
          {
            text: "Next",
            onPress: () => {
              setSelectedNumber(null);
              if (currentCountIndex < counts.length - 1) {
                setCurrentCountIndex(currentCountIndex + 1);
              } else {
                Alert.alert("Quiz complete!🙈💗🎉", "Well done! You finished the quiz!");
              }
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Incorrect",
        "Sorry, that was not the correct answer😥😥. Please try again.",
        [
          {
            text: "OK",
            onPress: () => setSelectedNumber(null),
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={currentCount.image} />
      <Text style={styles.text}>How many are there?</Text>
      <View style={styles.numbersContainer}>
        {[...Array(20)].map((_, index) => (
          <TouchableOpacity
            key={index + 1}
            style={[
              styles.number,
              selectedNumber === index + 1 && styles.numberSelected,
            ]}
            onPress={() => handleNumberSelect(index + 1)}
          >
            <Text style={styles.numberText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
        disabled={selectedNumber === null}
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
  image: {
    height: 200,
    width: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  numbersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  number: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  numberSelected: {
    backgroundColor: "#FBBEBE",
  },
  numberText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e1e1e",
  },
  nextButton: {
    backgroundColor: "#FBBEBE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  nextButtonText: {
    color: "#1e1e1e",
    fontSize: 24,
    fontWeight: "bold",
  },
});