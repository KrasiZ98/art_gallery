export async function login(value) {
  const { email, password } = value;
  try {
    const response = await fetch('http://localhost:3030/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
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

export async function register(value) {
  const { email, password, rePassword, address } = value;
  try {
    const response = await fetch('http://localhost:3030/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, rePassword, address })
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