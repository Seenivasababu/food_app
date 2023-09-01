import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={{ marginLeft: 10 }}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>{result.name}</Text>
      <Text>
        {result.rating} stars, {result.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 6,
  },
});

export default ResultDetail;
