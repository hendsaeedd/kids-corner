import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/FontAwesome";

const videos = [
  {
    key: "video_1",
    id1: "_JBJt71_fMk",
    title: "Let's Draw! Let's learn colors!",
    image: require("../assets/home/paint.png"),
  },
  {
    key: "video_2",
    id: "nQmrLz5yFxw",
    title: "How to draw a cat",
    image: require("../assets/home/paint.png"),
  },
  {
    key: "video_3",
    id: "JsA8FAAKluU",
    title: "How To Draw a Panda",
    image: require("../assets/home/paint.png"),
  },
  {
    key: "video_4",
    id: "xRcxG9WR1c8",
    title: "How to draw a camel",
    image: require("../assets/home/paint.png"),
  },
  {
    key: "video_5",
    id: "HJz3D6AF8mc",
    title: "How to draw a boy",
    image: require("../assets/home/paint.png"),
  },
  {
    key: "video_6",
    id: " yA73uMY0JYc",
    title: "How to draw a girl",
    image: require("../assets/home/paint.png"),
  },
  {
    key: "video_7",
    id: "e2kH00Jt_ZI",
    title: "How to draw a car",
    image: require("../assets/home/paint.png"),
  },
  {
    key: "video_8",
    id: "lyF33lkLauo",
    title: "How to draw a tree",
    image: require("../assets/home/paint.png"),
  },
];

export default function Painting() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoPress = (video) => {
    setSelectedVideo(video);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.all}>
    <View style={styles.container}>
      <Text style={styles.title}>Painting</Text>
      <Image
        source={require("../assets/paint/painting.png")}
        style={{ width: 200, height: 200, marginLeft: 100 }}
      />
      <Text style={styles.desc}>Learn how to draw and paint with these fun and easy art lessons.</Text>
      {videos.map((video) => (
        <TouchableOpacity
          key={video.key}
          style={styles.videoItem}
          onPress={() => handleVideoPress(video)}
        >
          <Image source={video.image} style={styles.icon} />
          <Text style={styles.videoTitle}>{video.title}</Text>
        </TouchableOpacity>
      ))}
      {selectedVideo && (
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modal}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="times" size={30} color="#fff" />
            </TouchableOpacity>
            <WebView
              source={{
                uri: `https://www.youtube.com/embed/${selectedVideo.id1}`,
              }}
              allowsFullscreenVideo={false}
              style={styles.video}
            />
            <Text style={styles.videoTitle}>{selectedVideo.title}</Text>
          </View>
        </Modal>
      )}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: 20,
    margin: 20,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
    marginLeft: 20,
  },
  videoItem: {
    width: "31%",
    backgroundColor: "#6C63FF",
    padding: 10,
    margin: "1%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1e1e1e",
  },
  videoTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#1e1e1e",
    marginLeft: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingTop: 50,
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
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
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  desc: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
});
