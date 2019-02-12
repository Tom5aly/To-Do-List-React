import React, { Component } from "react";
import TheInput from "./components/toDoInput";
import List from "./components/toDoList";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: ""
  };
  handelChange = e => {
    this.setState({ item: e.target.value });
  };
  handelSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      item: this.state.item
    };
    // console.log(newItem);

    const upDatedItems = [...this.state.items, newItem];

    this.setState({
      items: upDatedItems,
      id: uuid(),
      item: ""
    });
  };
  clear = () => {
    this.setState({ items: [] });
  };

  handelDeletItem = id => {
    const deletedItem = this.state.items.filter(item => item.id !== id);
    this.setState({ items: deletedItem });
  };

  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className=" text-capitalize text-center " id="title1">
              tasks for today!
            </h3>
            <TheInput
              item={this.state.item}
              handelChange={this.handelChange}
              handelSubmit={this.handelSubmit}
            />
            <List
              items={this.state.items}
              clear={this.clear}
              handelDeletItem={this.handelDeletItem}
            />
          </div>
        </div>
        <div className="text-center " style={{ position: "relative" }}>
          <small>
            <b>&copy; Powered by Tamer Aly </b>
          </small>
        </div>
      </div>
    );
  }
}

export default App;
