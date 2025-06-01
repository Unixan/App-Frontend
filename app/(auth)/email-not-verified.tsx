import { StyleSheet, Text, View } from 'react-native';

const EmailNotVerifiedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email Not Verified Screen</Text>
    </View>
  );
}

export default EmailNotVerifiedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

