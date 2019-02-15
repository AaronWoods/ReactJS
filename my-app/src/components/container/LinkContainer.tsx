import { connect } from "react-redux";
import { Link } from "../presentational/Link";
import { State } from "../../reducers/TodoReducers";
import { SetVisibilityFilter } from "../../actions/TodoActions";

//we have to configure both 
//mapStateToProp
//mapDispatchToProp

interface OwnProps{
    filter:string
}

const mapStateToProp = (state:State, ownProps: OwnProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter
    }
}

const mapDispatchToProp = (dispatch:any, ownProps: OwnProps) => {
    return {
        onClick: () => dispatch(SetVisibilityFilter(ownProps.filter))
    }
}

export const LinkContainer = connect(mapStateToProp, mapDispatchToProp)(Link)