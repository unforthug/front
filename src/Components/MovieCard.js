import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../Pages/img/movies.jpg"

function MovieCard() {
  return (
    <div style={{width : "20rem"}}>
    <Card style={{ width: '20rem' , height : "35rem" }}>
      <Card.Img style={{marginTop : "2rem" }} src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard