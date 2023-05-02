import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";

const songs = [
  {
    id: 1,
    title: "Baby Shark🎵",
    url: "https://ringtonedownload.net/wp-admin/audio-user/115669426580497490804/baby-shark.mp3",
  },
  {
    id: 2,
    title: "Friends🎵",
    url: "https://smartkoala.org/uploads/song/8/8_Friends.mp3",
  },
  {
    id: 3,
    title: "Clap your hands together🎵",
    url: "https://smartkoala.org/uploads/song/10/clap-clap-clap-your-hands.mp3",
  },
  {
    id: 4,
    title: "My turtle song🎵",
    url: "https://smartkoala.org/uploads/song/15/i-had-a-little-turtle.mp3",
  },
  {
    id: 5,
    title: "What's Your Name?🎵",
    url: "https://www.dreamenglish.com/name01.mp3",
  },
];

export default function Music() {
  const [soundObjects, setSoundObjects] = useState(
    songs.map((song) => new Audio.Sound()) // initialize sound objects for each song
  );
  const [isPlaying, setIsPlaying] = useState(
    songs.map((song) => false) // initialize all songs to be off
  );


  const handleToggle = async (index) => {
    const newIsPlaying = [...isPlaying];
    const soundObject = soundObjects[index];
    try {
      if (newIsPlaying[index]) {
        await soundObject.pauseAsync();
      } else {
        await soundObject.loadAsync({ uri: songs[index].url });
        await soundObject.playAsync();
      }
      newIsPlaying[index] = !newIsPlaying[index];
      setIsPlaying(newIsPlaying);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.all}>
      <Text style={styles.title}>Music</Text>
      <Image
        source={require("../assets/music/music.png")}
        style={{ width: 200, height: 200, marginLeft: 100 }}
      />
      <Text style={styles.desc}> Play and create music with fun instruments, melodies, rhythms, and harmonies.</Text>
      {songs.map((song, index) => (
        <View key={song.id} style={styles.grid}>
          <Image style={styles.icon} source={require("../assets/music/icon.png")} />
          <Text style={styles.songTitle}>{song.title}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              isPlaying[index] ? styles.buttonOn : styles.buttonOff,
            ]}
            onPress={() => handleToggle(index)}
          >
            <Text style={styles.buttonText}>
              {isPlaying[index] ? "Off" : "On"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
    marginLeft: 10,
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
    backgroundColor: "#FFBD00",
  },
  songTitle: {
    color: "#1e1e1e",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOn: {
    backgroundColor: "#1e1e1e",
  },
  buttonOff: {
    backgroundColor: "#AB7F00",
  },
  buttonText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  icon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
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