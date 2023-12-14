import { FlatList, StyleSheet } from 'react-native'
import Header from '../components/Header.jsx'
import data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem.jsx'

const CategoriesScreen = ({onSelectCategoryEvent}) => {

    const renderCategoryItem = ({ item }) => (
        <CategoryItem category={item}  onSelectCategoryEvent={onSelectCategoryEvent}/>
    )


  return (
    <>
    <Header tittle='Categorias'/>
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