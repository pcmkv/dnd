import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Col, Row, Button ,Grid} from 'react-bootstrap';
import {Board} from '../stories/src/board/board';

// fake data generator
class App extends Component {

  render() {
    return (
        <div>
          <h1>hello</h1>
         <Board />
          </div>
  );
  }
}

export default App;