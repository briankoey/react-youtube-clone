/**
 * Created by Brian on 4/17/2017.
 */
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={event => this.onInputChange(event.target.value)} placeholder="Searchs"></input>
            </div>
        )
    }
}

export default SearchBar;