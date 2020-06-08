import React from 'react';
import './Table.css';

type Props = {
  file: String,
  delimiter: String,
  lines: Number,
};

const Table = (props: Props) => {
  const { file, delimiter, lines } = props;

  const renderRow = (row, key) => {
    let column = [];
    if(delimiter === '') {
      column.push(<td key={key}>{row}</td>)
    } else {
      const splitRow = row.split(delimiter).slice(0, 4);
      for(let i = 0; i < splitRow.length; i++) {
          column.push(<td key={i}>{splitRow[i]}</td>);
      }
    }
    return column;
  }

  const renderTable = () => {
    let data = file.split('\n');
    data = data.slice(0, lines); 
    return (
      <table>
        <tbody>
          {data.map((line, index) => 
            <tr key={index}>
              {renderRow(line, index)}
            </tr>
          )}
        </tbody>
      </table>
    )
  }
  
  return (
    <div className="Table">
      {file !== null && renderTable()}
    </div>
  );
}

export default Table;
