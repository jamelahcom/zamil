from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__)

@app.route("/get-user/<user_id>")
def get_user(user_id):
    user_data = {
        'user_id': user_id,
        'name': 'John Doe',
        'email': 'john.doe@example.com'
    }
    
    extra = request.args.get('extra')
    if extra:
        user_data['extra'] = extra
    
    return jsonify(user_data), 200

@app.route('/test')
def test():
    # jsonify(data=generated_data)
    return send_from_directory('.', path='MyInteractivePDF.json')


if __name__ == '__main__':
    app.run(debug=True)