import React, { Component } from 'react'
import UserItem from './UserItem'
import users from '../users.json'




 class Userlist extends Component {

  render() {
    return (
      <div>
        {
            users.results.map(user=>{
                return(
                    <UserItem 
                    key={user.location.postcode}
                    name={user.name.first}
                    lastname={user.name.last}
                    img={user.picture.large}
                     />
                )
            })
        }
        
        


        
      </div>
    )
  }
}

export default Userlist