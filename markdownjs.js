const projectName = "markdown-previewer";

marked.setOptions({
  breaks: true
});

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: mdDefault
    }
    this.markdownUpdate = this.markdownUpdate.bind(this);
  }
  
  markdownUpdate(e){
    e.preventDefault();
    this.setState({
      markdown:e.target.value
    })
  }
  
 
  render() {
 

  return (
    <div className='App container'>
        <h1 className='toph1'>Markdown Previewer</h1>
    <div className='mdeditor'>
      
      <p className='toptwoheader'>Editor</p>
      <textarea id="editor" rows="20" cols="100" value={this.state.markdown} onChange={this.markdownUpdate}>
</textarea>
    </div> 
  
    <div className='mdpreviewer'>
    <div className='previewer'>Previewer</div>
      <div dangerouslySetInnerHTML={{
        __html: marked(this.state.markdown)
      }}
       id='preview'
        ></div>
    </div> 
    
  
  </div>
    )
  
  }  
}


const mdDefault = `# This is an h1 in markdown to create an h1 you need to type '#' without quotation then add your text.

## To create an h2 tag(sub-header) you just need to double the hash '##' then add your text.

You can also write some code(s) like this:
\`<div></div>\` , \`<h1>/<h1>\` and more!!!

\`\`\`
And to create h3-h5 just follow the logic the number of hash sign you have represents the header number you'll have

Now, you might be wondering where we are typing now. Glad you wonder, we are currently in the multi-line code.

function thisExample(last, first) {
 if (last == '' && first == ''){
     return lname + ' ' + fName;
   }
}
\`\`\` 

To make the text **bold**... you simply need to add 'double asterisk' before and after your word or sentence!
 You can also italicized a _text_ by using 'underscore' before and after a text or if you _**want**_ you can do this!


 To add links simply do this. [Hey! Click me if you want to learn web development!](https://www.freecodecamp.com) and
 > Block Quotes! Like this!

 - Here is a list.
  - This indentation level is a bullet.
     - This one isn't.
        - You can go this deep(evil grin).
  - Back to bullet

  For the last challenge you can add an image too!

  ![React Logo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)

`;

ReactDOM.render(<App />, document.getElementById('root'));