export const apiGet = (url) => () => {
    return fetch(url).then(response => response.json())
};

export const apiPut = (url, id, obj) => () => {
    return fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-Type': 'application/json' })
    }).then(response => response.json())
};