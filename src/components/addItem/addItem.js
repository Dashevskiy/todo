import React, {Component} from 'react'
import './addItem.css'

export default class AddItem extends Component {

    state = {
        term: ''
    }

    onChangeAddItem = (e) => {
        this.setState({
            term: e.target.value
        })
    }
    addItem = () => {
        if (this.state.term.length > 0) {
            this.props.addItem(this.state.term)
            this.setState({term: ''})
        }
    }

    render() {

        return (
            <div className='bottom-panel d-flex'>
                <input className='form-control new-todo-label' type='text' onChange={this.onChangeAddItem}
                       placeholder='Label...' value={this.state.term}/>
                <button type="submit"
                        className="btn btn-outline-secondary" onClick={this.addItem}>Add
                </button>
            </div>
        )
    }
}