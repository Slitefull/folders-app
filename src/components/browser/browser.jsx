import { Component } from 'react';

import Folder from '../folder/folder';
import SearchInput from './shared/search-input';

import { generateUniqueId } from '../../utils/generateUniqId';

class Browser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
  }

  handleSearch = (event) => {
    this.setState({
      ...this.state,
      searchTerm: event.target.value
    });
  };

  searchFilter = (node) => {
    if (node.name.toLowerCase()
      .includes(this.state.searchTerm.toLowerCase())) {
      return true;
    }

    if (node.children) {
      return node.children.some(this.searchFilter);
    }

    return false;
  };

  render() {
    return (
      <div className="p-4">
        <SearchInput
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
        />

        {this.props.folders.map((folder) => {
          const show = this.searchFilter(folder);
          if (!show && this.state.searchTerm) return;

          return (
            <Folder
              key={generateUniqueId()}
              children={folder.children}
              name={folder.name}
              type={folder.type}
              expandedFolders={this.props.expandedFolders}
            />
          );
        })}
      </div>
    );
  }
}

export default Browser;