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
    body: JSON.stringify({projectname: data.projectname, sitename: data.sitename, gender: data.gender, siteurl: data.siteurl, normal: data.normal, disruption: data.disruption, responsetime: data.responsetime, availability: data.availability, dynamic: data.dynamic, ssl: data.ssl, broken: data.broken})
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
    body: JSON.stringify({projectname: data.projectname, sitename: data.sitename, gender: data.gender, id: data.id, siteurl: data.siteurl, normal: data.normal, disruption: data.disruption, responsetime: data.responsetime, availability: data.availability, dynamic: data.dynamic, ssl: data.ssl, broken: data.broken})
  })
  return response.status
}
