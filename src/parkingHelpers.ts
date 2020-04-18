
export const populateData = (size: number) => {

}

export const parkVehicle = () => {

}

export const leaveVehicle = () => {

}

export const printParkingLot = () => {

}

export const parkingCommandsMapping = {
    park: {action: parkVehicle, attribute: 1},
    leave: {action: leaveVehicle, attribute: 1},
    status: {action: printParkingLot, attribute: 1},
} as any
