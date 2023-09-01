import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import ResultDetail from "./ResultDetail";

export const ResultsList = ({ title, results, navigation }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 5,
          marginLeft: 10,
        }}
      >
        {title}
      </Text>
      <FlatList
        horizontal
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
