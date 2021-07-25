import React from 'react';
import ChildCat from './ChildCat';
import frankie from './assets/cat.jpg';

class Parent extends React.Component{
  
    constructor(props){
        super(props);
        this.state ={
            name:'frankie',
            imgUrl: frankie           
        }
    }
  
    render(){
    return(
      <div>
          <h2>Parent</h2>
          {/* <ChildCat catName='frankie' imgUrl={frankie}/> */}
          <ChildCat catName={this.state.name} imgUrl={this.state.imgUrl}/>
          <ChildCat catName={this.state.name} imgUrl={this.state.imgUrl}/>
      </div>
    )
  }
}

export default Parent;