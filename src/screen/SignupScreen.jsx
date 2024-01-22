import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import Input from '../components/Input'
import {colors} from '../global/colors'
import { useSignUpMutation } from '../service/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { signupSchema } from '../validations/signupSchema'

const SignupScreen = ({navigation}) => {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const [triggerSignup, result] = useSignUpMutation()

    const onSubmit = () => {
        setEmailError('')
        setPasswordError('')
        setConfirmPasswordError('')
        try{
            signupSchema.validateSync({email, password, confirmPassword}, {abortEarly: false})
            triggerSignup({ email, password })
        } catch (error){
            error.errors.map(e => {
                console.log(Object.keys(e)[0])
                const customError = Object.values(e)[0]
                switch(Object.keys(e)[0]){
                    case "empty_email":
                        setEmailError(customError)
                      case "invalid_email":
                        setEmailError(customError)
                      case "empty_password":
                        setPasswordError(customError)
                      case "invalid_password":
                        setPasswordError(customError)
                      case "invalid_confirm_password":
                        setConfirmPasswordError(customError)
                      case "invalid_match_password":
                        setConfirmPasswordError(customError)
                      default:
                        break
                }
            })
        }
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.data){
            dispatch(setUser(result.data))
        }
    },[result])

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <Input 
      label='Email'
      onChange={setEmail}
      error={emailError}
      />
      <Input
      label='Contaseña'
      onChange={setPassword}
      isSecureEntry={true}
      error={passwordError}
      />
      <Input
      label='Confirmar Contraseña'
      onChange={setConfirmPassword}
      isSecureEntry={true}
      error={confirmPasswordError}
      />
      <TouchableOpacity style={styles.btn} onPress={onSubmit}>
        <Text style={styles.btnText}>Registrarme</Text>
      </TouchableOpacity>
      <View style={styles.altContainer}>
        <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
            <Text style={styles.subtitleLink}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryBack,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 10,
    },
    btn: {
        padding: 10,
        backgroundColor: colors.backgroundList,
        borderRadius: 8,
        margin: 5,
    },
    btnText: {
        color: "#000",
        fontFamily: "Karla-Bold"
    },
    altContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    subtitle: {
        color: "#fff",
        fontFamily: "Karla-Bold",
        fontSize: 12,
    },
    subtitleLink: {
        fontFamily: "Karla-Light",
        color: "#fff",
        fontSize: 11,
        textDecorationLine: 'underline'
    }

})