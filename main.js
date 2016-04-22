import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

const performanceNow = require('fbjs/lib/performanceNow');

export default function burnCPU(milliseconds) {
  const start = performanceNow();
  while (performanceNow() < (start + milliseconds)) {}
}

class TouchHandlingAndPointerEvents extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tapCount: 0,
    };
  }

  _handleTap = () => {
    if (this.state.tapCount === 0) {
      burnCPU(2000);
    }

    this.setState({tapCount: this.state.tapCount + 1});
  };

  render() {
    return (
      <View style={styles.container} pointerEvents={this.state.tapCount > 0 ? 'none' : 'auto'}>
        <TouchableHighlight
          style={styles.button}
          onPress={this._handleTap}>
          <Text style={styles.buttonText}>
            Tap me!
          </Text>
        </TouchableHighlight>

        <View style={styles.tapCounter}>
          <Text style={styles.tapCounterText}>
            {this.state.tapCount} taps
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    padding: 20,
    backgroundColor: 'rgba(255, 100, 20, 1)',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  tapCounter: {
    backgroundColor: 'black',
    padding: 15,
    marginTop: 20,
  },
  tapCounterText: {
    color: 'white',
    fontSize: 14,
  }
});

AppRegistry.registerComponent('TouchHandlingAndPointerEvents', () => TouchHandlingAndPointerEvents);
