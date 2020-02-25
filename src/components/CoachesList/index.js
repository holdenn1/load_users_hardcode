import React, {Component} from 'react';
import _ from 'lodash';
import CoachCard from "../CoachCard";
import styles from './CoachesList.module.css'

const data =[
    {
        id: '1',
        firstName:'Test',
        lastName: 'Java',
        level: 2,
        profilePicture:'https://upoad.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'
    },
    {
        id: '2',
        firstName:'Java',
        lastName: 'Script',
        level: 1,
        profilePicture:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'
    },
    {
        id: '3',
        firstName:'Test',
        lastName: 'Java',
        level: 2,
        profilePicture:'https://upoad.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'
    },
    {
        id: '4',
        firstName:'Java',
        lastName: 'Script',
        level: 1,
        profilePicture:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'
    },
    {
        id: '5',
        firstName:'Test',
        lastName: 'Java',
        level: 2,
        profilePicture:'https://upoad.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'
    },
    {
        id: '6',
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
            coaches:[],
            error: null
        };
    }

    loadData = () =>{
        this.setState({
            isFetching:true
        });
        setTimeout(() => {
          this.setState({
              isFetching:false,
              coaches:data.map(item => {
                  return({
                      ...item, isSelected: false,
                  });
              })
          })
        }, 2000)
    };

    selectCoachByIndex = (index) =>{
        const newItems =  _.cloneDeep(this.state.coaches)
        newItems[index].isSelected = !newItems[index].isSelected;
        this.setState({
            coaches: newItems
        });
    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        const {coaches} = this.state;
        return(
            <ul className={styles.container}>
                {
                    <li className={styles.listItem}>
                        To:{
                        coaches.filter(item => item.isSelected).map(selectedCoach => `${selectedCoach.firstName} ${selectedCoach.lastName}`).join(', ')
                    }
                    </li>
                }
                {
                    coaches.map((coach, index) =>(
                            <li className={styles.listItem} key={coach.id}>
                                <CoachCard setSelected={this.selectCoachByIndex} index={index} coach={coach}/>
                            </li>
                        )
                    )
                }
            </ul>
        )
    }
}


export default CoachesList;