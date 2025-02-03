import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from "expo-router";
import { useState } from "react";


export default function HomeScreen() {
    const [projectName, setProjectName] = useState("");


    return (
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            
            <View>
                <TextInput style={styles.input} 
                    placeholder="Capsule Name"
                    value={projectName}
                    onChangeText={setProjectName}
                />
            </View>


            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => router.push("/newP")}>
                <Text style={styles.buttonText}>Create</Text>
              </TouchableOpacity>
            </View>

          </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: "flex-end",
    },
    text: {
      fontWeight: "bold"
    },
    button: {
      backgroundColor: "#6d37ed",
      padding: 10,
      marginVertical: 10,
      borderRadius: 8,
      alignItems: "center",
    },
    newPImage: {
      width: 200,
      height: 200,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
    input: {
        padding: 15,
        borderColor: "#6d37ed", 
        borderWidth: 2, 
        borderRadius: 8, 
        marginVertical: 10,
      },
  });