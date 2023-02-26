import React from "react";

import { Text, TouchableOpacity, View,Alert } from "react-native";
import styles from "./Cards.style";

const Cards = (prop:any) =>{
    return(
       
        <View style={styles.cards}>

        <View style={styles.cardHedear}>
          <Text style={styles.cardTitle}>{prop.title}</Text>
          <Text>{prop.text}</Text>
        </View>

        <TouchableOpacity onPress={()=>{Alert.alert("dlfdlfkdlfkl")}}>
          <Text>Beğen</Text>
        </TouchableOpacity>
    </View>
    );
};

export default Cards;