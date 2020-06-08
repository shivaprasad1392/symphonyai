import React from 'react';
import './Error.css';

type Props = {
    field: String,
    msg: String,
};

const Error = (props: Props) => {
    const { field,  msg } = props;
    return (
        <div className="Error">
            <span>{field}: {msg}</span>
        </div>
    );
}

export default Error;
