import React from "react";

export class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            item: ''
        }

    }

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        })
    }
    handleAddItem = () => {
        if (this.state.item !== '')
            this.setState({
                list: [...this.state.list, this.state.item],
                item: ''
            });
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input onChange={this.handleChange} type="item" value={this.state.item}/>
                <button onClick={this.handleAddItem}>Add</button>


                <table>
                    {this.state.list.map(item => (
                        <tr>
                            <td>{item}</td>
                        </tr>
                    ))}
                </table>

            </div>
        );
    }

}


