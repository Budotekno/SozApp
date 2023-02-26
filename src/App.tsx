import React from "react";
import {

  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
} from 'react-native';
import news_data from "./news_data.json";
import NewsCards from "./Components/NewsCards/NewsCards";
import news_banner_data from "./news_banner_data.json";

const App = () =>
{

  return(

    
    <View style={styles.container}>

     
      <Text style={styles.banner}>Budotekno</Text>

      <FlatList 
      ListHeaderComponent={()=> (

        <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
        
        {
          news_banner_data.map(i =>(
            <Image  style={styles.bannerImage} source={{uri: i.imageUrl}}/>
            ))
        }
        
      </ScrollView>

    
       
      )

      }
        data={news_data} 
        renderItem={({item})=> <NewsCards news={item} />}
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eceff1',
  },
  bannerImage:{
    height:Dimensions.get('screen').height/4,
    width:Dimensions.get('screen').width/2,

  },
  banner:{
    fontSize:50,
    fontWeight:'bold',
    color:"black",
    fontStyle:'italic',
    textAlign:'center',
    borderBottomWidth:4,
    borderColor:'gray'
  }

  
});
export default App;