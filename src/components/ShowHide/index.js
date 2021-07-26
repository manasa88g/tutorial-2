// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstnameStatus: 'hide', lastnameStatus: 'hide'}

  showHideFirstname = () => {
    const {firstnameStatus} = this.state
    if (firstnameStatus === 'hide') {
      this.setState({firstnameStatus: 'show'})
      console.log(firstnameStatus)
    } else {
      this.setState({firstnameStatus: 'hide'})
    }
  }

  showHideLastname = () => {
    const {lastnameStatus} = this.state
    if (lastnameStatus === 'hide') {
      this.setState({lastnameStatus: 'show'})
    } else {
      this.setState({lastnameStatus: 'hide'})
    }
  }

  render() {
    const {firstnameStatus, lastnameStatus} = this.state
    let firstnameContainer
    let lastnameContainer
    if (firstnameStatus === 'show') {
      firstnameContainer = (
        <div className="name-container">
          <p className="name">Joe</p>
        </div>
      )
    } else {
      firstnameContainer = null
    }
    if (lastnameStatus === 'show') {
      lastnameContainer = (
        <div className="name-container">
          <p className="name">Jonas</p>
        </div>
      )
    } else {
      lastnameContainer = null
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="details-container">
            <button
              type="button"
              className="button"
              onClick={this.showHideFirstname}
            >
              Show/Hide Firstname
            </button>
            {firstnameContainer}
          </div>
          <div className="details-container">
            <button
              type="button"
              className="button"
              onClick={this.showHideLastname}
            >
              Show/Hide Lastname
            </button>
            {lastnameContainer}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
