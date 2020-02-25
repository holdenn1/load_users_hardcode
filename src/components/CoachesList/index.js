import React, {Component} from 'react';
import CoachCard from "../UserCard";

const data =[
    {
        id: '1',
        firstName:'Test',
        lastName: 'Java',
        level: 2,
        profilePicture:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'
    },
    {
        id: '2',
        firstName:'Java',
        lastName: 'Script',
        level: 1,
        profilePicture:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'
    }
];

class CoachesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            coaches:data,
            error: null
        };
    }

    render() {
        const {coaches} = this.state;
        return(
            <ul>
                {
                    coaches.map(coach =>(
                        <li key={coach.id}>
                             <CoachCard coach={coach}/>
                        </li>
                        )
                    )
                }
            </ul>
        )
    }
}


export default CoachesList;