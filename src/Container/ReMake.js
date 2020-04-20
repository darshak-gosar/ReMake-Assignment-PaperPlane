import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { apiCall } from '../services';
import * as constantValues from '../Constants'
import Rating from '../Components/Rating';
import MovieList from '../Components/MovieList';
import Genres from '../Components/Genres';
import Loader from '../Components/Loader';

class Component extends React.Component {
    constructor(props) {
        super(props);
        //this.state Object to maintain the states when fetched and loaded
        this.state = {
            error: null,
            isLoaded: false,
            movies: [],
            genres: [],
            activeLink: [],
            value: constantValues.defaultRange,
            moviesList: []
        };
        this.getGenres = this.getGenres.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * API call with mapping result to state
     */
    async componentDidMount() {
        let results = await apiCall();
        let genres = [];
        //Filtering only those Genres which are present in Movies
        results[1].genres.map((obj) => {
            results[0].results.filter((genure) => {
                if (genure.genre_ids.includes(obj.id) && !genres.some(o => o.id === obj.id)) {
                    genres.push(obj);
                }
            })
        });
        let movieResult = results[0].results.filter((genure) => genure.vote_average >= this.state.value)
        this.setState({
            isLoaded: true,
            movies: movieResult.sort((a, b) => (b.popularity - a.popularity)),
            genres: genres,
            value: constantValues.defaultRange,
            moviesList: results[0].results
        });
    }

    /**
     * Getting Genre id and fetch the name to print 
     * @param {*} id 
     */
    getGenres(id) {
        var getGenreName = this.state.genres.filter((genre) => id.includes(genre.id));
        return Object.keys(getGenreName).map((key) => getGenreName[key].name).join()
    }

    /**
     * Handling Genre Click for filtering data based on selected Genre
     * @param {*} id 
     */
    handleClick(id) {
        //Once the Data is filtered, Sort the Data
        this.setState((prevState, props) => {
            let activeLinks = prevState.activeLink.concat([]) || []
            let activeLinkIndex = activeLinks.indexOf(id);
            if (activeLinkIndex === -1) {
                activeLinks.push(id);
            } else {
                activeLinks.splice(activeLinkIndex, 1);
            }
            let filteredData = this.filterMovies(prevState.moviesList, prevState.value, activeLinks);
            return {
                activeLink: activeLinks,
                movies: filteredData.sort((a, b) => (b.popularity - a.popularity))
            }
        })
    };

    /**
     * Updating Data JSON based on Genre passed and maintain the Data
     * @param {*} data 
     * @param {*} filterData 
     */
    updateData(data, filterData) {
        let updateData = data;
        this.updateLink.map((obj) => {
            updateData = filterData.filter((genure) => genure.genre_ids.includes(obj))
        })
        return updateData;
    }

    /**
     * Filtering the data based on Rating and Genres list
     */
    filterMovies = (movieList, ratingFilter, genreFilter) => {
        return movieList.filter((movie) => {
            if (movie.vote_average < ratingFilter) {
                return false;
            }
            if (!genreFilter.every((genre) => movie.genre_ids.includes(genre))) {
                return false;
            }
            return true;
        })
    }

    /**
    * Range Selector Functionality based on Change of Range
    */
    rangeFilterChange = rangeValue => {
        //Once the Data is filtered, Sort the Data
        this.setState((prevState, props) => {
            let filteredData = this.filterMovies(prevState.moviesList, rangeValue, prevState.activeLink);
            return {
                value: rangeValue,
                movies: filteredData.sort((a, b) => (b.popularity - a.popularity))
            }
        })
    };

    render() {
        //Maintaining the state if link clicked on Genre
        const { value, activeLink } = this.state;
        return (
            <Container className="custom-conatiner">
                {this.state.isLoaded ?
                    <Row>
                        <Col md={3} sm={12} xs={12}>
                            <div className="filter_panel card">
                                {/* Genre Component */}
                                <Genres activeLinks={activeLink} genureList={this.state.genres} click={this.handleClick}></Genres>
                                {/* Rating Component */}
                                <Rating currentValue={value} change={this.rangeFilterChange}></Rating>
                            </div>
                        </Col>
                        <Col md={9} sm={12} xs={12}>
                            {/* Movie Component */}
                            <MovieList movieList={this.state.movies} click={this.getGenres}></MovieList>
                        </Col>
                    </Row> : <Loader /> // Loader Component
                }
            </Container>
        );
    }
}

export default Component;