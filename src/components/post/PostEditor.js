import React from 'react';
import postAgent from "../../agents/postAgent";

export default class PostEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            content: ''
        }
    }

    submitPost = () => {
        postAgent.create(this.state).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <input type={'text'}
                        value={this.state.title}
                        onChange={e => {
                            this.setState({title: e.target.value})
                        }}/>
                <input type={'text'}
                       value={this.state.category}
                       onChange={e => {
                           this.setState({category: e.target.value})
                       }}/>
                <textarea wrap={'hard'} cols={100} rows={100}
                          value={this.state.content}
                          onChange={e => {
                              this.setState({content: e.target.value})
                          }}/>
                <button onClick={this.submitPost}>submit</button>
            </div>
        )
    }
}