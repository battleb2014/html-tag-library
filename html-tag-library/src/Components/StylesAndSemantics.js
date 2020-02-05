import React, { Component } from 'react';

class StylesAndSemantics extends React.Component {
    
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
                    Styles and Semantics
                </button>

                {
                    this.state.showList
                    ? (
                        <div className='tags'>
                            <span><strong>&lt;style&gt;</strong>: Defines style information for a document</span><br /><br />
                            <span><strong>&lt;div&gt;</strong>: Defines a section in the document</span><br /><br />
                            <span><strong>&lt;span&gt;</strong>: Defines a section in the document</span><br /><br />
                            <span><strong>&lt;header&gt;</strong>: Defines a header for a document or section</span><br /><br />
                            <span><strong>&lt;footer&gt;</strong>: Deines a footer for a document or section</span><br /><br />
                            <span><strong>&lt;main&gt;</strong>: Specifies the main content of a document</span><br /><br />
                            <span><strong>&lt;section&gt;</strong>: Defines a section in a document</span><br /><br />
                            <span><strong>&lt;article&gt;</strong>: Defines an article</span><br /><br />
                            <span><strong>&lt;aside&gt;</strong>: Defines content aside from the main content</span><br /><br />
                            <span><strong>&lt;details&gt;</strong>: Defines additional details users can view or hide</span><br /><br />
                            <span><strong>&lt;summary&gt;</strong>: Defines a visible heading for a <em>&lt;details&gt;</em> element</span><br /><br />
                            <span><strong>&lt;data&gt;</strong>: Links the given content with a machine-readable translation</span><br /><br />
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

export default StylesAndSemantics;