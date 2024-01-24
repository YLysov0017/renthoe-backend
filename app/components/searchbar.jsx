const React = require("react")

class Searchbar extends React.Component {
    render(){
        return(
            <div class="searchbar">
                <div class="search-cat">
                    <p>Район или адрес</p>
                    <p><b>Куда?</b></p>
                </div>
                <div class="sep"></div>
                <div class="search-cat">
                    <p>Заезд</p>
                    <p><b>Когда?</b></p>
                </div>
                <div class="sep"></div>
                <div class="search-cat">
                    <p>Отъезд</p>
                    <p><b>Когда?</b></p>
                </div>
                <div class="sep"></div>
                <div class="search-cat">
                    <p>Гости</p>
                    <p><b>2 взрослых, без детей</b></p>
                </div>
                <div class="search-bt">
                    <p>Поиск</p>
                </div>
                
            </div>
        )
    }
}

export default Searchbar