import { FlatList, StyleSheet } from 'react-native'
import CategoryItem from '../components/CategoryItem.jsx'
import { useGetCategoriesQuery } from '../service/shopService.js'

const CategoriesScreen = ({navigation}) => {

    const {data, isLoading, error} = useGetCategoriesQuery()

    const renderCategoryItem = ({ item }) => (
        <CategoryItem category={item}  navigation={navigation}/>
    )


  return (
    <>
    <FlatList style={styles.categories}
    data={data}
    renderItem={renderCategoryItem}
    keyExtractor={item=>item}
    />
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  categories:{
    marginBottom:115,
  }
})