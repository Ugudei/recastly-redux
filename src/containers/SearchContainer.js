import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';




let mapStateToProps = (state) => {  // pass value as prop
  return {};
};
let mapDispatchToProps = (dispatch) => { // pass function as prop (optional)
  return {
    handleSearchInputChange: (queryString) => {
      dispatch(handleSearchChange(queryString));
    }
  };
};
//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
