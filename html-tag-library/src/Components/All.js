import React, {Component} from 'react';

class All extends Component {

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
        return (
            <div>
                <button onClick={ this.openList }>All</button><br /> <br /><br />
                    
                    {
                        this.state.showList
                            ?(
                                <div className='list'>
                                    <span><strong>&lt;!Doctype&gt;</strong>:Defines the document type</span><br /><br />
                                    <span><strong>&lt;html&gt;</strong>: Defines an HTML document</span><br /><br />
                                    <span><strong>&lt;title&gt;</strong>: Defines the title for a document</span><br /><br />
                                    <span><strong>&lt;body&gt;</strong>: Defines the documents body</span><br /><br />
                                    <span><strong>&lt;h1&gt;-&lt;h6&gt;</strong>: Defines html headings</span><br /><br />
                                    <span><strong>&lt;p&gt;</strong>: Defines  a paragraph</span><br /><br />
                                    <span><strong>&lt;br&gt;</strong>: Inserts a single line break</span><br /><br />
                                    <span><strong>&lt;hr&gt;</strong>: Defines a thematic change  in content</span><br /><br />
                                    <span><strong>&lt;!--  --&gt;</strong>: Comment</span><br /><br /> 
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
                                    <span><strong>&lt;iframe&gt;</strong>: Defines an inline frame</span><br /><br />
                                    <span><strong>&lt;img&gt;</strong>: Defines an image</span><br /><br />
                                    <span><strong>&lt;map&gt;</strong>: Defines a client-side image-map</span><br /><br />
                                    <span><strong>&lt;area&gt;</strong>: Defines an area inside an image-map</span><br /><br />
                                    <span><strong>&lt;canvas&gt;</strong>: Used to draw graphics, on the fly, via scripting(usually Javascript)</span><br /><br />
                                    <span><strong>&lt;figcaption&gt;</strong>: Defines a caption for a <em>&lt;figure&gt;</em> element</span><br /><br />
                                    <span><strong>&lt;figure&gt;</strong>: Specifies self-contained content</span><br /><br />
                                    <span><strong>&lt;picture&gt;</strong>: Defines a container for multiple image resources</span><br /><br />
                                    <span><strong>&lt;audio&gt;</strong>: Defines sound content</span><br /><br />
                                    <span><strong>&lt;source&gt;</strong>: Defines multiple media resources for media 
                                        elements(<em>&lt;video&gt;</em>, <em>&lt;audio&gt;</em> and <em>&lt;picture&gt;</em>)</span><br /><br />
                                    <span><strong>&lt;track&gt;</strong>: Defines text tracks for media elements(video and audio)</span><br /><br />
                                    <span><strong>&lt;video&gt;</strong>: Defines a video or movie</span><br /><br />
                                    <span><strong>&lt;a&gt;</strong>: Defines a hyperlink</span><br /> <br />
                                    <span><strong>&lt;link&gt;</strong>: Defines a relationship between a document and an external
                                        resource(most used to link to style sheets)</span><br /> <br />
                                    <span><strong>&lt;nav&gt;</strong>: Defines navigation links</span><br /> <br />
                                    <span><strong>&lt;ul&gt;</strong>: Defines an unordered list</span><br /><br />
                                    <span><strong>&lt;ol&gt;</strong>: Defines an ordered list</span><br /><br />
                                    <span><strong>&lt;li&gt;</strong>: Defines a list item</span><br /><br />
                                    <span><strong>&lt;dl&gt;</strong>: Defines a description list</span><br /><br />
                                    <span><strong>&lt;dt&gt;</strong>: Defines a term/name in a description list</span><br /><br />
                                    <span><strong>&lt;dd&gt;</strong>: Defines a description of a term/name in a description list</span><br /><br />
                                    <span><strong>&lt;menu&gt;</strong>: Defines a list/menu of commands</span><br /><br />
                                    <span><strong>&lt;menuitem&gt;</strong>: Defines a command/menu item that the user
                                        can invoke from a popup menu</span><br /><br />
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
                                    <span><strong>&lt;head&gt;</strong>: Defines information about the document</span><br /><br />
                                    <span><strong>&lt;meta&gt;</strong>: Defines metadata about an HTML document</span><br /><br />
                                    <span><strong>&lt;base&gt;</strong>: Specifies the base URL/target for all relative 
                                    URL's in a document</span><br /><br />
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

export default All;