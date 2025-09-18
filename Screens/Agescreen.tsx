import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
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
      alert("Invalid Input, Please enter a valid number");
      return;
    }

    else if (ageNum < 18) {
      alert("Access Denied, You must be 18 or older to proceed");
      return;
    }

    else if (ageNum >= 18 && ageNum < 21) {
      alert("Notice, You are over 18, but only users above 21 can choose movies");
      return;
    }

    else if (ageNum >= 21) {
      navigation.navigate("Movie");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter age"
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
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f4f4f4" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { width: "70%", borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 20 },
  button: { backgroundColor: "#007bff", padding: 12, borderRadius: 8, width: "50%", alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" }
});