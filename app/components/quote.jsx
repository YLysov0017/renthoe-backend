const React = require("react");

class Quote extends React.Component {

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
        
        if(this.state.width < 1000) return(
            <div class="quote_mb">
                  <img src={this.props.img}/>
                    <p>{this.props.txt}</p>
                    <p>{this.props.name}</p>
            </div>
        )
        else
            switch(this.props.pos){
                case "right":
                    return(
                        <div class="quote">
                            <div>
                                <p>{this.props.txt}</p>
                                <p>{this.props.name}</p>
                            </div>
                            <img src={this.props.img} class="q_img_right"/> 
                        </div>
                        )
                case "left":
                    return(
                        <div class="quote">
                            <img src={this.props.img} class="q_img_left"/>
                            <div>
                                <p>{this.props.txt}</p>
                                <p>{this.props.name}</p>
                            </div>
                        </div>
                        )
            }
    }

}

Quote.defaultProps= {name: "", txt: "test", img: "img/testPerson.png", pos: "right"}
// module.exports = Quote;

export default Quote