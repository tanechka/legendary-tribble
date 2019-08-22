import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    e.preventDefault();
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year);
  };
  renderButtons = () => {
    const years = [2018, 2017, 2016, 2015, 2014];

    return years.map((item, index) => {
      return (
        <button key={index} className="btn" onClick={this.onBtnClick}>
          {item}
        </button>
      )
    })
  };

  render() {
    const {year, photos, isFetching} = this.props;
    return (
      <div>
        <p>{this.renderButtons()}</p>
        <h3>
          У тебя {photos.length} фото за {year} год
          {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
        </h3>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};