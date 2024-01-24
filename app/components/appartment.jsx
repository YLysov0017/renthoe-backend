const React = require("react")

class Apr extends React.Component {
    render(){
        return(
            <div class="apr-card">
                <img src={this.props.img}/>
                <div class="apr-desc">
                    <div class="apr-big-desc">
                        <p><b>{this.props.name}</b></p>
                        <p>{this.props.specs}</p>
                        <p><b>{this.props.distr}</b></p>
                        <p><b></b></p>
                    </div>
                    <div class="apr-small-desc">
                        <p>{this.props.reviews} <i>{this.props.score}</i></p>
                        <p><b>{this.props.rent} р.</b> за сутки</p>
                        <p>Всего {this.props.price} р.</p>
                    </div>
                </div>
            </div>
        )
    }
}

Apr.defaultProps = {
    img: "../img/aprt1.jpg",
    name: "Двухместные апартаменты с 1 кроватью",
    specs: "2 гостя 1 кровать 1 спальня 52 кв.м. можно с животными",
    distr: "Ленинский район",
    street: "Уборевича улица, 17",
    reviews: "82 отзыва",
    score: "9.6",
    rent: "4400",
    price: "26 400"
}

export default Apr