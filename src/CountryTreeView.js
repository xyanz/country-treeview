import React, { Component } from 'react';
import TreeView from 'react-treeview';
import axios from 'axios';






// For the sake of simplicity, we're gonna use `defaultCollapsed`. Usually, a
// [controlled component](http://facebook.github.io/react/docs/forms.html#controlled-components)
// is preferred.
class CountryTreeView extends Component{
  state = {
    data: null,
  }

  componentWillMount () {
    axios.get('https://raw.githubusercontent.com/curran/data/gh-pages/un/placeHierarchy/countryHierarchy.json')
    .then((response) => {
      console.log('response ', response.data.children)
      this.setState({
        data: response.data.children
      })
    })
  }
  render() {
    let onlineData = <p>loading...</p>
    if (this.state.data) { 
      onlineData = <div>
        {this.state.data.map((node, i) => {
          const continentName = node.data.id;
          const label = <span className="node">{continentName}</span>;
          return (
            <TreeView key={i} nodeLabel={label} defaultCollapsed={false}>             
              {node.children.map(subregion => {
                const subregionName = subregion.data.id
                const label2 = <span className="node">{subregionName} </span>;
                return (
                  <TreeView key={subregion.data.id} nodeLabel={label2} defaultCollapsed={false}>
                  {console.log("subregion: ", subregion)}
                    { (subregion.children) ? subregion.children.map(country => {
                      const label3 = <span className="node">{country.data.id}</span>;
                      return (
                        <div className="info">{label3}</div>
                      )
                    }) : null}
                    </TreeView>
                )
              })}
            </TreeView>
          
          )
        })}
      </div>
    }
      return (
      <div>
        {onlineData}
      </div>
    );
  }
}

export default CountryTreeView;


