//GET 
export function getTodosAPI() {
    return fetch('http://localhost:3500/todos');
}