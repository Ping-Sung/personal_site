import requests

# URL for the web service
endpoint = 'http://localhost:8000/api/diary/'


# If the service is authenticated, set the key or token

# get_response = requests.get(GET_endpoint)
# print(get_response.json())
# print(get_response.status_code)

post_response = requests.get(endpoint, data={'title': 'new one'})
print(post_response.status_code)
print(post_response.json())