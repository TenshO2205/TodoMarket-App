import { FlatList, StyleSheet } from 'react-native'
import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Search from '../components/Search'
import {colors} from '../global/colors'

const ProductsByCategoryScreen = ({category, returnHomeHandlerEvent}) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const productFilterByCategory = products_data.filter(product=>product.category===category)
    const productsFiltered = productFilterByCategory.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFiltered)
  },[category, search])

  const renderProductItem = ({item}) => (
    <ProductItem product={item} />
  )

  const onSearch = (search) => {
    setSearch(search)
  }
  return (
    <>
      <Header tittle='Productos' returnHomeHandlerEvent={returnHomeHandlerEvent}/>
      <Search onSearchHandlerEvent={onSearch}/>
      <FlatList
      style={styles.listWrapper}
      data={productsByCategory}
      renderItem={renderProductItem}
      keyExtractor={item=>item.id} 
      />
    </>
  )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listWrapper:{
      backgroundColor: colors.backgroundList,
    },
})