/**
 * React Redux Container Component template as demonstrated by Corey House in his Pluralsight video https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ${NAME} extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

${NAME} .propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(${NAME});


