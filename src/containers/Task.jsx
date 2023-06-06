import Task from "../components/Task.jsx";
import { DragSource, DropTarget } from "react-dnd";
import * as objectTypes from "../redux/types/objectTypes";

const taskSource = {
    beginDrag(props) {
        const item = {
            id: props.id,
        };

        return item;
    },
    isDragging(props, monitor) {
        return props.id === monitor.getItem().id;
    },
};

const taskTarget = {
    hover(targetProps, monitor) {
        const targetId = targetProps.id;
        const sourceProps = monitor.getItem();
        const sourceId = sourceProps.id;

        if (sourceId !== targetId) {
            targetProps.onMoveTask(sourceId, targetId);
        }
    },
};

const collectDragSource = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
});

const collectDropTarget = (connect) => ({
    connectDropTarget: connect.dropTarget(),
});

export default DragSource(
    objectTypes.TASK,
    taskSource,
    collectDragSource
)(DropTarget(objectTypes.TASK, taskTarget, collectDropTarget)(Task));
