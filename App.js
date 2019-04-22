import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screen/Explore'
import Inbox from './screen/Inbox'
import Saved from './screen/Saved'
import Trips from './screen/Trips'
import Profile from './screen/Profile'
 

export default createBottomTabNavigator({
Explore:{
screen: Explore,
navigationOptions:{
  tabBarLabel:'EXPLORE',

  tabBarIcon : ({tintColor}) => (
        <Icon name="ios-search" color={tintColor} size={24} />
  )
}
},
Saved:{
screen:Saved,
navigationOptions:{
  tabBarLabel:'SAVED',

  tabBarIcon : ({tintColor}) => (
        <Icon name="ios-heart" color={tintColor} size={24} />
  )
}
},
Trips:{
screen: Trips,
navigationOptions:{
  tabBarLabel:'TRIPS',

  tabBarIcon : ({tintColor}) => (
<Image source={require('./assets/airbnb.png')} style={{height: 24, width: 24 , tintColor: tintColor}} /> 

)
}
},
Inbox: {

screen: Inbox,
navigationOptions:{
  tabBarLabel:'Inbox',

  tabBarIcon : ({tintColor}) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
  )
}
},
Profile: {

  screen: Profile,
  navigationOptions:{
    tabBarLabel:'PRoFILE',
  
    tabBarIcon : ({tintColor}) => (
          <Icon name="ios-person" color={tintColor} size={24} />
    )
  }
  }


},{
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style:{
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowColor:'black',
      shadowOffset:{width: 5, height:3},
      shadowOpacity: 0.5,
      elevation: 5

    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
