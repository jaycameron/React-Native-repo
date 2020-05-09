import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animated from 'react-native-animatable';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = { title: 'Contact Us' };
  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text> 1 Nucamp Way </Text>
            <Text> Seattle, WA 98001 </Text>
            <Text> U.S.A </Text>
            <Text style={{ bottomMargin: 10 }}> Phone: 1-206-555-1234 </Text>
            <Text> Email: campsite@nucamp.co </Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
