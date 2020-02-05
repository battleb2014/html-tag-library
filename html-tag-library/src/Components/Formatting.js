import React, { Component } from 'react';

class Formatting extends Component  {

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
                    Formatting
                </button>

                {
                    this.state.showList
                    ? (
                        <div className='tags'>
                            <span><strong>&lt;abbr&gt;</strong>: Defines an abbreviation or an acronym</span><br /><br />
                            <span><strong>&lt;address&gt;</strong>: Defines contact info</span><br /><br />
                            <span><strong>&lt;b&gt;</strong>: Defines bold text</span><br /><br />
                            <span><strong>&lt;bdi&gt;</strong>: Isolates a part of text that may be formatted 
                                in a different direction from other text outside it</span><br /><br />
                            <span><strong>&lt;bdo&gt;</strong>: Overrides the current text direction</span><br /><br />
                            <span><strong>&lt;blockquote&gt;</strong>: Defines a section that is quoted from another source</span><br /><br />
                            <span><strong>&lt;cite&gt;</strong>: Defines the title of a work</span><br /><br />
                            <span><strong>&lt;code&gt;</strong>: Defines a piece of computer code</span><br /><br />
                            <span><strong>&lt;del&gt;</strong>: Defines text that has been deleted</span><br /><br />
                            <span><strong>&lt;dfn&gt;</strong>: Represents the defining instance of a term</span><br /><br />
                            <span><strong>&lt;em&gt;</strong>: Defines emphasized text</span><br /><br />
                            <span><strong>&lt;i&gt;</strong>: Defines a part of text in an alternate voice/mood</span><br /><br />
                            <span><strong>&lt;ins&gt;</strong>: Defines a text that has been inserted into the document</span><br /><br />
                            <span><strong>&lt;kbd&gt;</strong>: Defines keyboard input</span><br /><br />
                            <span><strong>&lt;mark&gt;</strong>: Defines marked/highlighted text</span><br /><br />
                            <span><strong>&lt;meter&gt;</strong>: Defines a scalar measurementwithin a known range(a guage)</span><br /><br />
                            <span><strong>&lt;pre&gt;</strong>: Defines preformatted text</span><br /><br />
                            <span><strong>&lt;progress&gt;</strong>: Represents the progress of a task</span><br /><br />
                            <span><strong>&lt;q&gt;</strong>: Defines a short quotations</span><br /><br />
                            <span><strong>&lt;rp&gt;</strong>: Defines what to show in browsers that do not support
                                ruby annotations</span><br /><br />
                            <span><strong>&lt;rt&gt;</strong>: Defines an explanation/pronunciation of characters(for East Asian typography)</span><br /><br />
                            <span><strong>&lt;ruby&gt;</strong>: Defines a ruby annotation(for East Asian typography)</span><br /><br />
                            <span><strong>&lt;s&gt;</strong>: Defines text that is no longer correct</span><br /><br />
                            <span><strong>&lt;samp&gt;</strong>: Defines sample output</span><br /><br />
                            <span><strong>&lt;small&gt;</strong>: Defines smaller text</span><br /><br />
                            <span><strong>&lt;strong&gt;</strong>: Defines important text</span><br /><br />
                            <span><strong>&lt;sub&gt;</strong>: Defines subscripted text(below)</span><br /><br />
                            <span><strong>&lt;sup&gt;</strong>: Defines superscripted text(above)</span><br /><br />
                            <span><strong>&lt;time&gt;</strong>: Defines a date/time</span><br /><br />
                            <span><strong>&lt;u&gt;</strong>: Defines text that should be stylistically different from normal text</span><br /><br />
                            <span><strong>&lt;var&gt;</strong>: Defines a variable</span><br /><br />
                            <span><strong>&lt;wbr&gt;</strong>: Defines a possible line break</span><br /><br />
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        );
    }    
}


export default Formatting;