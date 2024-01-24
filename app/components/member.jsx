const React = require("react")


class Member extends React.Component {
    render(){
        return(
            <div class="mem-card">
                <img src={this.props.img}/>
                <p><b>{this.props.name}</b></p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

Member.defaultProps = {
    img: "../img/testPerson.png",
    name: "Тест",
    job: "Должность"
}

export default Member