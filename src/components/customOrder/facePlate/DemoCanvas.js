
 import React from 'react';

 // export default class Colorizer extends React.Component {
 //    constructor(props, context) {
 //    super(props, context);

 //      this.state = {
 //        color: "",
 //        bgColor: "white"
 //      };

 //      this.colorValue = this.colorValue.bind(this);
 //      this.setNewColor = this.setNewColor.bind(this);
 //    }

 //    colorValue(e) {
 //      this.setState({ 
 //        color: e.target.value 
 //      });
 //    }

 //    setNewColor(e) {
 //      this.setState({
 //        bgColor: this.state.color
 //      });

 //      e.preventDefault();
 //    }

 //    render() {
 //      var squareStyle = {
 //        backgroundColor: this.state.bgColor
 //      };

 //      return (
 //        <div className="colorArea">
 //          <div style={squareStyle} className="colorSquare"></div>

 //          <form onSubmit={this.setNewColor}>
 //          <li onChange={this.colorValue}  style={{backgroundColor: "green", borderRadius:"50px", width:"20px", height:"20px"}}/>
 //            <input onChange={this.colorValue} 
 //              placeholder="Enter a color value"></input>
 //            <button type="submit">go</button>
 //          </form>
 //        </div>
 //      );
 //    }
 //  }
// var green = 'green'
// class Toggle extends React.Component {
//     constructor(){
//       super()
//       this.state={
//         color: green
//       }
//     }
   
 
//   randomColor() {
//      var letters = '0123456789ABCDEF';
//       var colory = '#';
//       for (var i = 0; i < 6; i++ ) {
//       colory += letters[Math.floor(Math.random() * 16)];
//       }
//      // alert(colory)
//       this.setState({color:'red'});
//   }
 
  
//   render(){
//     return (
//       <div style={{background: this.state.colory}}>
//         <button style={{
//                         backgroundColor: 'grey',
//                         color: 'black',
//                         padding: '15px',
//                         textdecoration: 'none',
//                         textAlign: 'center',
//                         fontSize: '16px',
//                         fontFamily: 'Oxygen',
//                         letterSpacing: '1px',
//                         margin: 'auto',
//                         display:'block', 
//                       }}
//                       onClick={this.randomColor}>
//                       Make change
//         </button>
//       </div>
//     );
//   }
// }
// export default Toggle 
//ReactDOM.render(<Toggle />, document.getElementById('app'));""


//  export default class PlanPage extends React.Component {
//     constructor(props) {
//       super(props);
//     }
  
//     componentWillMount() {
//       this.setState({
//         canvasA: {
//           canvasWidth: 300,
//           canvasHeight: 300
//         }
//       })
//     }
  
//     // componentDidMount() {
//     //   this.props.getDataMap(); //return object which has the fields e.g. id,... and field URL which specifies where image is  
//     //   const { canvasWidth, canvasHeight } = this.state.canvasA;
//     //   this.canvasA.width = canvasWidth;
//     //   this.canvasA.height = canvasHeight;
//     // }
//     componentDidMount() {
//         const context = this.canvasA.getContext('2d');
     
//       }
//     render() {
//         return(
//             <canvas ref={canvasA => this.canvasA = canvasA} /> //canvas
//         )
//     }
// }
// import ReactCanvas from 'react-canvas';
 
// var Surface = ReactCanvas.Surface;
// var Image = ReactCanvas.Image;
// var Text = ReactCanvas.Text;
 
// class  DemoCanvas extends React.Component {
 
//   render() {
//     var surfaceWidth = window.innerWidth;
//     var surfaceHeight = window.innerHeight;
//     var imageStyle = this.getImageStyle();
//     var textStyle = this.getTextStyle();
 
//     return (
//       <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
//         <Image style={imageStyle} src='...' />
//         <Text style={textStyle}>
//           Here is some text below an image.
//         </Text>
//       </Surface>
//     );
//   }
//   getImageHeight() {
//     return Math.round(window.innerHeight / 2);
//   }
 
//   getImageStyle() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: this.getImageHeight()
//     };
//   }
 
//   getTextStyle() {
//     return {
//       top: this.getImageHeight() + 10,
//       left: 0,
//       width: window.innerWidth,
//       height: 20,
//       lineHeight: 20,
//       fontSize: 12
//     };
//   }
 
// };
// export default  DemoCanvas;

import { SketchPicker } from 'react-color';

class Component extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    alert(this.state.background)
  };
componentWillMount(){
    let a = this.setState({ background: this.state.background });    
    var style = {
      background: "a"
    }
  }
  render() {
    
    return (
      <div>
        <SketchPicker
          color={ this.state.background }
          onChangeComplete={ this.handleChangeComplete }
        />
        <div>

        </div>
      </div>
    );
  }
}
export default Component 