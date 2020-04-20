import React from 'react';

const genresList = (props) => {
    return (
        <div className="filter">
            <h3>Genres</h3>
            <ul id="genres" className="multi_select text">
                {props.genureList.map(genre => (
                    <li onClick={() => props.click(genre.id)}
                        className={
                            (props.activeLinks.indexOf(genre.id) !== -1 ? "selected" : "")
                        } key={genre.id} data-value={genre.id}><a href="#">{genre.name}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default genresList;