import React, { useContext, useEffect } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Context } from '../context/BlogContext'
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';


const ShowScreen = ({navigation, route}) => {

    console.log(navigation);
    console.log(route);
    
    
    const navigations = useNavigation();

    const id = route.params.id

    const {state} = useContext(Context)

    console.log(state);
    console.log(id);

    //Wrong code. Set options argument is object. not a function.
//    useEffect(() => {
//         navigation.setOptions(() => ({
//             headerTitle: "Bilal",
//             headerRight: (props) => <Text>New</Text>
//         }))
//     }, [])

    
    //DOnt declare it ouside of useEffect.
    // navigation.setOptions({ 
    //     headerRight: (props) => <Text>New</Text>
    //   })

    useEffect(()=>{
        navigation.setOptions({ 
            headerRight: () => <TouchableOpacity onPress={() => { navigation.navigate('Edit', {id})
            }}>
                    <EvilIcons name="pencil" size={35} color="black" />
                </TouchableOpacity>
        })
    },[])
    

    //const blog = state.filter((item) => item.id === id)?.[0]
    const blog = state.find((item) => item.id === id)

    console.log(blog);
    

  return (
    <View>
      <Text>{blog.title} </Text>

      <Text>{blog.content}</Text>
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({

})