export async function create(gallery) {
  try {
    const response = await fetch('http://localhost:3030/jsonstore/gallery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gallery)
    });

    if (response.ok === false) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    return error;
  }
}

export async function update(id, gallery) {
  try {
    const response = await fetch('http://localhost:3030/jsonstore/gallery/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gallery)
    });

    if (response.ok === false) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    return error;
  }
}

export async function remove(id) {
  try {
    const response = await fetch('http://localhost:3030/jsonstore/gallery/' + id, {
      method: 'DELETE',
    });

    if (response.ok === false) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    return error;
  }
}