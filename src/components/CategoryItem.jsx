import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Card from './Card'

const CategoryItem = ({ category, navigation }) => {
  return (
    <TouchableOpacity onPress={() =>navigation.navigate('Productos', {category})}>
    <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
    </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 5,
        marginVertical: 4,
        paddingVertical: 30,
        paddingLeft: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 15,
    }
})