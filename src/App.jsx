import React, { Component } from 'react';
import { $api } from './api/api';
import Browser from './components/browser/browser';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      folders: [],
    };
  }

  componentDidMount() {
    $api.get('/folders')
      .then(({ data }) => {
        const foldersWithFullPath = this.addFullPath(data.data, '');
        this.setState({ folders: foldersWithFullPath });
      });
  }

  addFullPath = (folders, parentPath) => {
    return folders.map(folder => {
      const fullPath = parentPath ? `${parentPath}/${folder.name}` : folder.name;
      if (folder.type === 'FOLDER') {
        folder.fullPath = fullPath;
        folder.children = this.addFullPath(folder.children, fullPath);
      }
      return folder;
    });
  }

  render() {
    return (
      <Browser
        folders={this.state.folders}
        expandedFolders={['Common7/IDE', 'VC/crt/src/stl', 'SDK']}
      />
    );
  }
}

export default App;