import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { apiCall } from '../services';
import * as constantValues from '../Constants'
import Rating from '../Components/Rating';
import MovieList from '../Components/MovieList';
import Genres from '../Components/Genres'

class Component extends React.Component {
    currentValues = {};
    updateLink = [];
    updatedCurrentValues = {};
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
        };
        this.getGenres = this.getGenres.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        let results = await apiCall();
        this.currentValues = results[0].results;
        let genres = [];
        //Filtering only those Genres which are present in Movies
        let genreVal = results[1].genres.map((obj) => {
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
            value: constantValues.defaultRange
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
        let filteredData = this.currentValues;
        var index = this.updateLink.indexOf(id)
        if (this.updateLink && this.updateLink.length === 0) {
            this.updateLink.push(id);
            filteredData = this.updateData(filteredData, this.state.movies);
            this.updatedCurrentValues = filteredData;
        } else if (this.updateLink && this.updateLink.length > 0) {
            if (index === -1) {
                this.updateLink.push(id);
                filteredData = this.updateData(filteredData, this.state.movies);
                this.updatedCurrentValues = filteredData;
            } else {
                this.updateLink.splice(index, 1);
                // filteredData = this.updateData(this.currentValues,currentValues);
                let currentValues = this.currentValues;
                this.updateLink.map((obj) => {
                    currentValues = currentValues.filter((genure) => genure.genre_ids.includes(obj))
                })
                filteredData = currentValues;
                this.updatedCurrentValues = filteredData;
            }
        }
        filteredData = filteredData.filter((genure) => genure.vote_average >= this.state.value);
        //Once the Data is filtered, Sort the Data
        this.setState({
            activeLink: this.updateLink,
            movies: filteredData.sort((a, b) => (b.popularity - a.popularity))
        });
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
    * Range Selector Functionality based on Change of Range
    */
    rangeFilterChange = value => {
        var currentVal = value;
        var rangedData;
        var rangeFilterVal = this.updatedCurrentValues;
        if (this.updateLink && this.updateLink.length > 0) {
            rangedData = rangeFilterVal.filter((genure) => genure.vote_average >= currentVal)
        } else {
            rangedData = this.currentValues.filter((genure) => genure.vote_average >= currentVal)
        }
        //Once the Data is filtered, Sort the Data
        this.setState({
            movies: rangedData.sort((a, b) => (b.popularity - a.popularity)),
            value: currentVal
        });
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
                    </Row> : <div className="loader"></div>
                }
            </Container>
        );
    }
}

export default Component;