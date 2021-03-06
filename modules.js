

const fs = require('fs');

function createFile() {

    fs.readFile('./test.txt', 'utf8', (error, data) => {

        fs.mkdirSync('./files', () => {
        })
        fs.writeFileSync('./files/test2.txt', `${data} new file`, (error) => {
            error ? console.log(error) : null;
        })
    })

    setTimeout(() => {

        if (fs.existsSync('./files/test2.txt')) {
            fs.unlink('./files/test2.txt', () => {
                console.log('file delete')
            })
        }

    }, 4000)

    setTimeout(() => {
        if (fs.existsSync('./files')) {
            fs.rmdir('./files', () => {
                console.log('mkdir delete')
            })
        }

    }, 6000)

}

module.exports = createFile;