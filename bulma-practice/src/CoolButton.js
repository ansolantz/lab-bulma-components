import React from 'react';
import './CoolButton.css';

class CoolButton extends React.Component {



  render() {
    let classValue = 'button '
    classValue += this.props.className;
    if (this.props.isPrimary) {
      classValue += ' is-primary '
    } if (this.props.isSuccess) {
      classValue += ' is-success '
    } if (this.props.isDanger) {
      classValue += ' is-danger '
    } if (this.props.isSmall) {
      classValue += ' is-small '
    }

    // console.log("button " + this.props.isSuccess ? "is-success" : "");
    return (
      <div className="field">
        <button className={classValue}>{this.props.children}</button>

        {/* Not working!? */}
        {/* <button className={'button ' + this.props.isSuccess ? 'is-success' : ''}>{this.props.children}</button> */}
      </div>
    )
  }
}
export default CoolButton;