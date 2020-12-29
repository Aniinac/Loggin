import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from '../actions/alert.actions';
import { history } from '../store/helpers/history';

function App(props) {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
    
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <main className="main">
            {/* <Navbar /> */}
            <React.Fragment>{props.children}</React.Fragment>
            {/* <Footbar /> */}
        </main>
    );
}

export default App;