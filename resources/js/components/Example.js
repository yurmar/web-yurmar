import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header text-center">React.YurMar</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

ReactDOM.render(<Example />, document.getElementById('example'));
serviceWorker.unregister();
