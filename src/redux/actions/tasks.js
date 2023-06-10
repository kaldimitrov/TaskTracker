import { v4 as uuidv4 } from 'uuid';

import { validateUUIDv4 } from "../../utils/validator";
import * as actionTypes from "../types/actionTypes";


function createTask(text) {
  return {
    type: actionTypes.CREATE_TASK,
    payload: {
      id: uuidv4(),
      editing: false,
      text,
    },
  };
}


function updateTask(updatedTask) {
  if (!validateUUIDv4(updatedTask.id)) {
    throw new Error(
      `params have not valid uuids ${JSON.stringify(updatedTask)}`
    );
  }

  return {
    type: actionTypes.UPDATE_TASK,
    payload: updatedTask,
  };
}


function deleteTask(id) {
  if (!validateUUIDv4(id)) {
    throw new Error(`params have not valid uuids ${id}`);
  }

  return {
    type: actionTypes.DELETE_TASK,
    payload: {
      id,
    },
  };
}

export default {
  createTask,
  updateTask,
  deleteTask,
};
