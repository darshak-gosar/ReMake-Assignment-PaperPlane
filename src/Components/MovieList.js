import React from 'react';
import Movie from './Movie';
import { Container, Row, Col } from 'reactstrap';

const movieList = (props) => {
    return (
        <section id="media_results" className="panel">
            <div className="media_items">
                <div className="page_wrapper">
                    <Container>
                        <Row>
                            {props.movieList && props.movieList.length > 0 ?
                                props.movieList.map(movie => (
                                    <Col key={movie.id} lg={3} md={6} sm={6} xs={12}>
                                        <Movie key={movie.id} movie={movie} clicked={props.click}></Movie>

                                    </Col>

                                )) : <div>Sorry No Result</div>
                            }

                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default movieList;