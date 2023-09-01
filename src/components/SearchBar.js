import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={28} style={styles.iconStyle} />
      <TextInput
        placeholder="Search..."
        style={{ fontSize: 20 }}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
