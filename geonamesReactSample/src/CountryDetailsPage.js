import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export class CountryDetailsPage extends Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return {
      title: 'City details'
    };
  };

  render() {
    const {params} = this.props.navigation.state;

    const cityData = params ? params.cityData.item : {
      name: '',
      latitude: '',
      longitude: '',
      population: ''
    };

    return (
      <View style={styles.parentView}>
        <Text style={styles.detailInfoTitle}>Name: <Text
          style={styles.detailInfoText}>{cityData.name}</Text></Text>
        <Text style={styles.detailInfoTitle}>Latitude: <Text
          style={styles.detailInfoText}>{cityData.lat}</Text></Text>
        <Text style={styles.detailInfoTitle}>Longitude: <Text
          style={styles.detailInfoText}>{cityData.lng}</Text></Text>
        <Text style={styles.detailInfoTitle}>Population: <Text
          style={styles.detailInfoText}>{cityData.population} habitants</Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    flexDirection: 'column',
    margin: 10
  },
  detailInfoTitle: {
    fontWeight: 'bold'
  },
  detailInfoText: {
    fontWeight: 'normal'
  }
});