import React,{Component} from 'react';
import '../Card.css';



class Card1 extends Component{

    state={
        showAnswer: false
       
    }

    HandleNextClick =()=>{
      
        this.props.nextButton();
        this.setState({showAnswer: false});
      }

      HandlePreviousClick =()=>{
      
        this.props.previousButton();
        this.setState({showAnswer: true});
      }
 
    

    render(){

        const content = this.state.showAnswer ? this.props.backContent : this.props.frontContent;
        const iconClass = this.state.showAnswer ? 'reply' : 'share';
        const cardClass = this.state.showAnswer ? 'back' : 'front';
        const contentClass = this.state.showAnswer ? 'back' : 'front';
        const actionClass = this.state.showAnswer ? 'active' : '';
       
       return (
         <div
           className={`card ${cardClass}`}
           onClick={() => this.setState({ showAnswer: !this.state.showAnswer })
           }
         >

           <span className='card__counter'>{this.props.cardNumber}</span>
           <div
             className='card__flip-card'
             onClick={() => {
               this.setState({ showAnswer: !this.state.showAnswer });
             }}
           >

             <span className={`fa fa-${iconClass}`} />
           </div>
           <div className={`card__content--${contentClass}`}>
             {content}
           </div>
           <div className={`card__actions ${actionClass}`}>
             <div
               className='card__prev-button'
               onClick={() => {
                 this.props.previousButton();
                 this.setState({ showAnswer: false });
               }}
             >
               'Prev'
          </div>
             <div
               className='card__next-button'
               onClick={() => {
                 this.props.nextButton();
                 this.setState({ showAnswer: false });
               }}
             >
               Next
          </div>
           </div>
         </div>

        )
    }

    


    
}


export default Card1