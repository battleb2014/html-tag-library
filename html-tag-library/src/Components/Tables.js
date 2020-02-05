import React, { Component } from 'react';

class Tables extends Component {

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
                    Tables
                </button>

                {
                    this.state.showList
                    ?(
                        <div className='tags'>
                            <span><strong>&lt;table&gt;</strong>: Defines a table</span><br /><br />
                            <span><strong>&lt;caption&gt;</strong>: Defines a table caption</span><br /><br />
                            <span><strong>&lt;th&gt;</strong>: Defines a header cell in a table</span><br /><br />
                            <span><strong>&lt;tr&gt;</strong>: Defines a row in a table</span><br /><br />
                            <span><strong>&lt;td&gt;</strong>: Defines a cell in a table</span><br /><br />
                            <span><strong>&lt;thead&gt;</strong>: Groups the header content in a table</span><br /><br />
                            <span><strong>&lt;tbody&gt;</strong>: Groups the body content in a table</span><br /><br />
                            <span><strong>&lt;tfoot&gt;</strong>: Groups the footer content in a table</span><br /><br />
                            <span><strong>&lt;col&gt;</strong>: Specifies column properties for each column within
                                a <em>&lt;colgroup&gt;</em> element</span><br /><br />
                            <span><strong>&lt;colgroup&gt;</strong>: Specifies a group of one or more columns in
                                a table for formatting</span><br /><br />
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

export default Tables;