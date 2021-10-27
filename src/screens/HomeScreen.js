import React, { useEffect } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

const HomeScreen = ({navigation}) => {

    const renderBtnHamburguer = () => {
        return (
            <Button title="Menú" onPress={ () => navigation.toggleDrawer() } />
        )
    }

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => renderBtnHamburguer()
        })
    }, [])

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button
                title="Ir a Screen 1"
                onPress={ () => navigation.navigate('Screen1') }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20
    }
})

export default HomeScreen
