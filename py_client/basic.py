import requests

# URL for the web service
endpoint = 'http://localhost:8000/api/diary/29/delete/'


# If the service is authenticated, set the key or token

# get_response = requests.get(GET_endpoint)
# print(get_response.json())
# print(get_response.status_code)

get_response = requests.delete(endpoint)
# print(post_response)
print(get_response.status_code)
print(get_response.json())
