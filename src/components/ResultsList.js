import React from 'react'
import { Text, View,FlatList } from 'react-native'
import ResultDetail from './ResultDetail'

export const ResultsList = ({title,results}) => {
  return (
    <View style={{marginBottom : 10}}>
        <Text style = {{ fontSize : 18, fontWeight : 'bold', marginBottom : 5, marginLeft : 10}}>{title}</Text>
        <FlatList 
            horizontal
            data={results}
            renderItem={({item})=>{
               return  <ResultDetail result={item}/>
            }}
        />
    </View>
  )
}
