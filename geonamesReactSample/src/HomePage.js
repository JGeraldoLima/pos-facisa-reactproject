import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

export class HomePage extends Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {
      title: 'Home'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: [],
      text: ''
    };

    this.onPressSearch = this.onPressSearch.bind(this);
  }

  onPressSearch = function () {
    this.state.isLoading = true;
    let API_URL = 'http://api.geonames.org/searchJSON?username=jgeraldo&country=';
    return fetch(API_URL + this.state.text)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.geonames,
        }, function () {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };


  render() {
    return (
      <View style={styles.parentView}>
        <ActivityIndicator size="small" color="#0000ff" animating={this.state.isLoading}/>
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>This a most populous country cities
            search ReactNative app. Just insert the code of the country you want to
            search!</Text>
        </View>

        <View style={styles.searchInputView}>
          <TextInput
            onChangeText={(text) => this.setState({text: text})} value={this.props.val}
            placeholder="Country code (ex.: 'BR' for Brazil)"
          />
          <Button
            onPress={this.onPressSearch}
            disabled={this.state.isLoading}
            title="Search"
            color="#841584"
            accessibilityLabel="Search for cities information"
          />
        </View>

        <View style={styles.listViewWrapper}>
          <FlatList data={this.state.dataSource}
                    renderItem={(item) =>
                      <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Details',
                          {cityData: item})}
                        underlayColor="cyan">
                        <View style={styles.listItem}>
                          <Text style={styles.listItemTitle}>{item.item.name}</Text>
                          <Text>{'Population: ' + item.item.population + ' habitants'}</Text>
                        </View>
                      </TouchableHighlight>}
          />
        </View>
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
  searchInputView: {
    flex: 1.25,
    flexDirection: 'column',
    marginTop: 10
  },
  listViewWrapper: {
    flex: 4,
    marginTop: 10
  },
  descriptionView: {
    flex: 0.75
  },
  descriptionText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify'
  },
  listItem: {
    flex: 1,
    padding: 5
  },
  listItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },
  listItemPopulation: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});