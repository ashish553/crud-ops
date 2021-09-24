export async function getAllUsers () {
  const response = await fetch('http://localhost:8000/api/users')
  console.log('User page requested')
  return response.json()
}

export async function createUsers (data) {
  console.log(data)
  const response = await fetch('http://localhost:8000/api/user', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: data.name, email: data.email, gender: data.gender})
  })
  return response
}

export async function deleteUser (id) {
  const response = await fetch(`http://localhost:8000/api/user/${id}`, {
    method: 'DELETE'
  })
  return response
}

export async function updateUser (data) {
  const response = await fetch('http://localhost:8000/api/user', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: data.name, email: data.email, gender: data.gender, id: data.id})
  })
  return response.status
}
