import React, { Component } from 'react';

class Programming extends React.Component {

    constructor() {
        super()

        this.state = {
            showList: false
        }
    this.openList = this.openList.bind(this);
    this.closeList = this.closeList.bind(this);
}

openList() {
    this.setState({ showList: true }, () => {
        document.addEventListener('click', this.closeList)
    })
}

closeList() {
    this.setState({ showList: false }, () => {
            document.removeEventListener('click', this.closeList)
    })
}

    render() {
        return  (
            <div>
                <button onClick={ this.openList }>
                    Programming
                </button>

                {
                    this.state.showList
                    ? (
                        <div className='tags'>
                            <span><strong>&lt;script&gt;</strong>: Defines a client-side script</span><br /><br />
                            <span><strong>&lt;noscript&gt;</strong>: Defines an alternate content for users
                                that do not support client-side scripts</span><br /><br />
                            <span><strong>&lt;embed&gt;</strong>: Defines a container for an external
                                (non-HTML) application</span><br /><br />
                            <span><strong>&lt;object&gt;</strong>: Defines an embedded object</span><br /><br />
                            <span><strong>&lt;param&gt;</strong>: Defines a parameter for an object</span><br /><br />
                        </div>
                    ) :
                    (
                        null
                    )
                }   
            </div>
        );
    }
}

export default Programming;