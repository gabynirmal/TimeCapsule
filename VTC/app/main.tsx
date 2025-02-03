import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from "expo-router";

export default function HomeScreen() {
    return (
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            
            <View>
                <Text style = {styles.text}>Search</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => router.push("/newP")}>
                <Text style={styles.buttonText}>New Time Capsule</Text>
                <Image 
                source={require("../assets/images/plus.png")}
                style={styles.newPImage}/>
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
    button: {
      backgroundColor: "#6d37ed",
      padding: 10,
      marginVertical: 10,
      borderRadius: 8,
      alignItems: "center",
    },
    newPImage: {
      width: 100,
      height: 100,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
      paddingBottom: 10,
    },
    navButton: {
      padding: 10,
    },
    navText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  
  });