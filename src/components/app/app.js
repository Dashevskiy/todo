import React, {Component} from 'react'
import Header from "../header/header";
import Search from "../search/search";
import Filter from "../filter/filter";
import TodoList from "../todoList/todoList";
import AddItem from "../addItem/addItem";
import './app.css'

export default class App extends Component {

    state = {
        todoData: [],
        term: '',
        filter: '',
        id: 4
    }
    onToggleProps = (id, propsName) => {
        this.setState(({todoData}) => {
            let idx = todoData.findIndex((item) => item.id === id)

            let newItem = {...todoData[idx], [propsName]: !todoData[idx][propsName]}

            let newArr = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArr
            }
        })
    }
    onToggleDone = (id) => {
        this.onToggleProps(id, 'done')
    }
    onToggleImportant = (id) => {
        this.onToggleProps(id, 'important')
    }
    onDeleteItem = (id) => {
        this.setState(({todoData}) => {
            let idx = todoData.findIndex((item) => item.id === id)
            let newArr = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArr
            }
        })
    }
    addItem = (term) => {
        this.setState(({todoData}) => {
            let newItem = {
                id: todoData.length + 2,
                label: term,
                done: false,
                important: false
            }
            return {
                todoData: [...todoData, newItem]
            }
        })
    }
    onSearchChange = (e) => {
        let term = e.target.value;
        this.setState({term})
    }
    search = (arr, term) => {
        return arr.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }
    onFilterChange = (e) => {
        let filter = e.target.innerText;
        this.setState({filter})

    }
    filter = (arr, filter) => {

        switch (filter) {
            case 'All':
                return arr

            case 'Active':
                return arr.filter((item) => !item.done)

            case 'Done':
                return arr.filter((item) => item.done)

            default:
                return arr
        }
    }

    render() {
        const {todoData, term, filter} = this.state

        let visibleItems = this.filter(this.search(todoData, term), filter)

        const countDone = todoData.filter((el) => el.done).length;
        const countTodo = todoData.length - countDone;

        return (
            <div className='todo-app'>
                <Header countDone={countDone} countTodo={countTodo}/>
                <div className="search-panel d-flex">
                    <Search search={this.onSearchChange}/>
                    <Filter filter={this.onFilterChange}/>
                </div>
                <TodoList todoData={visibleItems}
                          onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}
                          onDeleteItem={this.onDeleteItem}/>
                <AddItem addItem={this.addItem}/>
            </div>
        )
    }
}