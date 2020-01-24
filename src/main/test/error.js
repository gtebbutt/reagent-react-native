import React, { Component } from "react";
import { Text } from "react-native";

class myComponent extends React.Component {
  render() {
    return React.createElement(Text, null, "Test Text");
  }
}

export { myComponent };
