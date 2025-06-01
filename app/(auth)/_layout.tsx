// app/(auth)/_layout.tsx
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen
        name="create-account"
        options={{ title: "Create Account" }}
      />
      <Stack.Screen
        name="email-not-verified"
        options={{ title: "Email Not Verified" }}
      />
      <Stack.Screen
        name="login-successfull"
        options={{ title: "Login Success" }}
      />
    </Stack>
  );
};

export default AuthLayout