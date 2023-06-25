import requests

# URL for the web service
GET_endpoint = 'http://localhost:8000/api/diary/1/'
POST_endpoint = 'http://localhost:8000/api/diary/delete/1/'


# If the service is authenticated, set the key or token

# get_response = requests.get(GET_endpoint)
# print(get_response.json())
# print(get_response.status_code)

post_response = requests.delete(POST_endpoint, json={'title': 'updated', 'content': 'updated'})
print(post_response.json())
print(post_response.status_code)