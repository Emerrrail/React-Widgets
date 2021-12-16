import React from "react";
// import Dropdown from "../components/Dropdown";
import unsplash from "./api/unsplash";
import ImageList from "./ImageList";
import SearchBar from './SearchBar'


class SearchPics extends React.Component {
    state = { images: [], num: 10 };   //要設空array，method加下去才不會error

    // static options = [
    //     {
    //         label: 10,
    //         value: 10
    //     }, {
    //         label: 20,
    //         value: 20
    //     },
    //     {
    //         label: 30,
    //         value: 30
    //     }
    // ];

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term,
                per_page: this.num
            }

        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        )
    };
}

export default SearchPics;