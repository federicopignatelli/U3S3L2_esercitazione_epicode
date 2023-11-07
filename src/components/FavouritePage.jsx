import { useSelector } from "react-redux/es/hooks/useSelector"
import { Col, Row, Container, ListGroup, ListGroupItem } from "react-bootstrap"

const FavouritePage = () => {
    const favouriteList = useSelector((state) => state.favourites.content)

    return (
        <Container>
            <Row>
                <Col className="my-3">
                    <ListGroup>
                        {
                            favouriteList.map((fav, i) => (
                                <ListGroupItem key={i}>{fav}</ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default FavouritePage