from flask import Flask, render_template
from . import helper
from json import json
app = Flask(__name__)

@app.route('/')
def hello_world():
    carlist = []
    rawdata = helper.getdata()
    data = json.loads(rawdata)
    for car in data:
        carlist.append(data)
    return render_template("index.html", len = len(carlist), carlist = carlist)

        


