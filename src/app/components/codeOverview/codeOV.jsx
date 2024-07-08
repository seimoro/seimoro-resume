import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './style.css'

import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeOverview = (props) => {
    return (
        <div className="code-container">
            <SyntaxHighlighter language='javascript' className='code-content' style={darcula}>
                {props.code}
            </SyntaxHighlighter>
        </div>
    );
}

export default CodeOverview;