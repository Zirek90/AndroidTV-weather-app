import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";

interface PressableProps {
  title: string;
  onPress: () => void;
  buttonStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export const Button = (props: PressableProps) => {
  const { title, onPress, disabled, buttonStyles, textStyles } = props;
  return (
    <Pressable
      disabled={disabled}
      style={[styles.button, buttonStyles, disabled && styles.disabledButton]}
      onPress={onPress}
      onFocus={onPress}>
      <Text style={[styles.text, textStyles, disabled && styles.disabledText]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 100,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgb(256, 256, 256)",
  },
  disabledButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  disabledText: {
    color: "rgba(256, 256, 256, 0.5)",
  },
});
