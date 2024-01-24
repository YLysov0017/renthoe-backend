const React = require("react");

class Contact extends React.Component {
    render(){
            return(
                        <div class="contact">
                            <img src={this.props.img}/>
                            <p>{this.props.txt}</p>
                        </div>
                        )
            }
    }

Contact.defaultProps= {txt: "test", img: "img/testPerson.png"}

export default Contact