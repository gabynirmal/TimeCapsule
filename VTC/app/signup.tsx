import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { router } from "expo-router";

export default function SignupScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async () => {
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.replace("/main");
        }
        catch (error) {
            console.error("Signup error: ", error);
        }
    };
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Signup</Text>
                </View>

                <View style={styles.inputContainer}>    
                    {/* Email Input */}
                    <TextInput style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                    />
                    
                    {/* Password Input */}
                    <TextInput style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                    />
                    {/* Confirm Input */}
                    <TextInput style={styles.input}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                    />
                </View>

                <View style={styles.buttonContainer}>
                    {/* Signup button */}
                    <TouchableOpacity style={styles.button} onPress={handleSignup}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.rerouteContainer}>
                    {/* Reroute to Login */}
                    <Text onPress = {() => router.push("/login")} style = {{ color: "blue"}}>
                        Already have an account? Log in.
                    </Text>
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
      paddingBottom: 10, 
    },
    rerouteContainer: {
        alignItems: "center",
        paddingBottom: 30
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