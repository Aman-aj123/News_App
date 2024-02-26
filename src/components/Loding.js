import React, { Component } from 'react'

export default class Loding extends Component {
     render() {
          return (
               <div className="loading-img my-5 d-flex justify-content-center" style={{ width: '100%', alignItems: 'center' }}>
                    <img style={{ width: '40px' }} src="https://i.gifer.com/ZKZg.gif" alt="loading" />
               </div>
          )
     }
}
