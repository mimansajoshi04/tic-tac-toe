# importing important libraries

from flask import Flask,request,redirect,url_for,render_template,session


TicTacToe = Flask(__name__, static_folder="static", static_url_path="/static")
TicTacToe.secret_key = 'sessionKey'



@TicTacToe.route('/',methods=['POST','GET'])
def index():
    if request.method=='POST':
        session['n'] = request.form.get('size')
        session['p1n'] = request.form.get('player1name')
        session['p2n'] = request.form.get('player2name')
        session['p1c'] = request.form.get('player1color')
        session['p2c'] = request.form.get('player2color')
        session['type'] = request.form.get('attribute')
        print(session['type'])
        if session['type'] == 'simpleGame':
            return redirect(url_for('game'))
        elif session['type'] == 'specialGame':
            return redirect(url_for('specialGame'))
        else:
            return render_template('index.html')
        
    return render_template('index.html')


@TicTacToe.route('/game', methods=["GET","POST"]) 
def game():

    n= session['n']
    p1n = session['p1n']
    p2n = session['p2n']
    p1c = session['p1c']
    p2c = session['p2c']

    print(n)
    print(p1n)
    print(p2n)
    print(p1c)
    print(p2c)

    return render_template('game.html',n=int(n),p1n=p1n,p2n=p2n,p1c=p1c,p2c=p2c)
    


@TicTacToe.route('/specialGame', methods=["GET","POST"]) 
def specialGame():

    n= session['n']
    p1n = session['p1n']
    p2n = session['p2n']
    p1c = session['p1c']
    p2c = session['p2c']


    return render_template('specialGame.html',n=n,p1n=p1n,p2n=p2n,p1c=p1c,p2c=p2c)


@TicTacToe.route('/results')
def results():
    winner = request.args.get('winner')
    if winner=='1':
        return render_template('results.html', winner=session['p1n'])
    elif(winner=='2'):
        return render_template('results.html', winner=session['p2n'])
    else:
        return render_template('results.html', winner=0)





if __name__ == '__main__':
    TicTacToe.run(host="127.0.0.1", port = 8001, debug=True)