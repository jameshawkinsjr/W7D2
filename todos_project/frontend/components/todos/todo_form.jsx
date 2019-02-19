import React from 'react';
import { uniqueId } from '../../util/utilities'


export default class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            completed: false,
            id: uniqueId()
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(event) {
        this.setState({title: event.currentTarget.value});
    }

    updateBody(event) {
        this.setState({body: event.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({body: "", title: "", id: uniqueId()})
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Title
                    <input onChange={this.updateTitle}  type="text" value={this.state.title}/>
                </label>


                <label> Body:
                    <input onChange={this.updateBody} type="text" value={this.state.body}/>
                </label>

                <button>Submit</button>
            </form>
        )
    }
}