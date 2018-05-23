import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ListView
} from 'react-native';

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2',
        'row 2', 'row 2', 'row 2']),
      inputSearch: ''
    };

    this.onPressLearnMore = function () {
    }
  }

  render() {
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
                      <View style={styles.listItem}>
                        <Text style={styles.listItemTitle}>{rowData}</Text>
                        <Text>{'Population: 321321'}</Text>
                      </View>}
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
  },
});