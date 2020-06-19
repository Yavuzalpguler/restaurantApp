import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { SafeAreaView, View, Text, Image, Button, Linking } from 'react-native'

import styles from '../styles'

const Details = props => {

  const [myList, setList] = useState([])
  


  useEffect(() =>{
    fetchData()
  }, [])


  const fetchData = async () => {

    
    
    let response = await axios.get(`https://opentable.herokuapp.com/api/restaurants/${props.route.params.restaurantID}`)


    setList(response.data)
    
    console.log(response.data)
    
    
  }

  function makeReservation (link) {
    link = myList.mobile_reserve_url
    Linking.openURL(link)
    console.log(link)
  }


  



  return (
    <SafeAreaView style={styles.main.container}>
      <View style={{ flex: 1 }}>
            
      <Image source={{uri: myList.image_url}}
                style={styles.item.image} />

      <Text style = {styles.item.detailsName} >{myList.name}</Text>
      <Text style = {styles.item.details} >Adress: {myList.address} </Text>
      <Text style = {styles.item.details} >{myList.area} </Text>
      <Text style = {styles.item.details} >Phone number: {myList.phone}</Text>

      <View style={{ flex: 1 }}>
        <Button title={'Reservation'} onPress={(makeReservation)}/>
      </View>
        
        
     </View>
        
    </SafeAreaView>
  )
}

export default Details