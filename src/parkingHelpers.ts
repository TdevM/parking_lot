import * as data from "./data";

export const populateData = (size: number) => {
    for (let i = 1; i < size + 1; i++) {
        data.freeSlots.push(i)
    }
}

export const parkVehicle = (vehicleNumber: string, parkingSpot: number) => {
    if (data.freeSlots.length === 0) {
        `Sorry, parking lot is full`
    }
    data.vacantSlots.set(vehicleNumber, parkingSpot)
    data.freeSlots.shift()
    console.log(`Vehicle ${vehicleNumber} is parked at ${data.vacantSlots.get(vehicleNumber)}`)
}

export const leaveVehicle = (vehicleNumber: string, hours: number) => {
    if (!data.vacantSlots.has(vehicleNumber)) {
        console.log(`Vehicle with registration number ${vehicleNumber} not found`)
    }
    const parkingSpot = data.vacantSlots.get(vehicleNumber)
    data.freeSlots.push(Number(parkingSpot))
    data.vacantSlots.delete(vehicleNumber)
    console.log(`Vehicle ${vehicleNumber} is now free`)
}

export const printParkingLot = () => {
    data.vacantSlots.forEach((value, key) => {
        console.log(`Vehicle ${key} is at ${value}`)
    })
    data.freeSlots.forEach((value, index, array) => {
        console.log(`Slot ${value} is free`)
    })
}

const parkingCommandsMapping = {
    park: parkVehicle,
    leave: leaveVehicle,
    status: printParkingLot,
}
