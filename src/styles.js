import { StyleSheet, Dimensions, Appearance } from 'react-native'

const userColor = Appearance.getColorScheme()
 
const styles = {
    main: StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: userColor === "light" ? "#6d6d6d" : "#37474f"
        }
    }),
    item: StyleSheet.create({
        container: {
            borderRadius: 10,
            margin: 5,
            padding: 10,
            backgroundColor: '#212121',
        },
        cityName: {
            fontSize: 20,
            fontWeight: 'bold',
            color: userColor === "light" ? "#7da453" : "white"
        },
        image: {
            height: Dimensions.get("window").height / 2,
            
            resizeMode: "contain"
        },
        address: {
            color: 'gray'
        },
        details: {
            backgroundColor: '#212121',
            color: '#7da453',
            margin: 5,
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        detailsName: {
            backgroundColor: '#212121',
            color: '#7da453',
            fontSize: 20,
            fontWeight: 'bold',
            margin: 5,
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }

        
    }),
    searchBar: StyleSheet.create({
        container: {
            backgroundColor: '#494949',
            color: 'gray',
            margin: 10,
            padding: 10,
            borderRadius: 100,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,

            elevation: 24,
        }
    }),
    
    
}

export default styles