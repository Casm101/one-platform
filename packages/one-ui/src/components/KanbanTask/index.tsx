import { Draggable } from 'react-beautiful-dnd';

import './styles.scss';

export interface KanbanTaskProps {
  task: {
    id: string,
    title: string,
    description: string;
  };
  index: string;
}

/**
 * User KanbanTask component
 */
export const KanbanTask = ({
  task,
  index
}: KanbanTaskProps) => {

  const { id, title, description } = task;

  return (
    <div
      className="kanbantask-styled"
    >
      <div className="task-header">
        <span className="task-id">#ID-{id}</span>
        <span className='task-title'>{title}</span>
      </div>
      <div className="task-body">
        {description}
      </div>
    </div>
  )

  // return (
  //   <Draggable
  //     draggableId={task.id}
  //     key={task.id}
  //     index={index}
  //   >

  //     {(provided, snapshot) => {
  //       <div
  //         className="kanbantask-styled"
  //         {...provided.draggableProps}
  //         {...provided.dragHandleProps}
  //         ref={provided.innerRef}
  //         isDragging={snapshot.isDragging}
  //       >

  //       </div>
  //     }}
      
  //   </Draggable>
  // );
};
