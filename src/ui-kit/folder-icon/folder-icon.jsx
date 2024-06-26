import { Component } from 'react';

class FolderIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg className={this.props.className} fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 54" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <g> <g> <path
          d="M53,10.5H23.535l-3.703-5.555C19.646,4.667,19.334,4.5,19,4.5H1c-0.553,0-1,0.447-1,1v6v4v29.003 C0,47.259,2.24,49.5,4.994,49.5h44.012C51.76,49.5,54,47.259,54,44.503V15.5v-4C54,10.947,53.553,10.5,53,10.5z M52,14.5H2v-2h21 h29V14.5z M2,6.5h16.465l2.667,4H2V6.5z M52,44.503c0,1.652-1.343,2.997-2.994,2.997H4.994C3.343,47.5,2,46.155,2,44.503V16.5h50 V44.503z"></path>
          <path
            d="M26.293,42.207C26.488,42.402,26.744,42.5,27,42.5s0.512-0.098,0.707-0.293l5.657-5.657c0.391-0.391,0.391-1.023,0-1.414 s-1.023-0.391-1.414,0L28,39.086V21.5h-2v17.586l-3.95-3.95c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L26.293,42.207 z"></path> </g> </g> </g></svg>
    );
  }
}

export default FolderIcon;