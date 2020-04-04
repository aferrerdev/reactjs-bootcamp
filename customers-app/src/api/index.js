export const apiGet = (url) => () => {
    return fetch(url).then(response => response.json())
};

export const apiPut = (url, id, obj) => () => {
    return fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .then(response => response.json())
};

export const apiPost = (url, obj) => () => {
    return fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .then(response => response.json())
};

export const apiDelete = (url, id) => () => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .then(response => response.json())
};
