import React, { Component } from 'react'

 class UserItem extends Component {

  render(props) {
    const{id,name,img,lastname}=this.props;
    return (
        <div>
        <div key={id} className="container ">
          <div className="row w-50 justify-content-center mb-2 g-4">
          <div className="col-lg-4 col-12 ">
          <div className="card">
          <img className="card-img-top" src={img} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{name} {lastname}</h5>

    
  </div>
</div>      
          </div>
          </div>
        </div>
      </div>
    
    
    
    
        
    )
  }
}

export default UserItem