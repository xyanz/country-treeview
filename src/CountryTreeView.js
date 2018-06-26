import React, { Component } from 'react';
import TreeView from 'react-treeview';
import axios from 'axios';




// This example data format is totally arbitrary. No data massaging is
// required and you use regular js in `render` to iterate through and
// construct your nodes.
const dataSource = [
  {
    type: 'Asia',
    collapsed: false,
    subregions: [
      {name: 'Southern Asia', collapsed: false,
        countries: [
          {name: 'Afghanistan', collapsed: false},
          {name: 'Bangladesh', collapsed: false},
          {name: 'Bhutan', collapsed: false},
          {name: 'India', collapsed: false},
          {name: 'Iran', collapsed: false},
          {name: 'Maldives', collapsed: false},
          {name: 'Nepal', collapsed: false},
          {name: 'Pakistan', collapsed: false},
          {name: 'Sri Lanka', collapsed: false},
        ]},
      {name: 'Western Asia', collapsed: false,
        countries: [
          {name: 'Armenia', collapsed: false},
          {name: 'Azerbaijan', collapsed: false},
          {name: 'Bahrain', collapsed: false},
          {name: 'Cyprus', collapsed: false},
          {name: 'Georgia', collapsed: false},
          {name: 'Iraq', collapsed: false},
          {name: 'Israel', collapsed: false},
          {name: 'Jordan', collapsed: false},
          {name: 'Kuwait', collapsed: false},

      ]},
    ],
  },
  {
    type: 'Europe',
    collapsed: false,
    subregions: [
      {name: 'Western Europe', collapsed: false,
        countries: [
          {name: 'Afghanistan', collapsed: false},
          {name: 'Bangladesh', collapsed: false},
          {name: 'Bhutan', collapsed: false},
          {name: 'India', collapsed: false},
          {name: 'Iran', collapsed: false},
          {name: 'Maldives', collapsed: false},
          {name: 'Nepal', collapsed: false},
          {name: 'Pakistan', collapsed: false},
          {name: 'Sri Lanka', collapsed: false},
      ]},
      {name: 'Eastern Europe', collapsed: false,
      countries: [
        {name: 'Afghanistan', collapsed: false},
        {name: 'Bangladesh', collapsed: false},
        {name: 'Bhutan', collapsed: false},
        {name: 'India', collapsed: false},
        {name: 'Iran', collapsed: false},
        {name: 'Maldives', collapsed: false},
        {name: 'Nepal', collapsed: false},
        {name: 'Pakistan', collapsed: false},
        {name: 'Sri Lanka', collapsed: false},
    ]},
    ],
  },
];

// For the sake of simplicity, we're gonna use `defaultCollapsed`. Usually, a
// [controlled component](http://facebook.github.io/react/docs/forms.html#controlled-components)
// is preferred.
class CountryTreeView extends Component{

    componentDidMount () {
    axios.get('https://raw.githubusercontent.com/curran/data/gh-pages/un/placeHierarchy/countryHierarchy.json')
    .then((response) => {
      console.log('response ', response.data)
    })
  }
  render() {
    return (
      <div>
        {dataSource.map((node, i) => {
          const type = node.type;
          const label = <span className="node">{type}</span>;
          return (
            <TreeView key={type + '|' + i} nodeLabel={label} defaultCollapsed={false}>
              {node.subregions.map(subregion => {
                const label2 = <span className="node">{subregion.name} </span>;
                return (
                  <TreeView  key={subregion.name} nodeLabel={label2} defaultCollapsed={false}>
                    {subregion.countries.map(country => {
                      const label3 = <span className="node">{country.name} </span>;
                      return (
                        <div className="info">{country.name}</div>
                        
                      )
                    })}
                  </TreeView>
                );
              })}
            </TreeView>
          );
        })}
      </div>
    );
  }
}

export default CountryTreeView;



// {subregion.map(country => {
//   const label3 = <span className="node">{country.name}</span>;
//   return (
//     <TreeView nodeLabel={label3} key={country.name} defaultCollaped={false}>  
//     </TreeView>
//   )
// })}