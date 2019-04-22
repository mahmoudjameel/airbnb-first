//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , SafeAreaView, TextInput, Platform, StatusBar, ScrollView , Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
// create a component
const {width, height } = Dimensions.get('window')
class Explore extends Component {
    componentWillMount() {
        this.startHeaderHeight = 80;
        if (Platform.OS === "android") {
          this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }
      }
    
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
            <View style={{flex:2}}>
               <View style={{height:this.startHeaderHeight, backgroundColor:'white',borderBottomWidth:1 , borderBottomColor:'#dddddd'}}>
               <View style={{flexDirection:'row' , padding: 10, backgroundColor:'white',
                marginHorizontal:20, 
               shadowOffset:{width:0,height:0},
               shadowOpacity: 0.2,
               shadowColor: 'black',
               elevation: 1,
               marginTop: Platform.OS == 'android' ? 30 : null
            
            }}>
               <Icon name="ios-search" size={20} style={{marginRight:10}}/>
               <TextInput
               underlineColorAndroid="transparent"   //android
                placeholder="Try New Delhi" 
               placeholderTextColor="grey"
               style={{flex:1, fontWeight: '700', backgroundColor: 'white'}}
               />


               </View>
               </View>
               <ScrollView
               scrollEventThrottle={16}
               >
               <View style={{flex:1, paddingTop:20, backgroundColor: 'white'}}>

                   <Text style={{fontSize: 24 ,fontWeight:'700', paddingHorizontal:20}} >What can help you find ,Varun?</Text>

                   <View style={{height:130, marginTop: 20}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >
                         <Category 
                            ImageUrl={require('../assets/home.jpg')}
                            name={'Home'}
                         />
                          <Category 
                            ImageUrl={require('../assets/experiences.jpg')}
                            name={'Experiences'}
                         />
                           <Category 
                            ImageUrl={require('../assets/restaurant.jpg')}
                            name={'Restaurant'}
                         />
                         
                    </ScrollView>

                   </View>
                   <View style={{marginTop:40, paddingHorizontal:20}}>

                    <Text style={{fontSize:24, fontWeight: '700'}}>
                           Introducing Airbnb Plus
                        </Text>
                        <Text style={{fontWeight: '100', marginTop: 10}}>
                            A new selection of homes verified for 
                            quality & comfort
                        </Text>
                        <View style={{width: width - 40, height:200, marginTop: 20}}>
                            <Image
                            style={{flex:1, height: null , width: null, resizeMode: 'cover' , borderRadius: 5 , borderWidth: 1, borderColor:'#dddddd'}}
                              source={require('../assets/home.jpg')}
                            />
                        </View>
                   </View>
               </View>


               </ScrollView>
            </View>
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Explore;
