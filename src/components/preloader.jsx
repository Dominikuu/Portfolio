import React from 'react';
import "./stars.scss";
class Preloader extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        loading: true,
        loaded: false
      }
    }
    componentDidMount(){
      window.addEventListener('load', ()=>{
        if (this.loaded) {
          return
        }
        setTimeout(()=>{
          this.setState({loading: false})
          setTimeout(()=>{
            this.setState({loaded: true})
          }, 100)
        }, 100)
      })
    }

    render(){
        return !this.state.loaded? <div id="preloader" className={!this.state.loading? 'animate': null}></div> : null;
    }
}

export default Preloader;



