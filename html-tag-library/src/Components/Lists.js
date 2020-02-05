import React, { Component } from 'react';

class Lists extends React.Component {
    
constructor() {
    super();

    this.state = {
        showList: false
    }
    this.openList = this.openList.bind(this);
    this.closeList = this.closeList.bind(this);
}

openList() {
    this.setState({ showList: true }, () => {
        document.addEventListener('click', this.closeList )
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
                    Lists
                </button>

                {
                    this.state.showList
                    ?(
                        <div className='tags'>
                            <span><strong>&lt;ul&gt;</strong>: Defines an unordered list</span><br /><br />
                            <span><strong>&lt;ol&gt;</strong>: Defines an ordered list</span><br /><br />
                            <span><strong>&lt;li&gt;</strong>: Defines a list item</span><br /><br />
                            <span><strong>&lt;dl&gt;</strong>: Defines a description list</span><br /><br />
                            <span><strong>&lt;dt&gt;</strong>: Defines a term/name in a description list</span><br /><br />
                            <span><strong>&lt;dd&gt;</strong>: Defines a description of a term/name in a description list</span><br /><br />
                            <span><strong>&lt;menu&gt;</strong>: Defines a list/menu of commands</span><br /><br />
                            <span><strong>&lt;menuitem&gt;</strong>: Defines a command/menu item that the user
                                can invoke from a popup menu</span><br /><br />
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

export default Lists;