from types import MethodType
from flask import Flask,request
from flask_cors import CORS
from flask import jsonify
from datetime import datetime


app = Flask(__name__)
CORS(app)


myBooks = [
    {'id': 0,
     'title': 'A Fire Upon the Deep',
     'author': 'Vernor Vinge',
     'first_sentence': 'The coldsleep itself was dreamless.',
     'year_published': '1992'},
    {'id': 1,
     'title': 'The Ones Who Walk Away From Omelas',
     'author': 'Ursula K. Le Guin',
     'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
     'published': '1973'},
    {'id': 2,
     'title': 'Dhalgren',
     'author': 'Samuel R. Delany',
     'first_sentence': 'to wound the autumnal city.',
     'published': '1975'}
]
myUsers = [
    {
        "id": 1,
        "username": "Randomhunter47",
        "fullname": "Eugene Korir"
    }
]
# print(myBooks)
@app.route("/users")
def users():
    response = jsonify(myUsers)

    return response

@app.route("/time")
def time():
    return datetime.now()


@app.route("/")
def home():
    response = jsonify({"message": "Welcome home"})
    return response

@app.route("/books")
def books():
    response = jsonify(myBooks)

    return response

@app.route("/user",methods=['POST'])
def book():
    id = request.form.get("id", "")
    title = request.form.get("title","")
    # request.headers

    # response = ({
    #     "id" : id,
    #     "title" : title
    #     })
    return request.headers

@app.route("/login", methods=['POST'])
def login():
    username = request.form.get("username","")
    password = request.form.get("password","")

    if username  == myUsers.__contains__(username):
        return "Successful login"
    else:
        return "An error occcured!"



if __name__ == "__main__":
    app.run(port=8080,debug= True)
