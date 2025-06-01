import { StyleSheet, Text, View } from "react-native";

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>NavBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    elevation: 4, // for Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default NavBar;
