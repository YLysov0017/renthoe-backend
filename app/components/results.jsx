const React = require("react")

import Searchbar from "./searchbar.jsx"
import Apr from "./appartment.jsx"

class Results extends React.Component {
    render(){
        return(
            <div class="main">
                <Searchbar/>
                <Apr/>
                <Apr/>
                <Apr/>
            </div>
        )
    }
}

export default Results