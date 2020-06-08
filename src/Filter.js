import React from 'react';
import './Filter.css';

type Props = {
  delimiter: String,
  lines: Number,
  handleDelimiterChange: Function,
  handleLineCountChange: Function
};

const Filter = (props: Props) => {
  const {
    delimiter,
    lines,
    handleDelimiterChange,
    handleLineCountChange } = props;

  const onDelimiterChange = (char) => {
    handleDelimiterChange(char);
  }

  const onLineCountChange = (num) => {
    handleLineCountChange(num);
  }

  return (
    <div className="filters">
      <label>Delimiter: </label>
      <input className="input-fields" type="text" onChange={(e) => onDelimiterChange(e.target.value)} value={delimiter} />
      <label>Lines: </label>
      <input className="input-fields" type="number" onChange={(e) => onLineCountChange(e.target.value)} value={lines} />
    </div>
  );
}

export default Filter;
