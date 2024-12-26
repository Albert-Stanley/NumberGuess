import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.conatainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 16,
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 34,
    fontWeight: "bold",
  },
});

export default NumberContainer;
