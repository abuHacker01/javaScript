import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student from './student';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <Student >
            <h1>hh</h1>
        </Student>
        <Student location="Namangan" />
        <Student location="Uchkurgan" />
    </div>
);