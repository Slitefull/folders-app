import { Component } from 'react';

class FileIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg className={this.props.className} height={20} width={20} fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 53" xmlSpace="preserve">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path
                d="M45.707,10.075l-9.794-9.783C35.726,0.105,35.471,0,35.206,0H8C7.447,0,7,0.448,7,1v51c0,0.552,0.447,1,1,1h37 c0.553,0,1-0.448,1-1V10.783C46,10.517,45.895,10.263,45.707,10.075z M42.586,10H36V3.414L42.586,10z M9,51V2h25v9 c0,0.552,0.447,1,1,1h9v39H9z"></path>
              <path
                d="M39,17H14c-0.553,0-1,0.448-1,1v28c0,0.552,0.447,1,1,1h25c0.553,0,1-0.448,1-1V18C40,17.448,39.553,17,39,17z M38,45H15 V19h23V45z"></path>
              <rect x="20" y="22" width="13.018" height="2"></rect>
              <rect x="20" y="28" width="13.018" height="2"></rect>
              <rect x="20" y="34" width="13.018" height="2"></rect>
              <rect x="20" y="40" width="13.018" height="2"></rect>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default FileIcon;