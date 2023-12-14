import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';

const Search = ({onSearchHandlerEvent}) => {

    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState('')

    const onSearchHandler = (search) =>{
        const regEx = /[^\w\s]/
        if(regEx.test(searchInput)){
            setError('Solo se admiten letras y numeros')
            setSearchInput('')
        }
        else{
            setError('')
            onSearchHandlerEvent(searchInput)
        }
    }

    const onResetSearchHandler =() => {
        setSearchInput("")
        setError("")
        onSearchHandlerEvent(searchInput)
    }

  return (
    <>
    <View style={styles.searchContainer}>
        <TextInput 
        style={styles.textInput}
        onChangeText={setSearchInput}
        placeholder='Buscar producto...'
        value={searchInput}
        />
        <TouchableOpacity onPress={()=>onSearchHandler(searchInput)}>
        <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onResetSearchHandler}>
        <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
    </View>
    {
        error
        ?
        <View style={styles.errorMessageContainer}>
        <Text style={styles.errorText}>{error}</Text>
        </View>
        :
        null
    }
    </>
  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    textInput:{
        width: '80%'
    },
    errorMessageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red'
    }
})