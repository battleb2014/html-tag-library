import React, { Component } from 'react';

class Links extends React.Component {

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
                    Links
                </button>
                
                {
                    this.state.showList
                    ? (
                        <div className='tags'>
                            <span><strong>&lt;a&gt;</strong>: Defines a hyperlink</span><br /> <br />
                            <span><strong>&lt;link&gt;</strong>: Defines a relationship between a document and an external
                                resource(most used to link to style sheets)</span><br /> <br />
                            <span><strong>&lt;nav&gt;</strong>: Defines navigation links</span><br /> <br />
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

export default Links;