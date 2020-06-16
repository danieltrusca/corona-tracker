import React, { Component } from "react";

import { Cards, CountryPicker, Charts } from "./components";
import styles from "./App.module.css";
// import Cards from "./components/Cards/Cards";
// import Charts from "./components/Charts/Charts";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
import fetchData from "./api/index";

import image from "./Images/image.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
