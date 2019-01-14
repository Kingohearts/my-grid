import React from 'react';
import ReactDOM from 'react-dom';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './index.css';



var ReactGridLayout = require('react-grid-layout');

class MyGrid extends React.Component {
render () {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [{i: 'c', x: 4, y: 0, w: 1, h: 2},
  {i: 'd', x: 4, y: 0, w: 1, h: 2},
  {i: 'e', x: 4, y: 0, w: 1, h: 2},
  {i: 'f', x: 4, y: 0, w: 1, h: 2}];

    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200} style={{backgroundColor:'darkgray'}}>

        <div key="c" style={{ textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'

                   }}>
             <h4 >Panel Title</h4>
             <div>
                  <h1>245</h1>
             </div>
        </div>
        <div key="d" style={{ textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'

                   }}>
             <h4 >Panel Title</h4>
             <div>
                  <h1 >245</h1>
             </div>
        </div>
        <div key="e" style={{ textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'

                   }}>
               <h4 >Panel Title</h4>
               <div>
                    <h1 >245</h1>
               </div>
          </div>
          <div key="f" style={{ textAlign: 'center',
          backgroundColor: 'black',
          color: 'white'

                     }}>
               <h4 >Panel Title</h4>
               <div>
                    <h1 >245</h1>
               </div>
          </div>

      </ReactGridLayout>
    )
  }}


ReactDOM.render(<MyGrid/>, document.getElementById('root'));
