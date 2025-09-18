import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type AgeScreenNavProp = StackNavigationProp<RootStackParamList, "Age">;

type Props = {
  navigation: AgeScreenNavProp;
};

export default function AgeScreen({ navigation }: Props) {
  const [age, setAge] = useState<string>("");

  const handleValidation = () => {
    const ageNum = parseInt(age);

    if (isNaN(ageNum)) {
      alert("Invalid Input, Please enter a valid number in the space provided");
      return;
    }

    else if (ageNum < 18) {
      alert("Access Denied, You have to be 18 or older to proceed forward");
      return;
    }

    else if (ageNum >= 18 && ageNum < 21) {
      alert("Imformed, You are 18 or older but only users above 21 can choose movies");
      return;
    }

    else if (ageNum >= 21) {
      navigation.navigate("Movie");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please enter Your Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TouchableOpacity style={styles.button} onPress={handleValidation}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#c3d8d8ff", 
    padding: 20, 
    borderRadius: 10 
  },

  title: {
   fontSize: 22, 
   fontWeight: "bold", 
   textAlign: "center", 
   color: "#2a585cff", 
   textDecorationLine: "underline", 
   marginBottom: 50,
   },

  input: { 
    width: "30%", 
    borderWidth: 3, 
    borderColor: "#6f99b4ff",
     borderRadius: 8, 
     padding: 10, 
     marginBottom: 20, 
      backgroundColor: "#7bbfdfff",
    },

  button: {
   backgroundColor: "#3d7da1ff",
    padding: 12, 
    borderRadius: 8, 
    width: "40%", 
    alignItems: "center", 
  marginTop: 10,
  },

  buttonText: { 
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 16, 
    textAlign: "center"
  },
});