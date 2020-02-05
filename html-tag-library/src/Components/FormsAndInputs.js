import React, {Component} from 'react';

class FormsAndInputs extends Component {

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
                <button onClick={this.openList}>Forms and Inputs</button><br /><br />

                {
                    this.state.showList
                    ?(
                        <div className='tags'>
                            <span><strong>&lt;form&gt;</strong>: Defines an HTML form for user input</span><br /><br />
                            <span><strong>&lt;input&gt;</strong>: Defines an input control</span><br /><br />
                            <span><strong>&lt;textarea&gt;</strong>: Defines a multiline input control(text area)</span><br /><br />
                            <span><strong>&lt;button&gt;</strong>: Defines a clickable button</span><br /><br />
                            <span><strong>&lt;select&gt;</strong>: Defines a dropdown list</span><br /><br />
                            <span><strong>&lt;optgroup&gt;</strong>: Defines a group of related options in a dropdown list</span><br /><br />
                            <span><strong>&lt;option&gt;</strong>: Defines an option in a dropdown list</span><br /><br />
                            <span><strong>&lt;label&gt;</strong>: Defines a label for the <em>&lt;input&gt;</em> element</span><br /><br />
                            <span><strong>&lt;fieldset&gt;</strong>: Groups related elements in a form</span><br /><br />
                            <span><strong>&lt;legend&gt;</strong>: Defines a caption for a <em>&lt;fieldset&gt;</em> element</span><br /><br />
                            <span><strong>&lt;keygen&gt;</strong>: Defines a key-pair generator field(for forms)</span><br /><br />
                            <span><strong>&lt;output&gt;</strong>: Defines the result of a calculation</span><br /><br />
                            <span><strong>&lt;datalist&gt;</strong>: Specifies a list of pre-defined options for input controls</span><br /><br />
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

export default FormsAndInputs;