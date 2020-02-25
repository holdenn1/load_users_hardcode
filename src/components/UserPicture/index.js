import React, {Component} from "react";
import PropTypes from 'prop-types'

class UserPicture extends Component{

    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    onErrorHandler = (e)  => {
        console.dir(e);
        this.setState({
            error: e.error
        });
    };

    render() {
        const {error} = this.state;
        const {src, firstName, lastName} = this.props;
        return(
            (error || !src)
                ?
                <span  {...this.props}>{`${firstName.charAt(0)}${lastName.charAt(0)}`}</span>
                :
                <img {...this.props} src={src} alt="user picture" onError={this.onErrorHandler}/>

        )
    }

}


UserPicture.defaultProps = {


};
UserPicture.propTypes = {
    src:PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

export default UserPicture;