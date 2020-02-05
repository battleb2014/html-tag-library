import React, { Component } from 'react';

class AudioVideo extends React.Component {

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
                    Audio/Video
                </button>
                {
                    this.state.showList
                    ?(
                        <div className='tags'>
                            <span><strong>&lt;audio&gt;</strong>: Defines sound content</span><br /><br />
                            <span><strong>&lt;source&gt;</strong>: Defines multiple media resources for media 
                                elements(<em>&lt;video&gt;</em>, <em>&lt;audio&gt;</em> and <em>&lt;picture&gt;</em>)</span><br /><br />
                            <span><strong>&lt;track&gt;</strong>: Defines text tracks for media elements(video and audio)</span><br /><br />
                            <span><strong>&lt;video&gt;</strong>: Defines a video or movie</span><br /><br />
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

export default AudioVideo;