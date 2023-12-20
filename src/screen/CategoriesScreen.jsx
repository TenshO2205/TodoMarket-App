import { FlatList, StyleSheet } from 'react-native'
import data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem.jsx'

const CategoriesScreen = ({navigation}) => {

    const renderCategoryItem = ({ item }) => (
        <CategoryItem category={item}  navigation={navigation}/>
    )


  return (
    <>
    <FlatList
    data={data}
    renderItem={renderCategoryItem}
    keyExtractor={item=>item}
    />
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})