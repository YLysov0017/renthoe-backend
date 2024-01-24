const React = require("react");
const ReactDOM = require("react-dom/client");


// import Quote from "./quote.jsx"
import Contact from "./contact.jsx"


class Contacts extends React.Component {

    render(){
        return(
            <div class="main">
                <div class="contacts-page">
                    <h1>КАК С НАМИ СВЯЗАТЬСЯ?</h1>
                    <div class="contacts">
                        <div class="contacts-block">
                            <Contact img="img/testPhone.png" txt="8800353535"/>
                            <Contact img="img/testTG.png" txt="8800353535"/>
                            <Contact img="img/testEmail.png" txt="yf@sh.st"/>
                        </div>
                        <div class="adress">
                            <img src="img/baseTest.jpg"/>
                            <p>Ул. Кукуево, д. 13</p>
                        </div>
                    </div>


                </div>           
            </div>
        )
    }
}

export default Contacts