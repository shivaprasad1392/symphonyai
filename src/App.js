import React from 'react';
import './App.css';
import Filter from './Filter';
import FileComponent from './FileComponent';
import Table from './Table';
import Error from './Error';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      delimiter: ',',
      lines: 2,
      errorField: '',
      errorMsg: '',
    };
  }
  handleFileSelection = (file) => {
    this.setState({ selectedFile: file });
  }
  handleDelimiterChange = (char) => {
    if(char.length > 1) {
      this.setState({
        errorField: 'Delimiter',
        errorMsg: 'Incorrect input, delimiter should be of single character',
      });
    } else {
      this.setState({
        errorField: '',
        errorMsg: '',
      });
    }
    this.setState({ delimiter: char});
  }
  handleLineCountChange = (num) => {
    if(num < 0) {
      this.setState({
        errorField: 'Lines',
        errorMsg: 'Incorrect input, number of lines to display should be a positive integer',
      });
    } else {
      this.setState({
        errorField: '',
        errorMsg: '',
      });
    }
    this.setState({ lines: num });
  }
  render() {
    const {
      selectedFile,
      delimiter,
      lines,
      errorField,
      errorMsg } = this.state;
    return (
      <div className="App">
        <FileComponent
          handleFileSelection={this.handleFileSelection}/>
        {errorField !== '' && <Error
          field={errorField}
          msg={errorMsg} />}
        <Filter
          delimiter={delimiter}
          lines={lines}
          handleDelimiterChange={this.handleDelimiterChange}
          handleLineCountChange={this.handleLineCountChange} />
        <Table
          file={selectedFile}
          delimiter={delimiter}
          lines={lines} />
      </div>
    );
  }
}

export default App;
