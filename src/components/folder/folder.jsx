import React, { Component } from 'react';
import cx from 'classnames';
import File from '../file/file.jsx';
import ToggleIcon from '../../ui-kit/toggle-icon/toggle-icon.jsx';
import { generateUniqueId } from '../../utils/generateUniqId.js';
import FolderIcon from '../../ui-kit/folder-icon/folder-icon.jsx';

function checkIsOpenedByDefault(openedFolders, folderPath) {
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
}

class Folder extends Component {
  constructor(props) {
    super(props);
    this.expand = this.expand.bind(this);

    this.state = {
      expanded: checkIsOpenedByDefault(this.props.expandedFolders, this.props.fullPath)
    };
  }

  expand = () => {
    this.setState({ expanded: !this.state.expanded });
  };


  render() {
    if (this.props.type === 'FILE') {
      return <File name={this.props.name} mime={this.props.mime}/>;
    }

    return (
      <div className="pl-2 mb-1">
        <button className="flex flex-row items-center" onClick={this.expand}>
          <FolderIcon className="mr-2"/>
          {this.props.name}
          <ToggleIcon className={cx('ml-2 transition-transform', { 'rotate-90': this.state.expanded })}/>
        </button>
        {this.state.expanded && (
          this.props.children?.map((child) => {
            return (
              <div className="pl-4">
                <Folder
                  key={generateUniqueId()}
                  expanded={this.props.expanded}
                  children={child.children}
                  name={child.name}
                  type={child.type}
                  mime={child.mime}
                  fullPath={child.fullPath}
                  expandedFolders={this.props.expandedFolders}
                />
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Folder;