import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "react-native-vector-icons";

const items = [
  {
    id: "1",
    title: "Biology",
    image: require("../assets/science/biology.png"),
    video: "https://www.youtube.com/embed/SUt8q0EKbms",
  },
  {
    id: "2",
    title: "Chemistry",
    image: require("../assets/science/chemistry.png"),
  },
  {
    id: "3",
    title: "Physics",
    image: require("../assets/science/physics.png"),
  },
];

export default function Science() {
  const [modalVisible, setModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <View style={styles.all}>
      <Text style={styles.title}>Science</Text>
      <Image
        source={require("../assets/science/science.png")}
        style={{ width: 250, height: 250, marginLeft: 100 }}
      />
      <Text style={styles.desc}>Explore the natural world with activities about animals, plants, the environment, and the solar system.</Text>
      <View style={styles.container}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.grid}
            onPress={() => {
              setVideoUrl(item.video);
              setModalVisible(true);
            }}
          >
            <Text style={styles.text}>{item.title}</Text>
            <Image style={styles.image} source={item.image} />
          </TouchableOpacity>
        ))}
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Ionicons name="close" size={30} color="#fff" />
          </TouchableOpacity>
          <WebView source={{ uri: videoUrl }} style={styles.video} />
          <Button
            title="Start Questions"
            onPress={() => console.log("Starting questions...")}
            style={styles.start}
          />
        </View>
      </Modal>
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
    height: 80,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 8,
    padding: 20,
    margin: "1%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1e1e1e",
    backgroundColor: "#FF5400",
  },
  text: {
    fontSize: 20,
    marginTop: 8,
    marginLeft: 10,
    color: "#1e1e1e",
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
  },
  container: {
    margin: 20,
    display: "flex",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  video: {
    // aspectRatio: 1.5,
    width: "80%",
    alignSelf: "center",
    // marginVertical: 200,
    marginLeft: 400,
    marginRight: 400,
    marginTop: 50,
    marginBottom: 400,
  },
  start: {
    margin: 100,
    borderRadius: 100,
    backgroundColor: "#FF5400",
  },
  desc: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
});
