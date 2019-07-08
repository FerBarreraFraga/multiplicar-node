const {argv} = require("./config/yargs");

const colors = require("colors/safe");

const {crearArchivo, listarTabla} = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch(comando){
    case 'listar' : 
            listarTabla(argv.base, argv.limite)
                .then(archivo => console.log(`Archivo ${archivo} ha sido creado`))
                .catch(e => console.log(e));
        break;
    case 'crear':
            crearArchivo(argv.base)
                .then(archivo => console.log(`Archivo `,colors.green(archivo), ` ha sido creado`))
                .catch(e => console.log(e));
        break;
    default:    
        console.log('Comando no reconocido')
}
//let parametro = argv[2];
//let base = parametro.split('=')[1]


