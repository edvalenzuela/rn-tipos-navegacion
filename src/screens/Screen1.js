import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { Text, View, Button } from 'react-native'

const Screen1 = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Screen1</Text>

            <Button 
                title="Ir a Screen 2 con argumentos"
                onPress={ () => navigation.navigate('Screen2', {
                    id: 1,
                    nombre: 'lorem ipsum'
                }) }
            />
        </View>
    )
}

export default Screen1
