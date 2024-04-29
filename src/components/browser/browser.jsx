import React, { Component } from 'react';
import Folder from '../folder/folder';
import SearchInput from './shared/search-input';
import { generateUniqueId } from '../../utils/generateUniqId';

class Browser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    return (
      <div className="p-4">
        <SearchInput onSearch={this.handleSearch} />

        {this.props.folders.map((folder) => {
          return (
            <Folder
              key={generateUniqueId()}
              children={folder.children}
              name={folder.name}
              type={folder.type}
              fullPath={folder.fullPath}
              expandedFolders={this.props.expandedFolders}
              searchQuery={this.state.searchQuery}
            />
          );
        })}
      </div>
    );
  }
}

export default Browser;