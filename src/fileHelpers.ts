import * as path from 'path';
import * as fs from 'fs';
import readline from 'readline'
import * as parkingHelpers from './parkingHelpers'

const generateCommandsFromInputLines = (line: string) => {
    const command = line.split(' ')
    switch (command[0]) {
        case 'create_parking_lot':
            parkingHelpers.populateData(Number(command[1]))
            break
        case 'park':
            parkingHelpers.parkVehicle(command[1])
            break
        case 'leave':
            parkingHelpers.leaveVehicle(command[1], Number(command[2]))
            break
        case 'status':
            parkingHelpers.status()
            break
        default :
            console.log(`command not found: ${command[0]}`)

    }
}


export async function processLineByLine(filePath: string) {
    try {
        const fileStream = fs.createReadStream(path.join(__dirname, filePath));
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        for await (const line of rl) {
            // Each line in input.txt will be successively available here as `line`.
            generateCommandsFromInputLines(line)
        }
    } catch (e) {
        throw new Error(e)
    }
}


