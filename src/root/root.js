import React from 'react';
import Counter from '../components/counter';

class Root extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Counter Application</h1>
                <Counter count="0"></Counter>

            </div>
        );
    }
}
 
export default Root;