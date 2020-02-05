import React, {Component} from 'react';

class Basic extends React.Component {

    constructor() {
        super();

        this.state = {
            showList: false
        }

        this.openList = this.openList.bind(this);
        this.closeList = this.closeList.bind(this);
    }

    openList() {
        this.setState({showList: true}, () => {
            document.addEventListener('click', this.closeList)
        })
    }

    closeList() {
        this.setState({showList: false}, () => {
            document.removeEventListener('click', this.closeList)
        })
    }
    
    render() {
        return  (
            <div>
                <button  onClick={ this.openList }>
                    Basic
                </button>

                    {
                        this.state.showList
                            ?(
                                <div className='tags'>
                                    <span><strong>&lt;!Doctype&gt;</strong>:Defines the document type</span><br /><br />
                                    <span><strong>&lt;html&gt;</strong>: Defines an HTML document</span><br /><br />
                                    <span><strong>&lt;title&gt;</strong>: Defines the title for a document</span><br /><br />
                                    <span><strong>&lt;body&gt;</strong>: Defines the documents body</span><br /><br />
                                    <span><strong>&lt;h1&gt;-&lt;h6&gt;</strong>: Defines html headings</span><br /><br />
                                    <span><strong>&lt;p&gt;</strong>: Defines  a paragraph</span><br /><br />
                                    <span><strong>&lt;br&gt;</strong>: Inserts a single line break</span><br /><br />
                                    <span><strong>&lt;hr&gt;</strong>: Defines a thematic change  in content</span><br /><br />
                                    <span><strong>&lt;!--  --&gt;</strong>: Comment</span><br /><br /> 
                                </div>
                            )
                            : (
                                null
                            )
                    }
            </div>
        );  
    }
}

export default Basic;