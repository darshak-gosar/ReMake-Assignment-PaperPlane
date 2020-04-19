import React from 'react'

const movies = (props) => {
    return (
        <div className="card style_1">
            <div className="image">
                <div className="wrapper">
                    <a className="image" href="#" title={props.movie.title}>
                        <img className="poster lazyload lazyloaded" alt="" src={"https://image.tmdb.org/t/p/w500/" + props.movie.poster_path} data-loaded="true"></img>
                    </a>
                </div>
            </div>
            <div className="content">
                <h2><a href="#" title={props.movie.title}>{props.movie.title}</a></h2>
                <p><b>Genres: </b>{props.clicked(props.movie.genre_ids)}</p>
                <br />
                <p><b>Rating: </b>{props.movie.vote_average}</p>
            </div>
        </div>
    );
}

export default movies;