import React, { Component } from 'react';

class Meta extends Component {

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
                    Meta
                </button>

                {
                    this.state.showList
                    ?(
                        <div className='tags'>
                            <span><strong>&lt;head&gt;</strong>: Defines information about the document</span><br /><br />
                            <span><strong>&lt;meta&gt;</strong>: Defines metadata about an HTML document</span><br /><br />
                            <span><strong>&lt;base&gt;</strong>: Specifies the base URL/target for all relative 
                            URL's in a document</span><br /><br />
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

export default Meta;