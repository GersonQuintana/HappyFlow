from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

# servidor
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/ping')
def ping():
    return jsonify({'message': 'pong'})

@app.route('/ejecutar', methods=['POST'])
def ejecutar():
    print(request.json['codigo'])
    return jsonify({'message': 'Ejecutar funcionando', 'consola':'Hola mundo'})

@app.route('/tabla_errores')
def tablaErrores():
    return jsonify({'message': 'Reporte de tabla de errores funcionando'})

@app.route('/tabla_simbolos')
def tablaSimbolos():
    simbolos = [
        {'tipo':'variable'},
        {'tipo':'funcion'},
    ]
    return jsonify({'message': 'Tabla de simbolos funcionando correctamente', 'simbolos':simbolos})

@app.route('/base_datos')
def baseDatos():
    return jsonify({'message': 'Reporte de bases de datos funcionando'})

@app.route('/tablas_base_datos')
def tablasBaseDatos():
    return jsonify({'message': 'Reporte de tablas de base de datos funcionando'})

if __name__ == '__main__':
    app.run(debug=True, port=4000)
