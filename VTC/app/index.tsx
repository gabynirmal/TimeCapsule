import { Text, TouchableOpacity, View, StyleSheet} from "react-native";
import { router } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>App Name</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>Start Creating Your Virtual Time Capsule!</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}  onPress={() => router.push("/login")}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={() => router.push("/signup")}>
              <Text style={styles.buttonText}>Signup</Text>
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
  textContainer: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
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
  text: {
      color: "#000",
      fontSize: 16,
      textAlign: "center",
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