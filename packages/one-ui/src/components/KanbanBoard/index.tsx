import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import './styles.scss';

export interface KanbanBoardProps {

}

/**
 * User KanbanBoard component
 */
export const KanbanBoard = ({

}: KanbanBoardProps) => {

  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncompleted] = useState([]);

  return (
    <DragDropContext>
      <div className="kanbanboard-styled">

      </div>
    </DragDropContext>
  );
};
