import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface CustomTextInputProps extends TextInputProps {}

const TextField = (props: CustomTextInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput {...props} style={[styles.input]} />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});
