from flask import Flask
from flask_cors import CORS
from flask import jsonify


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
# print(myBooks)

@app.route("/")
def home():
    return "Welcome home"

@app.route("/books")
def books():
    response = jsonify(myBooks)

    return response


if __name__ == "__main__":
    app.run(port=8080,debug= True)
