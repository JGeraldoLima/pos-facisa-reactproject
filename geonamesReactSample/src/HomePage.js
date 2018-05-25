import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ListView,
  TouchableHighlight
} from 'react-native';

export class HomePage extends Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {
      title: 'Home'
    };
  };

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name});
    this.state = {
      dataSource: ds.cloneWithRows([{
        name: 'xpto',
        latitude: 'adsad',
        longitude: 'asdsadasd',
        population: '123123'
      },
        {
          name: 'bcvqw',
          latitude: 'dsad',
          longitude: 'asdasda',
          population: '35345345'
        },
        {
          name: 'vbvcbd',
          latitude: 'sadas',
          longitude: 'asdasda',
          population: '87965'
        }]),
      inputSearch: ''
    };

    this.onPressLearnMore = function () {
    };

    return (
      <View style={styles.parentView}>
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>This a most populous country cities
            search ReactNative app. Just insert the code of the country you want to
            search!</Text>
        </View>

        <View style={styles.searchInputView}>
          <TextInput
            placeholder="Country code (ex.: 'BR' for Brazil)"
            onChangeText={(text) => this.setState({text})}
          />
          <Button
            onPress={this.onPressLearnMore}
            title="Search"
            color="#841584"
            accessibilityLabel="Search for cities information"
          />
        </View>

        <View style={styles.listViewWrapper}>
          <ListView dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                      <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Details',
                          {cityData: rowData})}
                        underlayColor="cyan">
                        <View style={styles.listItem}>
                          <Text style={styles.listItemTitle}>{rowData.name}</Text>
                          <Text>{'Population: ' + rowData.name + ' habitants'}</Text>
                        </View>
                      </TouchableHighlight>}
                    renderSeparator={(sectionId, rowId) =>
                      <View key={rowId}
                            style={styles.separator}/>}
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