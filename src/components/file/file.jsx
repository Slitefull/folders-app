import { Component } from 'react';
import FileIcon from '../../ui-kit/file-icon/file-icon';

class File extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-row items-center">
        <FileIcon className="mr-2"/> <p>{this.props.name} <span className="font-bold">({this.props.mime})</span></p>
      </div>
    );
  }
}

export default File;