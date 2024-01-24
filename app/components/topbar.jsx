const React = require("react");

import {Link} from "react-router-dom";




class TopBar extends React.Component {
    
    state = { width: 0, height: 0 };

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      };
      componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }


    render(){

        if (this.state.width < 1000) return(
            <div class="topbar">
                <h1 class="logo">RentHome</h1>
                <div class="tb_menu">
                    <p class="button">Меню</p>
                </div>
            </div> 
        )
        else return(
            <div class="topbar">
                <h1 class="logo">RentHome</h1>
                <div class="tb_menu">
                    <p class="button">Отзывы</p>
                    <p class="button">Квартиры</p>
                    <p class="button">Бронирование</p>
                    <p class="button">Услуги</p>
                    <p class="button">Контакты</p>
                    <p class="button">FAQ</p>
                    <p class="button">О нас</p>
                </div>
            </div>
            )


        // return(
        // <div class="topbar">
        //     <h1 class="logo">RentHome</h1>
        //     <div class="tb_menu">
        //         <p class="button">Отзывы</p>
        //         <p class="button">Квартиры</p>
        //         <p class="button">Бронирование</p>
        //         <p class="button">Услуги</p>
        //         <p class="button">Контакты</p>
        //         <p class="button">FAQ</p>
        //         <p class="button">О нас</p>
        //     </div>
        //     {/* <img src="../img/testMenuBT.png"  class="menu-bt"/> */}
        // </div>
        // )
    }
}

export default TopBar;
