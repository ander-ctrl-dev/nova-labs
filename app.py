from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")
@app.route("/networking")
def networking():
    return render_template("networking.html")


@app.route("/start-learning")
def start_learning():
    return render_template("start_learning.html")


@app.route("/computer-basics")
def homepage():
    return render_template("computer_home/computer-basics.html")





@app.route("/physics")
def physics():
    return render_template("physics/physics_home.html")
@app.route("/electricity")
def electricity():
    return render_template("physics/electricity.html")
@app.route("/atoms")
def atoms():
    return render_template("physics/atoms.html")
@app.route("/electromagnetism")
def electromagnetism():
    return render_template("physics/electromagnetism.html")
@app.route("/quantum")
def quantum():
    return render_template("physics/quantum.html")
@app.route("/energy")
def energy():
    return render_template("physics/energy.html")

if __name__ == "__main__":
    app.run(debug=True)
