import { Text, View, StyleSheet} from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style = {styles.text}>FUCKKK YEAHHH BITCH UR SO GOOD AT WHAT YOU DO</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#5c111e",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "#9fe890",
    },
  });