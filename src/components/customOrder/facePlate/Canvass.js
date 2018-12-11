import React, { Component } from 'react';
// import Konva from 'konva';
// import { Rect } from 'react-konva';
const imagesPath = {
  minus: "https://images.vexels.com/media/users/3/131484/isolated/preview/a432fa4062ed3d68771db7c1d65ee885-minus-inside-circle-icon-by-vexels.png",
  plus: "https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png"
}

// export default class ColoredRect extends Component {
//   state = {
//     color: ''
//   };
//   handleClick = () => {
//     this.setState({
//       color: "../../assets/EarImages/ls01.png"
//     });
//   };
//   render() {
//     return (  
//       <div>
//         <div className="btn btn-success" onClick = {this.handleClick}>valueSet</div>
//         <div ><img style={{maxWidth: '50px'}} src={this.state.color}/></div>
//       </div>
//     );
//   }
// }
export default class ColoredRect extends React.Component {
  state = {
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getImageName = () => this.state.open ? 'plus' : 'minus'

  render() {
    const imageName = this.getImageName();
    return (
      <div>
        <img style={{maxWidth: '50px'}} src={imagesPath[imageName]} onClick={this.toggleImage} />
      </div>
    );
  }
}

