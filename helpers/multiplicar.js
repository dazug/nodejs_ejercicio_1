const fs = require('fs');
const colors = require('colors');
const tablamult = async(desde = 1,hasta = 1,tabla, list = false) => {

    try {
        let salida, consola = '';
        for( desde;desde <= hasta; desde++){
            consola += `${tabla} ${colors.blue('x')} ${desde} = ${tabla*desde}\n`;
            salida += `${tabla} x ${desde} = ${tabla*desde}\n`;
        }
        // fs.writeFile(`tabla-${tabla}.txt`,salida,(err) => {
        //     if(err) throw err;
        //     console.log('Tabla creada');
        // })
        fs.writeFileSync(`./salida/tabla-${tabla}.txt`,salida)

        if(list){
            console.log(consola);
        }

        return `tabla del ${tabla} Creada !!!`;
        
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    creararchivo: tablamult
}

