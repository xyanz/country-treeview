import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from 'react-virtualized-tree';
import 'react-virtualized/styles.css';
import 'react-virtualized-tree/lib/main.css';
import 'material-icons/css/material-icons.css';
import { constructTree } from './ConstructTree';
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';
import CountryTreeView from './CountryTreeView';




class App extends Component {
  render() {
    return (
      <div>
        <CountryTreeView />
      </div>
    );
  }
}

export default App;
