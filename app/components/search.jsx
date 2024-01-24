const React = require("react")

import Searchbar from "./searchbar.jsx"

class Search extends React.Component {
    render(){
        return(
            <div class="main">
                <h1 class="reviews_header">НАЙДЕМ, ГДЕ ОСТАНОВИТЬСЯ!</h1>
                <Searchbar/>                
            </div>
        )
    }
}

export default Search