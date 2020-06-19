import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles'



const RestaurantItem = (props) => {
    return (
        
        <TouchableOpacity style={styles.item.container} onPress={props.onRestaurantSelect} >

            <Image source={{uri: props.data.image_url}}
                style={styles.item.image} />
            
            <Text style={styles.item.cityName}>{props.data.name}</Text>
            <Text style={styles.item.address}>{props.data.address}</Text>
            
        </TouchableOpacity>
    )
}

export { RestaurantItem }