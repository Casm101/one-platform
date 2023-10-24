import { Droppable } from 'react-beautiful-dnd';

import './styles.scss';

export interface KanbanColumnProps {
  title: string;
  tasks: [];
  id: string;
}

/**
 * User KanbanColumn component
 */
export const KanbanColumn = ({
  title,
  tasks,
  id
}: KanbanColumnProps) => {


  return (
    <div className="kanbancolumn-styled">
      <p className="column-title">
        {title}
      </p>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          <div
            className="tasklist"
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.draggableProps}
          >

            {/* Tasks go in here */}
            {/* {tasks} */}

            {provided.placeholder}

          </div>
        }}
      </Droppable>
    </div>
    
  );
};
