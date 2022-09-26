import React from "react"
import Card from "react-bootstrap/Card"
import Chester from './Chester.jpeg'

function GithubCard(){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Chester} />
      <Card.Body>
        <Card.Title>imandato</Card.Title>
        <Card.Text>
         Github description - adding on
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GithubCard