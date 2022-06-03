import React, { Component } from 'react'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import MainBody from './MainBody'


export default class HomeLayout extends Component {
  render() {
    return (
      <div>
      <MainHeader />
      <MainBody/>
      <MainFooter />
      </div>
      )
  }
}


// import React from 'react'
// import Header from './header'

// const HomeLayout = () => {
//   return (
//     <Header />
//   )
// }

// export default HomeLayout