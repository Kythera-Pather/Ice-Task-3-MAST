import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

const movies = [
  "1) The Great wall",
  "2) JAWS",
  "3) Tarot",
  "4) Ballerina",
  "5) John Wick"
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
        note = "A group of European mercenaries join the Chinese soldiers to defend the Great Wall from monstrous creatures.";
        break;
      case 2:
        note = "A seaside town is terrorized by a giant man-eating shark, forcing the police chief and hunters to stop it.";
        break;
      case 3:
        note = "A group of friends use a cursed deck of tarot cards and awaken a deadly supernatural force.";
        break;
      case 4:
        note = "A young woman sets out on a journey to become a dancer, facing challenges, sacrifice, and self-discovery.";
        break;
      case 5:
        note = "A retired hitman returns to the criminal underworld to seek vengeance after they killed his dog that was gifted to him by his late wife.";
        break;
      default:
        note = "No note available."; // Fallback (should not hit)
    }

    alert(`Movie Selected, You chose: ${movies[num - 1]}\n\nNote: ${note}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Movie (1–5)</Text>
      {movies.map((movie) => (
        <Text key={movie} style={styles.movieItem}>{movie}</Text>
      ))}
      <TextInput
        style={styles.input}
        placeholder="Enter number between (1-5)"
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
  container:{ 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
     backgroundColor: "#c3d8d8ff", 
     padding: 20, 
     borderRadius: 10, 
    },


  title:{
     fontSize: 22, 
    fontWeight: "bold",
     marginBottom: 15,
     textAlign: "center",
     color: "#2a585cff",
     textDecorationLine: "underline",
      textDecorationStyle: "dashed",
       textDecorationColor: "#474164ff",
     },

  movieItem: {
     fontSize: 18,
     marginVertical: 5, 
      color: "#071d5aff",
       textAlign: "center",
        fontWeight: "bold",
    },

  input: {
     width: "70%", 
     borderWidth: 3, 
     borderColor: "#3d7da1ff", 
     borderRadius: 8, 
     padding: 10, 
     marginVertical: 20,
     backgroundColor: "#75a1b6ff",
     },

  button: {
     backgroundColor: "#50857cff", 
    padding: 12, 
    borderRadius: 8, 
    width: "60%", 
    alignItems: "center",
   },

  buttonText: {
     color: "#fff", 
    fontWeight: "bold", 
    fontSize: 16
  }
});
