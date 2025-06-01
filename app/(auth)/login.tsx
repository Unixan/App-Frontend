import Button from "@/components/Button";
import TextField from "@/components/textField";
import api from "@/util/API-helper";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });

      await SecureStore.setItemAsync("token", response.data.token);
      Alert.alert("Success", "Login successful");

      router.replace("/login-successfull");
    } catch (error: any) {
      const errorMsg = error.response?.data?.detail || "Unknown error";

      if (errorMsg === "Email not verified.") {
        router.replace("/email-not-verified");
      } else {
        console.error(errorMsg);
        Alert.alert("Login Failed", errorMsg);
      }
    }
  };
  return (
    <View style={styles.container}>
      <TextField
        placeholder="Email address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextField
        placeholder="Pasword"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Log in" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default LoginScreen;
