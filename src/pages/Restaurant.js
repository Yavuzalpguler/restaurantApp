import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { SafeAreaView, View, Text, Button, FlatList, ActivityIndicator, TextInput, Alert, TouchableOpacity } from 'react-native'

import { RestaurantItem } from '../components/index'
import { SearchBar } from '../components/SearchBar'
import styles from '../styles'

const restaurants = props => {
  const [originalList, setOriginalList] = useState([])
  const [myList, setList] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() =>{
    fetchData()
  }, [])


  const fetchData = async () => {

    
    setLoading(true)
    let response = await axios.get(`https://opentable.herokuapp.com/api/restaurants?city=${props.route.params.cityID}`)
    setList(response.data['restaurants'])
    setOriginalList(response.data['restaurants'])
    setLoading(false)
    console.log(response.data['restaurants'])
    
    


   
    
  }

  const renderCities = ({ item }) => {
    return(
      <RestaurantItem data={item} onRestaurantSelect= {() => restaurantSelect(item)}/>
    )

    }

  function restaurantSelect(restaurant) {
    props.navigation.navigate("DetailsPage" , {restaurantID: restaurant.id})
    console.log(restaurant.id)
  }


 



  const searchCities = (text) => {
    let filteredList = originalList.filter(function (item){
      const itemData = item.name.toUpperCase()
      const textData = text.toUpperCase()

      return itemData.indexOf(textData) > -1
    })
    setList(filteredList)
  }

  return (
    <SafeAreaView style={styles.main.container}>
      <View style={{ flex: 1 }}>


        <View style={styles.searchBar.container}>
          <SearchBar onSearch={searchCities}
          />
        
        </View>
            

            <FlatList
              refreshing = {loading}
              onRefresh = {fetchData}
              keyExtractor={(item, index) => index.toString()}
              data={myList}
              
              renderItem={renderCities}
              
            />
        
        
        </View>
        
    </SafeAreaView>
  )
}

export default restaurants