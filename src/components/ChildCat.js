import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class ChildCat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfPets: 0
    }
  }

  increaseNumOfPets = () => {
    this.setState({
      numOfPets: this.state.numOfPets + 1
    })
    console.log(this);
  }

  render() {
    return (
      <div>
        {/* <p>{this.props.catName}</p>
          <p>Number of pets 😸: {this.state.numOfPets}</p>
          <img onClick={this.increaseNumOfPets} src={this.props.imgUrl} alt={this.props.catName} /> */}

        <Card style={{ width: '18rem' }}>
          <Card.Img onClick={this.increaseNumOfPets} variant="top" src={this.props.imgUrl} />
          <Card.Body>
            <Card.Title>{this.props.catName}</Card.Title>
            <Card.Text>
              Number of pets 😸: {this.state.numOfPets}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default ChildCat;