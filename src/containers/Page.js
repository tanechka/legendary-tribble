import React from 'react'
import { connect } from 'react-redux'
import { Page as PageComponent } from '../components/Page'
import { getPhotos } from '../actions/PageActions'

class Page extends React.Component {
  render() {
    const { page, getPhotos } = this.props;
    return (
      <PageComponent
        photos={page.photos}
        isFetching={page.isFetching}
        error={page.error}
        getPhotos={getPhotos}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: () => dispatch(getPhotos()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)