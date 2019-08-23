import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    e.preventDefault();
    this.props.getPhotos();
  };
  render() {
    const {photos, isFetching} = this.props;
    return (
      <div>
        <button className="btn" onClick={this.onBtnClick}>кнопка</button>
        <h3>
          У тебя {photos.length}
          {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
        </h3>
      </div>
    )
  }
}

Page.propTypes = {
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};