import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

const CityItem = (props) => {
    return (
        

        <TouchableOpacity style={styles.item.container} onPress={props.onCitySelect}>
            
            <Text style={styles.item.cityName}>{props.data}</Text>
             
        </TouchableOpacity>
    )
}

export { CityItem }