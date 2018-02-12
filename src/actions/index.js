let nextTodoId = 0

export const ADD_TODO = 'todo/add'
export const SET_VISIBILITY_FILTER = 'todo/set_visibility_filter'
export const TOGGLE_TODO = 'todo/toggle_todo'
export const SHOW_ALL = 'todo/show_all'
export const SHOW_ACTIVE = 'todo/show_active'
export const SHOW_COMPLETED = 'todo/show_completed'

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text
    }
  }
}

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
})
