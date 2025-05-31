import { StyleSheet, Text, View } from 'react-native';

function CreateAccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Account Screen</Text>
    </View>
  );
}

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

export default CreateAccountScreen