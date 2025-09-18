import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

const movies = [
  "1. The Dark Knight",
  "2. Inception",
  "3. Interstellar",
  "4. The Matrix",
  "5. Avengers: Endgame"
];

export default function MovieScreen() {
  const [choice, setChoice] = useState<string>("");

  const handleMovieChoice = () => {
    const num = parseInt(choice);

    if (isNaN(num) || num < 1 || num > 5) {
      alert("Invalid Choice, Please select a number between 1 and 5");
      return;
    }

    let note = "";

    switch (num) {
      case 1:
        note = "A masterpiece by Christopher Nolan with a legendary Joker performance.";
        break;
      case 2:
        note = "A mind-bending thriller that explores dreams within dreams.";
        break;
      case 3:
        note = "A space epic that questions time, love, and survival.";
        break;
      case 4:
        note = "A sci-fi classic that redefined the genre and introduced 'bullet time'.";
        break;
      case 5:
        note = "The epic finale to the Infinity Saga in the Marvel Universe.";
        break;
      default:
        note = "No note available."; // Fallback (should not hit)
    }

    Alert.alert("Movie Selected", `You chose: ${movies[num - 1]}\n\nNote: ${note}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Movie (1–5)</Text>
      {movies.map((movie) => (
        <Text key={movie} style={styles.movieItem}>{movie}</Text>
      ))}
      <TextInput
        style={styles.input}
        placeholder="Enter number (1-5)"
        keyboardType="numeric"
        value={choice}
        onChangeText={setChoice}
      />
      <TouchableOpacity style={styles.button} onPress={handleMovieChoice}>
        <Text style={styles.buttonText}>Confirm Choice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  movieItem: { fontSize: 18, marginVertical: 5 },
  input: { width: "70%", borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginVertical: 20 },
  button: { backgroundColor: "#28a745", padding: 12, borderRadius: 8, width: "60%", alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" }
});
