import { Component } from 'react';
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
        this.setState({ folders: data.data });
      });
  }

  render() {
    return (
      <Browser
        folders={this.state.folders}
        expandedFolders={['Common7', 'Common7/IDE', 'SDK', 'VC', 'VC/bin']}
      />
    );
  }
}

export default App;