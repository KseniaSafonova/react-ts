import React from 'react';
import logo from './logo.svg';
import './App.css';

// const Title: React.FunctionComponent = () => <h1>Hello World</h1>
const Title: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>

function App() {
  return (
    <Title title='test' />
  );
}

export default App;
