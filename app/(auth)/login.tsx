import Button from "@/components/Button";
import TextField from "@/components/textField";
import { StyleSheet, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <TextField placeholder="Email address" keyboardType="email-address"/>
      <TextField placeholder="Pasword" secureTextEntry/>
      <Button title="Log in" onPress={() => console.log('Logging in')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
  },
});
