import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions'

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: (name, age) => dispatch({type: actionTypes.PERSONADDEDHANDLER, personData: {name: name, age: age}}),
        personDeletedHandler: (personId) => dispatch({type: actionTypes.PERSONDELETEDHANDLER, personId: personId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);