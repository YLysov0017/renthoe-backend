const React = require("react")


class Acsept extends React.Component {
    render(){
        return(
            <div class="main">
                <div class="rent-card">
                    <img class="acsept-img" src={this.props.img}/>
                    <div class="acsept-menu">
                        <div class="rent-specs">
                                <div class="input-field">
                                        <p>28.10.24</p>
                                </div>
                                <div class="input-field">
                                        <p>11.11.24</p>
                                </div>
                                <p>Кол-во человек</p>
                                <div class="input-field">
                                        <p> 2 </p>
                                </div>    
                        </div>
                        <div class="rent-char">
                            <p><b>{this.props.name}</b></p>
                            <p>Всего <b>{this.props.price}</b> руб.</p>
                        </div>
                        <div>
                                <p>{this.props.distr}</p>
                                <p>{this.props.street}</p>    
                            </div>  
                        <div class="mini-rent">
                            <div>
                                <p>Ваш телефон бронирования</p>
                                <div class="input-field">
                                    <p>+7</p>
                                </div>    
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

Acsept.defaultProps = {
    img: "../img/aprt1.jpg",
    name: "Двухместные апартаменты с 1 кроватью",
    specs: "2 гостя 1 кровать 1 спальня 52 кв.м. можно с животными",
    distr: "Ленинский район",
    street: "Уборевича улица, 17",
    disc: "Уютная и стильная квартира с одной спальней, современный интерьер, удобная кровать, просторная гостиная, полностью оборудованная кухня и современная ванная комната - идеальное место для пары, которая ищет комфорт и удобство.",
    price: "26 400"
}

export default Acsept