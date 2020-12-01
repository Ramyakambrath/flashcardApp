import React, { Component } from 'react'
import Card from './Card'
import '../Card.css';
import {connect} from 'react-redux';
import {cardDetails} from '../actions/cardAction'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'

class CardContainer extends Component{

    // state={
    //     cards:[{
    //         word:'Jazz',
    //         description: 'A type of music of black American origin characterized by improvisation, syncopation, and usually a regular or forceful rhythm, emerging at the beginning of the 20th century.',
    //         no:1},
    //         {word:'Reggae',
    //         description: 'Music like Bob Marley, man.',
    //         no:2},
    //         {word:'Folk',
    //         description: 'Music like Bob Dylan, man.',
    //         no:3
    //         }
    //     ],
    //   cardNumber: 0
    // }
    
 
    showNextButton = () =>{
       
        if ((this.state.cardNumber + 1) !== this.state.cards.length) {

            const cardNumber=this.state.cardNumber += 1
           
            this.setState({ cardNumber: cardNumber});
          }
       
        
    }

    hideCreateCard=()=> {
        this.setState({showModal: false});
      }

    showPreviousButton = () =>{

        if (this.state.cardNumber !== 0) {
            this.setState({cardNumber: this.state.cardNumber -= 1});
          }
        
        
    }
    

     cardsList= this.props.cards.map((card) => {
       
            return (
              <Card 
                frontContent={card.word}
                backContent={card.description}
                nextButton={this.showNextButton}
                previousButton={this.showPreviousButton}
                cardNumber={card.no}
              />
              );
    
              
          })

     
    render(){
    
      //console.log(this.props)
      
      
        return(
         <div >
       
                         {this.cardsList[this.props.cardNumber]}
                    {/*}     <Card cards={this.state.cards}/> */}
                     
           

         </div>
        )

    }
  }
   

    // const mapDispatchToProps=(dispatch)=>{
      
    //   return{
    //     cardDetails:()=>dispatch(cardDetails())
        
    //   }
    // }

    const mapStateToProps=(state)=>{
      console.log(state)
      return{
        cards : state.firestore.ordered.cards,
        // cards:state.cardR.cards,
       //  cardNumber:1
        cardNumber:state.firestore.ordered.cards
      }
    }

export default compose(
  firestoreConnect([{collection:'cards'}]), // sync todos collection from Firestore into redux
  connect(mapStateToProps))(CardContainer)