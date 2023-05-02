import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SHAPES = [
  { name: 'Circle', icon: '⚪' },
  { name: 'Square', icon: '⬜' },
  { name: 'Triangle', icon: '▲' },
  { name: 'Star', icon: '★' },
  { name: 'Heart', icon: '❤️' },
  { name: 'Diamond', icon: '♦️' },
];

const Matching = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [message, setMessage] = useState('Tap the shapes to match them.');

  useEffect(() => {
    // Generate the list of shapes for the game
    const allShapes = SHAPES.concat(SHAPES);
    const shuffledShapes = shuffle(allShapes);
    setShapes(shuffledShapes);
  }, []);

  const handleSelect = (index) => {
    if (matchedIndexes.includes(index)) {
      // The shape is already matched, do nothing
      return;
    }

    if (selectedIndexes.length === 1 && selectedIndexes[0] === index) {
      // The user tapped the same shape twice, unselect it
      setSelectedIndexes([]);
      return;
    }

    if (selectedIndexes.length === 1) {
      // The user has already selected one shape, check if it matches the current one
      const firstIndex = selectedIndexes[0];
      const firstShape = shapes[firstIndex];
      const currentShape = shapes[index];

      if (firstShape.name === currentShape.name) {
        // The shapes match, mark them as matched and update the message
        setMatchedIndexes(matchedIndexes.concat([firstIndex, index]));
        setSelectedIndexes([]);
        setMessage(`You matched ${firstShape.name}!`);
      } else {
        // The shapes don't match, unselect the first one and update the message
        setSelectedIndexes([index]);
        setMessage(`No match, try again.`);
      }
    } else {
      // The user hasn't selected any shapes yet, select the current one
      setSelectedIndexes([index]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.grid}>
        {shapes.map((shape, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.shape,
              selectedIndexes.includes(index) && styles.selected,
              matchedIndexes.includes(index) && styles.matched,
            ]}
            onPress={() => handleSelect(index)}
            disabled={matchedIndexes.includes(index)}
          >
            <Text style={styles.icon}>{shape.icon}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const shuffle = (array) => {
  // Shuffle an array in-place using the Fisher-Yates algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '90%',
  },
  shape: {
    width: 64,
    height: 64,
    margin: 8,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#FBBEBE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderColor: '#0066cc',
  },
  matched: {
    borderColor: '#00cc66',
    backgroundColor: '#f7f7f7',
  },
  icon: {
    fontSize: 32,
  },
});

export default Matching;