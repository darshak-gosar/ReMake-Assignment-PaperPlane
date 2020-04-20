import React from 'react';
import Movie from './Movie'

const movieList = (props) => {
    return (
        <section id="media_results" className="panel">
            <div className="media_items results">
                <div className="page_wrapper">
                    { props.movieList && props.movieList.length > 0 ?
                    props.movieList.map(movie => (
                        <Movie key={movie.id} movie={movie} clicked={props.click}></Movie>
                    )) : <div>Sorry No Result</div> 
                    }
                </div>
            </div>
        </section>
    );
}

export default movieList;