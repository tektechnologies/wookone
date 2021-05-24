import React from 'react';




class FavoriteFoods extends React.Component {
  render() {
    return(
      <div className='favoriteFood'>
        <h2>{this.props.title}</h2>
        <img src={this.props.src} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default FavoriteFoods;