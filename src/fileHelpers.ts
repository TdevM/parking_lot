import * as path from 'path';
import * as fs from 'fs';
import readline from 'readline'
import {parkingCommandsMapping} from "./parkingHelpers";

const generateCommandsFromInputLines = (line: string) => {
    const command = line[0]
    parkingCommandsMapping[command].action()
}


export async function processLineByLine(filePath: string) {
    const fileStream = fs.createReadStream(path.join(__dirname, `../${process.argv.slice(2)}`));
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        console.log(`Line from file: ${line}`);
        generateCommandsFromInputLines(line)
    }
}


