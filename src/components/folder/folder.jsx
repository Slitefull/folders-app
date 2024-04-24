import cx from 'classnames';

import { Component } from 'react';
import File from '../file/file.jsx';
import ToggleIcon from '../../ui-kit/toggle-icon/toggle-icon.jsx';
import { generateUniqueId } from '../../utils/generateUniqId.js';
import FolderIcon from '../../ui-kit/folder-icon/folder-icon.jsx';


class Folder extends Component {
  constructor(props) {
    super(props);

    this.path = this.props.path ? `${this.props.path}/${this.props.name}` : this.props.name;
    this.expand = this.expand.bind(this);

    this.state = {
      expanded: this.props.expandedFolders.includes(this.path)
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
          this.props.children?.map((child) => (
            <div className="pl-4">
              <Folder
                key={generateUniqueId()}
                children={child.children}
                name={child.name}
                type={child.type}
                mime={child.mime}
                path={this.path}
                expandedFolders={this.props.expandedFolders}
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Folder;