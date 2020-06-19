import React from 'react'
import { View, TextInput } from 'react-native'

import styles from '../styles'

const SearchBar = (props) => {
    return (
        <View style={styles.searchBar.container}>
            <TextInput
                onChangeText={props.onSearch}
                placeholder="Search.."
                placeholderTextColor= '#bcbcbc'
                autoCorrect = {false}
            />
        </View>
    )
}

export { SearchBar }