import React, { Component } from "react";
import axios from "axios";
const token = "ukBwTty0cGvQ";
export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appSettings: "",
    };
  }
  componentDidMount = async () => {
    const params = new FormData();
    params.append("act", "get");
    params.append("token", token);
    axios({
      method: "post",
      url: "https://qix.cloud/ajax/app_settings.php",
      data: params,
    }).then((res) => {
      this.setState({ appSettings: res.data });
    });
  };
  render() {
    return <></>;
  }
}
