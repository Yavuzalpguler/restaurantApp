import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { SafeAreaView, View, FlatList, Alert } from 'react-native'

import { CityItem} from '../components'
import { SearchBar } from '../components/SearchBar'
import styles from '../styles'

const Main = props => {
  const [originalList, setOriginalList] = useState([])
  const [myList, setList] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() =>{
    fetchData()
  }, [])


  const fetchData = async () => {

    try{
    setLoading(true)
    let response = await axios.get('https://opentable.herokuapp.com/api/cities').catch(err => { throw err})
    setList(response.data['cities'])
    setOriginalList(response.data['cities'])
    setLoading(false)
    
    



    } catch (err) {
      setLoading(false)
      Alert.alert("Error")

    }
    
  }

  const renderCities = ({ item }) => {
    return (
      <CityItem data={item} onCitySelect= {() => citySelect(item)} 

        />
      )
    }


  function citySelect(city) {
    props.navigation.navigate("RestaurantsPage" , {cityID: city})
    console.log(city)
}



  const searchCities = (text) => {
    let filteredList = originalList.filter(function (item){
      const itemData = item.toUpperCase()
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

export default Main