import * as path from 'path';
import * as fs from 'fs';

const lookInputFile = (callback: any) => {
    fs.readFile(path.join(__dirname, `../${process.argv.slice(2)}`), (err, data) => {
        if (err) callback(err, null);
        callback(null, data)
    })
}

export const generateDataSetFromFileData = () => {
    lookInputFile((err: any, data: any) => {
        if (err) {
            console.log(err)
        }
        console.log(data.toString())
    })
}

