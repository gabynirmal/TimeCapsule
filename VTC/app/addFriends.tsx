import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from "expo-router";
import { useState } from "react";


export default function HomeScreen() {
    const [friendEmail, setFriendEmail] = useState("");


    return (
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            
           <View style={styles.titleContainer}>
                      <Text style={styles.title}>Add Your Friends</Text>
            </View>

             
            <View style={styles.inputContainer}>
            
            {/* Email Input */}
            <TextInput style={styles.input}
                placeholder="Friend's Email"
                placeholderTextColor="#666"
                value={friendEmail}
                onChangeText={setFriendEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            </View>


            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => router.push("/addFriends")}>
                <Text style={styles.buttonText}>Add Friends</Text>
              </TouchableOpacity>
            </View>

          </SafeAreaView>
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.navButton} onPress={() => router.push("/main")}>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => router.push("/friends")}>
                <Text style={styles.navText}>Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => router.push("/main")}>
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
        </View>
          
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
      paddingBottom: 70,
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "flex-start", 
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        height: 80,
        width: "100%",
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        
    },
    text: {
      fontWeight: "bold"
    },
    title: {
        color: "#000",
        fontSize: 30,
        fontWeight: "bold",
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
    navButton: {
      padding: 10,
    },
    navText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    inputContainer: {
        flex: 1, 
        justifyContent: "center",
    },
  });