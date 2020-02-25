import React from "react";
import PropTypes from 'prop-types';
import UserPicture from '../UserPicture';
import ColorHash from 'color-hash';

const colorHash =  new ColorHash();



function CoachCard (props) {
    const {coach:{firstName,lastName, profilePicture, level}} = props;
    const fullName = `${firstName} ${lastName}`;
    const imgStyle = {
        backgroundColor:colorHash.hex(fullName)
    };


    return(
        <div>
        <UserPicture
            style={imgStyle}
            lastName={lastName}
            firstName={firstName}
            src={profilePicture}
        />
        <div>
            <div>{fullName}</div>
            <div>Level{level}</div>
        </div>
            <div>

            </div>
        </div>
    );

}

CoachCard.defaultProps = {

};
CoachCard.propTypes = {
    coach: PropTypes.shape({
        firsName:PropTypes.string.isRequired,
        lastName:PropTypes.string.isRequired,
        profilePicture: PropTypes.string,
        level:PropTypes.number.isRequired
    })
};

export default CoachCard
