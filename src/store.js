export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    // Creamos la función que añade a favoritos:
    case 'add_to_favorites':

      const { name, item, itemType } = action.payload;

      
      // Buscamos que el nombre del objeto no exista ya dentro del array de favoritos
      if (store.favorites.find(favorite => favorite.name === name)){
        return store;
      }

      return {
        ...store,
        favorites: [...store.favorites, { ...item, type: itemType }]
      }
      

    case 'delete_from_favorites':

      return {
        ...store,
        favorites: store.favorites.filter(favorite => favorite.name !== action.payload)
      }
    
    default:
      throw Error('Unknown action.');
  }
}
