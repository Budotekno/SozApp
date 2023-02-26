import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./News.style";

const NewsCards = ({news}:any)=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: news.imageUrl}} /> 
            <View style={styles.inner_conteiner}>
                <Text style={styles.title}>{news.author}</Text>
                <Text style={styles.description}>{news.description}</Text>
                <Text style={styles.author}>{news.title}</Text>
            </View>

        </View>
    );
};

export default NewsCards;