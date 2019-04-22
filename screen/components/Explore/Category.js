import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
        <View style={{flex:2}}>
        <Image source={this.props.ImageUrl}
            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}                          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
            <Text>{this.props.name}</Text>
        </View>

      </View>
    );
  }
}

export default Category;
