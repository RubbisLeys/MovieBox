// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import films from '../Helpers/filmsData.js'  //we import movies from filmsData, from Helpers folder
import FilmItem from './FilmItem.js'         //we import movie items from FilmsItems.js

class Search extends React.Component {
  render() {
    return (
      <View style={ styles.main_container }>
        <TextInput style={ styles.textinput } placeholder='movie title'/>，
        <Button title='Search' onPress={() => {}}/>
        <FlatList
          data={films}  //data={[{key: 'a'}, {key: 'b'}]}
          KeyExtractor={(item) => item.id.toString()}  // KeyExtractor is a  Props
          //--here, we passed the 'film' prop, with the film data, to our component 'FilmItem'
          renderItem={({item}) => <FilmItem film={item}/>} // change {item.key} for {item.title}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1,
  },
  textinput:{
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor:'#000000',
    borderWidth:1,
    paddingLeft: 5
  }
})

export default Search
