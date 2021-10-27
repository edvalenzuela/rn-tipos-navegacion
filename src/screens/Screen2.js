import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'

const Screen2 = ({navigation, route}) => {

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
            headerBackTitle: 'Atras'
        })
    }, []);

    return (
        <View>
            <Text>Screen2</Text>
            <Text>
                { JSON.stringify(params, null, 3) }
            </Text>
            <Button
                title="Volver"
                onPress={ () => navigation.pop() }
            />
            <Button
                title="Volver a Home"
                onPress={ () => navigation.popToTop() }
            />
        </View>
    )
}

export default Screen2
