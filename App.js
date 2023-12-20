import { ActivityIndicator } from 'react-native';
import Navigator from './src/navigation/Navigator';
import {useFonts} from 'expo-font'
import { useState } from 'react';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)

  const [fontLoaded] = useFonts({
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
    'Karla-Italic': require('./assets/fonts/Karla-Italic.ttf')
  })

  if(!fontLoaded) return <ActivityIndicator/>

  const onSelectCategory = (category) => {
    setCategorySelected(category);
  }

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }

  return (

    <Navigator/>

  );
}