import React,{Component} from 'react'

class Header extends Component{

    state={
        showModal: false
    }
    render(){

        return (
         <div className='header'>
        <div className='header-content header-content__left'>
          
        </div>
        <div className='header-content header-content__middle'>
          Flash Cards
        </div>
        <div className='header-content header-content__right'>
          
        </div>
      </div>
        )
    }
}

export default Header
   