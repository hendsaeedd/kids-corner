import React, { useState, useRef } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

const pictures = [
  {
    id: 1,
    uri: require("../assets/skip/img1.png"),
    title: "Read",
    desc: "A lot of games on your favorite topics!",
  },
  {
    id: 2,
    uri: require("../assets/skip/img2.png"),
    title: "Explore",
    desc: "Big library of different stories and videos!",
  },
  {
    id: 3,
    uri: require("../assets/skip/img3.png"),
    title: "Grow",
    desc: "Earn start and grow your own mosnter!",
  },
];

const Hello = () => {
  const [autoplay, setAutoplay] = useState(true);
  const swiperRef = useRef(null);
  const navigation = useNavigation();

  const handleSkip = () => {
    swiperRef.current.scrollBy(1, true);
  };

  const handleContinue = () => {
    setAutoplay(true);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        autoplay={autoplay}
        autoplayTimeout={2000} // set autoplay timeout to 2 seconds
        loop={true}
      >
        {pictures.map((picture) => (
          <View key={picture.id}>
            <Image source={picture.uri} style={styles.image} />
            <Text style={styles.title}>{picture.title}</Text>
            <Text style={styles.desc}>{picture.desc}</Text>
            <TouchableOpacity onPress={handleContinue} style={styles.button}>
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSkip}>
              <Text
                style={{
                  textAlign: "center",
                  color: "#eee",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Swiper>
      {!autoplay && <View></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e1e1e",
    padding: 20,
    // backgroundColor: "#1e1e1e",
  },
  image: {
    width: 400,
    height: 300,
    marginTop: 100,
  },
  button: {
    backgroundColor: "#6C63FF",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#6C63FF",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 30,
    color: "#fff",
    textAlign: "center",
  },
  desc: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 70,
    marginLeft: 60,
    marginRight: 60,
    color: "#fff",
    textAlign: "center",
  },
});

export default Hello;