import * as path from 'path';
import * as fs from 'fs';
import * as data from "./data";
import {freeSlots} from "./data";

export const populateData = (size: number) => {
    for (let i = 1; i < size + 1; i++) {
        data.freeSlots.push(i)
    }
}

export const parkVehicle = (vehicleNumber: string, parkingSpot: number) => {
    data.vacantSlots.set(vehicleNumber, parkingSpot)
    data.freeSlots.shift()
}

export const leaveVehicle = (vehicleNumber: string, hours: number) => {

}

export const printParkingLot = () => {
    data.vacantSlots.forEach((value, key) => {
        console.log(`Vehicle ${key} is at ${value}`)
    })
    data.freeSlots.forEach((value, index, array) => {
        console.log(`Slot ${value} is free`)
    })
}

const commandsMapping = {
    park: parkVehicle,
    leave: leaveVehicle,
    status: printParkingLot,
}


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

