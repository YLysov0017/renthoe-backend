const React = require("react")


class Rent extends React.Component {
    render(){
        return(
            <div class="main">
                <div class="rent-card">
                    <img class="rent-img" src={this.props.img}/>
                    <div class="rent-menu">
                        <p><b>{this.props.disc}</b></p>
                        <p><b>{this.props.name}</b></p>
                        <p>{this.props.specs}</p>
                        <div class="mini-rent">
                            <div>
                                <p>{this.props.distr}</p>
                                <p>{this.props.street}</p>    
                            </div>                            
                            <div class="rent-bt">
                                <p>ЗАБРОНИРОВАТЬ</p>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        )
    }
}

Rent.defaultProps = {
    img: "../img/aprt1.jpg",
    name: "Двухместные апартаменты с 1 кроватью",
    specs: "2 гостя 1 кровать 1 спальня 52 кв.м. можно с животными",
    distr: "Ленинский район",
    street: "Уборевича улица, 17",
    disc: "Уютная и стильная квартира с одной спальней, современный интерьер, удобная кровать, просторная гостиная, полностью оборудованная кухня и современная ванная комната - идеальное место для пары, которая ищет комфорт и удобство."
}

export default Rent