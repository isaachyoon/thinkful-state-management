import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Hire from './components/Hire/Hire';


class App extends React.Component {
  state = {
    cardInfo: [{
      name: 'isaac',
      occupation: 'software engineer',
      work: 'facebook',
      id: 1
    }, {
      name: 'jun',
      occupation: 'software engineer',
      work: 'google',
      id: 2,
    }, {
      name: 'david',
      occupation: 'software engineer',
      work: 'amazon',
      id: 3
    }, {
      name: 'lance',
      occupation: 'software engineer',
      work: 'apple',
      id: 4
    }]
  }
  counter = 5;
  addEmployee = () => {
    let newEmployee = {
      name: 'new employee',
      occupation: 'software engineer',
      work: 'thinkful',
      id: this.counter
    };
    this.counter++;
    this.setState({cardInfo: [...this.state.cardInfo, newEmployee]});
  }

  fireEmployee = (id) => {
    console.log(id);
    let newEmployeeObj = this.state.cardInfo.filter((employeeData) =>
      employeeData.id !== id);
    this.setState({cardInfo: newEmployeeObj});
  }

  render() {
    return (
      <div className="App">
        <Hire addEmployee={this.addEmployee}></Hire>
        <div className="container">
          {this.state.cardInfo.map((cardInfo) => <Card info={cardInfo} fireProp={this.fireEmployee}></Card>)}
        </div>
      </div>
    );
  }
}

export default App;
