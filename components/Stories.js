import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const stories = [
  {
    "id": "1",
    "title": "The Lion and the Fox",
    "story": "Some Dogs found the skin of a Lion and furiously began to tear it with their teeth. A Fox chanced to see them and laughed scornfully. \"If that Lion had been alive,\" he said, \"it would have been a very different story. He would have made you feel how much sharper his claws are than your teeth.\"",
    "moral": "It is easy and also contemptible to kick a man that is down.",
    "image": require("../assets/stories/one.png"),
  },
  {
    "id": "2",
    "title": "The Lark and Her Young Ones",
    "story": "A Lark made her nest in a field of young wheat. As the days passed, the wheat stalks grew tall and the young birds, too, grew in strength. Then one day, when the ripe golden grain waved in the breeze, the Farmer and his son came into the field. \"This wheat is now ready for reaping,\" said the Farmer. \"We must call in our neighbors and friends to help us harvest it.\" The young Larks in their nest close by were much frightened, for they knew they would be in great danger if they did not leave the nest before the reapers came. When the Mother Lark returned with food for them, they told her what they had heard. ",
    "moral": "Self-help is the best help.",
    "image": require("../assets/stories/one.png"),
  },
  {
    "id": "3",
    "title": "The Fighting Cocks and the Eagle",
    "story": "Once there were two Cocks living in the same farmyard who could not bear the sight of each other. At last one day they flew up to fight it out, beak and claw. They fought until one of them was beaten and crawled off to a corner to hide. The Cock that had won the battle flew to the top of the hen-house, and, proudly flapping his wings, crowed with all his might to tell the world about his victory. But an Eagle, circling overhead, heard the boasting chanticleer and, swooping down, carried him off to his nest. His rival saw the deed, and coming out of his corner, took his place as master of the farmyard.",
    "moral": "Pride goes before a fall.",
    "image": require("../assets/stories/one.png"),
  },
  {
    "id": "4",
    "title": "The Porcupine and the Snakes",
    "story": "A Porcupine was looking for a good home. At last he found a little sheltered cave, where lived a family of Snakes. He asked them to let him share the cave with them, and the Snakes kindly consented. The Snakes soon wished they had not given him permission to stay. His sharp quills pricked them at every turn, and at last they politely asked him to leave. \"I am very well satisfied, thank you,\" said the Porcupine. \"I intend to stay right here.\" And with that, he politely escorted the Snakes out of doors. And to save their skins, the Snakes had to look for another home.",
    "moral": "Give a finger and lose a hand.",
    "image": require("../assets/stories/one.png"),
  },
  {
    "id": "5",
    "title": "The Dog and His Master's Dinner",
    "story": "A Dog had learned to carry his master's dinner to him every day. He was very faithful to his duty, though the smell of the good things in the basket tempted him. The Dogs in the neighborhood noticed him carrying the basket and soon discovered what was in it. They made several attempts to steal it from him. But he always guarded it faithfully. Then one day all the Dogs in the neighborhood got together and met him on his way with the basket. The Dog tried to run away from them. But at last he stopped to argue. That was his mistake. They soon made him feel so ridiculous that he dropped the basket and seized a large piece of roast meat intended for his master's dinner. \"Very well,\" he said, \"you divide the rest.\"",
    "moral": "Do not stop to argue with temptation.",
    "image": require("../assets/stories/one.png"),
  },
  {
    "id": "6",
    "title": "The Sheep and the Pig",
    "story": "One day a shepherd discovered a fat Pig in the meadow where his Sheep were pastured. He very quickly captured the porker, which squealed at the top of its voice the moment the Shepherd laid his hands on it. You would have thought, to hear the loud squealing, that the Pig was being cruelly hurt. But in spite of its squeals and struggles to escape, the Shepherd tucked his prize under his arm and started off to the butcher's in the market place. The Sheep in the pasture were much astonished and amused at the Pig's behavior, and followed the Shepherd and his charge to the pasture gate. \"What makes you squeal like that?\" asked one of the Sheep. \"The Shepherd often catches and carries off one of us. But we should feel very much ashamed to make such a terrible fuss about it like you do.\" \"That is all very well,\" replied the Pig, with a squeal and a frantic kick. \"When he catches you he is only after your wool. But he wants my bacon! gree-ee-ee!\"",
    "moral": "It is easy to be brave when there is no danger.",
    "image": require("../assets/stories/one.png"),
  },
  {
    "id": "7",
    "title": "The Peacock",
    "story": "The Peacock, they say, did not at first have the beautiful feathers in which he now takes so much pride. These, Juno, whose favorite he was, granted to him one day when he begged her for a train of feathers to distinguish him from the other birds. Then, decked in his finery, gleaming with emerald, gold, purple, and azure, he strutted proudly among the birds. All regarded him with envy. Even the most beautiful pheasant could see that his beauty was surpassed. Presently the Peacock saw an Eagle soaring high up in the blue sky and felt a desire to fly, as he had been accustomed to do. Lifting his wings he tried to rise from the ground. But the weight of his magnificent train held him down. Instead of flying up to greet the first rays of the morning sun or to bathe in the rosy light among the floating clouds at sunset, he would have to walk the ground more encumbered and oppressed than any common barnyard fowl.",
    "moral": "Do not sacrifice your freedom for the sake of pomp and show.",
    "image": require("../assets/stories/one.png"),
    }
];

const StoryListItem = ({ story, onPress }) => {

  return (
    <ScrollView>
    <TouchableOpacity style={styles.storyContainer} onPress={onPress}>
      <Image source={story.image} style={styles.storyImage} />
      <Text style={styles.storyTitle}>{story.title}</Text>
    </TouchableOpacity>
    </ScrollView>
  );
};

const Stories = () => {
  
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryPress = (story) => {
    setSelectedStory(story);
  };

  const handleClose = () => {
    setSelectedStory(null);
  };

  const [data, setData] = useState([]);

useEffect(() => {
  axios.get('https://shortstories-api.onrender.com/')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

  return (
    <ScrollView style={styles.all}>
    <View>
      <Text style={styles.title}>Stories</Text>
      <View>
      <Text>{data.title}</Text>
    </View>
      <Image
        source={require("../assets/stories/story.png")}
        style={{ width: 200, height: 200, marginLeft: 100 }}
      />
      <Text style={styles.desc}>Read and listen to classic fairy tales, myths, legends, and adventures.</Text>
      {stories.map((story) => (
        <StoryListItem
          key={story.id}
          story={story}
          onPress={() => handleStoryPress(story)}
        />
      ))}
      <Modal visible={selectedStory !== null} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Icon name="times" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>
            {selectedStory ? selectedStory.title : ""}
          </Text>
          <Text style={styles.modalContent}>
            {selectedStory ? selectedStory.story : ""}
          </Text>
          <Text style={styles.moral}>
            <Text style={styles.moralTitle}>Moral :  </Text>
            {selectedStory ? selectedStory.moral : ""}
          </Text>
        </View>
      </Modal>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
    marginLeft: 20,
  },
  storyContainer: {
    flexDirection: "row",
    backgroundColor: "#00A5A0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  storyImage: {
    width: 40,
    height: 40,
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    padding: 20,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  modalContent: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#00A5A0",
    padding: 20,
    borderRadius: 30,
  },
  moral: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  moralTitle: {
    color: "#00A5A0",
    fontSize: 20,
    fontWeight: "bold",
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
  desc: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
});

export default Stories;
