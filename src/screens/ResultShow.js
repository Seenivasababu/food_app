import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yalp";

const ResultShow = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");
 

  const getData = async () => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style = {styles.text} >{result.name}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    image : {
        width : 250,
        height : 150,
        marginLeft : 10,
        marginBottom : 15,
        borderRadius : 10
    },
    text : {
        fontSize : 18,
        fontWeightv : 'bold',
        margin : 15
    }
});

export default ResultShow;
