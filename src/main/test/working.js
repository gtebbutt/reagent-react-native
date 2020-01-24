import React, { Component } from "react";
import { Text } from "react-native";

function myComponent() {
  return React.createElement(Text, null, "Test Text");
}

export { myComponent };
