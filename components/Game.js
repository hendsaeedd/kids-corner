import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WORDS = [
  'APPLE',
  'BANANA',
  'CARROT',
  'DRAGON',
  'ELEPHANT',
  'FROG',
  'GUITAR',
  'HAPPY',
  'ICE CREAM',
  'JUNGLE',
  'KITE',
  'LION',
  'MONKEY',
  'NINJA',
  'OCTOPUS',
  'PIRATE',
  'QUEEN',
  'ROBOT',
  'SUNFLOWER',
  'TIGER'
];
const MAX_GUESSES = 6;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const Game = () => {
  const [word, setWord] = useState(pickWord());
  const [guesses, setGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  const maskedWord = getMaskedWord(word, guesses);

  const handleGuess = (letter) => {
    if (!guesses.includes(letter)) {
      setGuesses([...guesses, letter]);
      if (!word.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
  };

  const handleNewGame = () => {
    setWord(pickWord());
    setGuesses([]);
    setIncorrectGuesses(0);
  };

  const isGameOver = incorrectGuesses >= MAX_GUESSES;
  const hasWon = !maskedWord.includes('_');

  return (
    <View style={styles.container}>
      <Text style={styles.word}>{maskedWord}</Text>
      <View style={styles.buttonsContainer}>
        {ALPHABET.split('').map((letter) => (
          <TouchableOpacity
            key={letter}
            style={styles.button}
            onPress={() => handleGuess(letter)}
            disabled={isGameOver || hasWon || guesses.includes(letter)}
          >
            <Text style={styles.buttonText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {isGameOver && (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>Game over! The word was "{word}".</Text>
          <TouchableOpacity style={styles.newGameButton} onPress={handleNewGame}>
            <Text style={styles.newGameButtonText}>New game</Text>
          </TouchableOpacity>
        </View>
      )}
      {hasWon && (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>Congratulations! You won!</Text>
          <TouchableOpacity style={styles.newGameButton} onPress={handleNewGame}>
            <Text style={styles.newGameButtonText}>New game</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const pickWord = () => {
  const index = Math.floor(Math.random() * WORDS.length);
  return WORDS[index];
};

const getMaskedWord = (word, guesses) => {
  let maskedWord = '';
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (guesses.includes(letter)) {
      maskedWord += letter;
    } else {
      maskedWord += '_';
    }
    maskedWord += ' ';
  }
  return maskedWord.trim();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FD5467',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#FD5467',
    borderRadius: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  messageContainer: {
    alignItems: 'center',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
  },
  newGameButton: {
    backgroundColor: '#FD5467',
    padding: 10,
    borderRadius: 5,
  },
  newGameButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Game;