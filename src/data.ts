export const vacantSlots = new Map<string, number>()
export const freeSlots: number[] = []

const getNearestVacantSlot = () => {
    return freeSlots[0]
}

export const calculateParkingCharges = (vehicleNumber: string, hoursParked: number) => {
    if (hoursParked < 1) {
        return 10
    }
    if (hoursParked <= 2) {
        return 10
    } else {
        return (hoursParked * 10) - 10
    }

}

export const createParkingLot = (size: number) => {
    console.log(`Created parking lot with ${size} slots`)
    for (let i = 1; i < size + 1; i++) {
        freeSlots.push(i)
    }
    return freeSlots
}

export const addVehicle = (vehicleNumber: string) => {
    if (freeSlots.length === 0) {
        console.log(`Sorry, parking lot is full`)
        return
    }
    vacantSlots.set(vehicleNumber, getNearestVacantSlot())
    freeSlots.shift()
    console.log(`Allocated slot number: ${vacantSlots.get(vehicleNumber)}`)
    return vacantSlots.get(vehicleNumber)
}

export const removeVehicle = (vehicleNumber: string, hours: number) => {
    if (!vacantSlots.get(vehicleNumber)) {
        console.log(`Registration number ${vehicleNumber} not found`)
        return
    }
    const parkingSpot = vacantSlots.get(vehicleNumber)
    const charges = calculateParkingCharges(vehicleNumber, hours)
    freeSlots.push(Number(parkingSpot))
    vacantSlots.delete(vehicleNumber)
    console.log(`Registration number ${vehicleNumber} with Slot Number ${parkingSpot} is free with Charge ${charges}`)
    return freeSlots
}

export const printParkingLot = () => {
    const sortedMap = new Map([...vacantSlots.entries()].sort((a, b) => a[1] - b[1]));
    console.log(`Slot No.    Registration No.`)
    sortedMap.forEach((key, value) => {
        console.log(`${key}           ${value}`)
    })
}
