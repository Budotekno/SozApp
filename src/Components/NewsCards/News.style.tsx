import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        borderRadius:10,
    },
    image:{
        height:Dimensions.get("window").height/4,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        color:'black'
    },
    description:{
        marginTop:5,
        textAlign:'justify'

    },
    inner_conteiner:{
        padding:5,
    },
    author:{
        marginTop:5,
        fontStyle:'italic',
        textAlign:'right'
    }

});

export default styles;