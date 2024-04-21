import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

interface ErrorMessageProps {
  msg: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { msg } = props;
  return (
    <BlurView intensity={20} style={styles.container} tint="dark" experimentalBlurMethod="dimezisBlurView">
      <Text style={styles.text}>{msg}</Text>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    height: 50,
    justifyContent: "center",
    margin: 50,
    overflow: "hidden",
    borderRadius: 15,
  },
  text: {
    color: "rgb(229, 122, 22)",
    fontWeight: "700",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
  },
});
