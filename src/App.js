import { connect } from "react-redux";
import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import styles from "./App.module.css";
import operations from "./redux/operations";

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <>
        <div className={styles.appConteiner}>
          <h1 className={styles.text}>Phonebook</h1>
          <ContactForm />
          <h2 className={styles.text}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContact: () => dispatch(operations.fetchContact()),
});

export default connect(null, mapDispatchToProps)(App);
