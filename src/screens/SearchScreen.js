import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SearchBar } from '../components/SearchBar'
import useResults from '../hooks/useResults'
import { ResultsList } from '../components/ResultsList'

export const SearchScreen = () => {

  const [term,setTerm] = useState('')
  const [results,errorMessage,searchApi ] = useResults()

  const filterByPrice = (price) => {
    return results.filter(item=>item.price === price)
  }
  
  return (
    <View style={{flex : 1}}>
        <SearchBar 
            term = {term}  
            onTermChange={setTerm}
            onTermSubmit = {() => searchApi(term)}
        />
        { errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList results={filterByPrice('$')} title='Cost effective'/>
            <ResultsList results={filterByPrice('$$')} title='Bit Pricier'/>
            <ResultsList results={filterByPrice('$$$')} title='Expensive'/>
            <ResultsList results={filterByPrice('$')} title='Cost effective'/>
            <ResultsList results={filterByPrice('$$')} title='Bit Pricier'/>
            <ResultsList results={filterByPrice('$$$')} title='Expensive'/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})
