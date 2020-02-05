import React, { Component } from 'react';

class Frames extends React.Component {

    constructor() {
        super();

        this.state = {
            showList: false
        }
        this.openList = this.openList.bind(this);
        this.closeList  = this.closeList.bind(this);
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
                <button onClick={this.openList}>
                    Frames
                </button>

                {
                this.state.showList
                ?(
                    <div className='tags'>
                        <span>&lt;iframe&gt;: Defines an inline frame</span><br /><br />
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

export default Frames;