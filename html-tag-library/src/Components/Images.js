import React, { Component } from 'react';

class Images extends Component {

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
                    Images
                </button>

                {
                    this.state.showList
                        ?(
                            <div className='tags'>
                                <span><strong>&lt;img&gt;</strong>: Defines an image</span><br /><br />
                                <span><strong>&lt;map&gt;</strong>: Defines a client-side image-map</span><br /><br />
                                <span><strong>&lt;area&gt;</strong>: Defines an area inside an image-map</span><br /><br />
                                <span><strong>&lt;canvas&gt;</strong>: Used to draw graphics, on the fly, via scripting(usually Javascript)</span><br /><br />
                                <span><strong>&lt;figcaption&gt;</strong>: Defines a caption for a <em>&lt;figure&gt;</em> element</span><br /><br />
                                <span><strong>&lt;figure&gt;</strong>: Specifies self-contained content</span><br /><br />
                                <span><strong>&lt;picture&gt;</strong>: Defines a container for multiple image resources</span><br /><br />
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

export default Images;