import { Modal as RNModal, View, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";

interface ModalProps extends PropsWithChildren {
  modalVisible: boolean;
  handleModal: () => void;
}

export const Modal = ({ children, modalVisible, handleModal }: ModalProps) => {
  const { t } = useTranslation();

  return (
    <RNModal animationType="slide" transparent visible={modalVisible} onRequestClose={handleModal}>
      <View style={styles.centeredView}>
        <View style={styles.container}>
          {children}
          <Button title={t("buttons.close")} onPress={handleModal} />
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 250,
    height: 300,
    backgroundColor: "rgba(0,0,0,0.9)",
    elevation: 5,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
