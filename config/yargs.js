const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Flag que indica si se completo la tarea'
}

const argv = require('yargs')
    .command('crear', 'Genera una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar un tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}