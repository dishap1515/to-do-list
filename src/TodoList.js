import React, { Component } from 'react';

export default class TodoList extends Component {
    render() {
      return (
        <div classname="todolistMain">
          <div classname="header">
            <form>
              <input placeholder="enter task">
              </input>
              <button type="submit">add</button>
            </form>
          </div>
        </div>
      );
    }
  }