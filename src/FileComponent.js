import React from 'react';

type Props = {
  handleFileSelection: Function,
};

const FileComponent = (props: Props) => {
  const onLoad = (file) => {
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      props.handleFileSelection(fileReader.result);
    }
    fileReader.readAsText(file);
  }
  
  return (
    <div id="select-file">
      <input type="file" onChange={(e) => onLoad(e.target.files[0])} />
    </div>
  );
}

export default FileComponent;
