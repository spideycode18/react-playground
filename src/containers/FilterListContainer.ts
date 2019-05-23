import { connect } from 'react-redux';
import { setFilter } from '../actions';
import FilterList from '../components/FilterList';
import { AppState } from '../types';
import { getFilter } from '../selectors';

const mapStateToProps = (state: AppState) => ({
  filter: getFilter(state),
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList);