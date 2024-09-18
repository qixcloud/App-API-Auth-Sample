import React, { Component } from "react";
import axios from "axios";
const appId = "[insert appId]";
export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appSettings: "",
    };
  }
  componentDidMount = async () => {
    const response = await axios.post(
      "https://qix.cloud/ajax/app.php",
      {
        appId: appId,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    this.setState({ appSettings: response.data });
  };
  render() {
    return <></>;
  }
}
