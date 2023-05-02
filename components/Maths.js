import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const maths = [
  {
    id: "1",
    title: "Counting",
    image: require("../assets/maths/counting.png"),
    component: "Counting",
  },
  {
    id: "2",
    title: "Solving Equations",
    image: require("../assets/maths/solve.png"),
    component: "SolvingEquations",
  },
  {
    id: "3",
    title: "Matching",
    image: require("../assets/maths/match.png"),
    component: "Matching",
  },
];

export default function Maths() {
  const [showPopup, setShowPopup] = useState(false);
  const [apiData, setApiData] = useState("");

  const handleClick = () => {
    axios
      .get("http://numbersapi.com/random/math")
      .then((response) => {
        setApiData(response.data);
        setShowPopup(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.all}>
      <Text style={styles.title}>Maths</Text>
      <Image
        source={require("../assets/maths/maths.png")}
        style={{ width: 200, height: 200, marginLeft: 100 }}
      />
      <Text style={styles.desc}>
        Learn about numbers, shapes, patterns, and logic with fun games and
        activities.
      </Text>
      <View style={styles.container}>
        {maths.map((math) => (
          <TouchableOpacity
            key={math.id}
            style={styles.grid}
            onPress={() => navigation.navigate(math.component)}
          >
            <Text style={styles.text}>{math.title}</Text>
            <Image style={styles.image} source={math.image} />
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.buttonText}>Random Facts about numbers</Text>
        </TouchableOpacity>
        {showPopup && (
          <View style={styles.txt}>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Icon name="times" size={30} color="#1e1e1e" />
            </TouchableOpacity>
            <Text style={styles.txt}>{apiData}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
    marginLeft: 20,
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 70,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 8,
    padding: 20,
    margin: "1%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1e1e1e",
    backgroundColor: "#FBBEBE",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e1e1e",
  },
  image: {
    width: 50,
    height: 50,
  },
  container: {
    margin: 20,
    display: "flex",
  },
  desc: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  txt: {
    backgroundColor: "#fff",
    fontWeight: "bold",
    padding: 3,
    margin: 3,
    borderRadius: 12,
    color: "#1e1e1e",
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    backgroundColor: "#1e1e1e",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
});
