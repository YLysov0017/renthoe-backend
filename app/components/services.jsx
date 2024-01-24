const React = require("react")

class Services extends React.Component {
    render(){
        return(
            <div>
                <h1 class="reviews_header">В Ы Б О Р  У С Л У Г</h1>
                <div class="services-grid">
                    <div class="services-item">
                        <img src="../../img/aprt1.jpg"/>
                        <p>проживание с питомццами</p>
                    </div>
                    <div class="services-item">
                        <img src="../../img/aprt1.jpg"/>
                        <p>проведение мероприятий</p>
                    </div>
                    <div class="services-item">
                        <img src="../../img/aprt1.jpg"/>
                        <p>экскурсии</p>
                    </div>
                    <div class="services-item">
                        <img src="../../img/aprt1.jpg"/>
                        <p>поддержка клиентов</p>
                    </div>
                    <div class="services-item">
                        <img src="../../img/aprt1.jpg"/>
                        <p>клининг</p>
                    </div>
                    <div class="services-item">
                        <img src="../../img/aprt1.jpg"/>
                        <p>трансфер</p>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Services;