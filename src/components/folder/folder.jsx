import React, { Component } from 'react';
import cx from 'classnames';
import File from '../file/file.jsx';
import ToggleIcon from '../../ui-kit/toggle-icon/toggle-icon.jsx';
import { generateUniqueId } from '../../utils/generateUniqId.js';
import FolderIcon from '../../ui-kit/folder-icon/folder-icon.jsx';

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.checkIsOpenedByDefault(this.props.expandedFolders, this.props.fullPath)
    };
  }

  expand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  checkIsOpenedByDefault = (openedFolders, folderPath) => {
    if (!folderPath) return false;
    if (openedFolders.includes(folderPath)) {
      return true;
    }

    for (let openedFolder of openedFolders) {
      if (openedFolder.startsWith(folderPath + '/') || folderPath === openedFolder + '/') {
        return true;
      }
    }

    return false;
  };

  filterFolders = (folders, searchQuery) => {
    if (!folders) return []; // Return an empty array if folders is null or undefined
    if (!searchQuery) return folders;

    return folders.filter((item) => {
      if (item.type === 'FILE') {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (item.type === 'FOLDER') {
        const includesSearchQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const filteredChildren = this.filterFolders(item.children, searchQuery);
        return includesSearchQuery || filteredChildren.length > 0;
      }
      return false;
    });
  };

  render() {
    const { children, searchQuery, type, name, expandedFolders } = this.props;
    const filteredChildren = this.filterFolders(children, searchQuery);

    if (type === 'FOLDER' && !filteredChildren.length) return null;

    if (type === 'FILE') {
      return <File name={name} />;
    }

    return (
      <div className="pl-2 mb-1">
        <button className="flex flex-row items-center" onClick={this.expand}>
          <FolderIcon className="mr-2" />
          {name}
          <ToggleIcon className={cx('ml-2 transition-transform', { 'rotate-90': this.state.expanded })} />
        </button>
        {this.state.expanded && (
          filteredChildren.map((child) => (
            <div className="pl-4" key={generateUniqueId()}>
              <Folder
                expandedFolders={expandedFolders}
                searchQuery={searchQuery}
                {...child}
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Folder;