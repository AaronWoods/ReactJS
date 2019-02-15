import { connect } from "react-redux";
import { getTodosAsync } from "../../actions/async/TodoActionsAsync";
import { App } from "../presentational/App";

export const AppContainer = connect(null, { getTodosAsync })(App);