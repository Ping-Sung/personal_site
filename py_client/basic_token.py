import requests
from getpass import getpass

endpoint = 'http://localhost:8000/api/diary/mixins/8/'
auth_endpoint = 'http://localhost:8000/api/token/'
pwd = getpass('Enter Password: ')
data = {
    'username': 'kevin',
    'password': pwd
}
auth_response = requests.post(auth_endpoint, json=data)
print(auth_response.status_code)
print(auth_response.json())

if auth_response.status_code == 200:
    headers = {
        'Authorization': 'Bearer ' + auth_response.json()['token']
    }
    get_response = requests.put(endpoint, headers=headers, data={'title': '9', 'content': 'fdasdfsafsa'})
    print(get_response.status_code)