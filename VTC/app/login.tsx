import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { router } from "expo-router";


export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            //try to sign in with Firebase Authentication
            await signInWithEmailAndPassword(auth, email, password);
            router.replace("/main");
        } 
        catch (error) {
            console.error("Login error: ", error);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Login</Text>
                </View>

                <View style={styles.inputContainer}>

                    {/* Email Input */}
                    <TextInput style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#666"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    {/* Password Input */}
                    <TextInput style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                {/* Login button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style ={styles.buttonText}>Login</Text>
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
  titleContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    flex: 1, 
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "flex-end", 
    paddingBottom: 30, 
  },
  title: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    padding: 15,
    borderColor: "#6d37ed", 
    borderWidth: 2, 
    borderRadius: 8, 
    marginVertical: 10,
  },
  button: {
      backgroundColor: "#6d37ed",
      padding: 10,
      marginVertical: 10,
      borderRadius: 8,
      alignItems: "center",

  },
  buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
  },
});