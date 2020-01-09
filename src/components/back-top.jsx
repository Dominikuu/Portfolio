import React from 'react';
import animateScrollTo from 'animated-scroll-to';

class BackToTop extends React.Component {
    state = {
        isTop: true,
    }
    componentDidMount(){
        this.handleClick = this.handleClick.bind(this)
        window.addEventListener('scroll', ()=>{
            const isTop = window.pageYOffset < 100
            this.setState({isTop})
        });
    }

    handleClick() {
        animateScrollTo(0)
    }

    render(){
        return <a href="#" 
                className={`back-to-top animated ${this.isTop? 'fadeOut': 'fadeIn'}`} 
                style={{display: this.state.isTop? 'none' : 'block'}} 
                onClick={this.handleClick}>
                    <i className="fa fa-chevron-up"></i>
                </a>;
    }
}

export default BackToTop;


