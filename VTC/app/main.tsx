import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            
            <View style={styles.container}>
                <Text style = {styles.text}>Search</Text>
            </View>

            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>New Project</Text>
                <Image 
                source={require("../assets/images/newProject.png")}
                style={styles.newPImage}/>
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
  });