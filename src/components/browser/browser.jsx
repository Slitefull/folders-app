import React, { Component } from 'react';
import Folder from '../folder/folder';
import SearchInput from './shared/search-input';
import { generateUniqueId } from '../../utils/generateUniqId';

class Browser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-4">
        <SearchInput/>

        {this.props.folders.map((folder) => {
          return (
            <Folder
              key={generateUniqueId()}
              children={folder.children}
              name={folder.name}
              type={folder.type}
              fullPath={folder.fullPath}
              expandedFolders={this.props.expandedFolders}
            />
          );
        })}
      </div>
    );
  }
}

export default Browser;