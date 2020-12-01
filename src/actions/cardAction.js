
const cardDetails =()=>{
  return(dispatch,getState,{getFirebase,getFirestore})=>{

    const firestore=getFirestore();
    firestore.collection('cards').get().then((card)=>{
        dispatch({type:'VIEW_DETAILS',payload:card})
    })
  }

}