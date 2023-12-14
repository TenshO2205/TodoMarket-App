import { ActivityIndicator } from 'react-native';
import CategoriesScreen from './src/screen/CategoriesScreen'
import ProductsByCategoryScreen from './src/screen/ProductsByCategoryScreen';
import {useFonts} from 'expo-font'
import { useState } from 'react';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')

  const [fontLoaded] = useFonts({
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
    'Karla-Italic': require('./assets/fonts/Karla-Italic.ttf')
  })

  if(!fontLoaded) return <ActivityIndicator/>

  const onSelectCategory = (category) => {
    setCategorySelected(category);
  }

  const onReturnHome = () =>{
    setCategorySelected('')
  }

  return (
    <>
    {
      categorySelected
       ?
       <ProductsByCategoryScreen category={categorySelected} returnHomeHandlerEvent={onReturnHome}/>
       :
       <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
    }
    </>
  );
}