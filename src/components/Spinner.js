import React, { Component } from 'react'
import loading from'/home/abdul/azeez-programs/reactJs/class-react-app/src/loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div className='container'>
        <div className="text-center"><img src={loading} alt="loading" /></div>
        
      </div>
    )
  }
}

export default spinner
