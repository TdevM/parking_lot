import {generateDataSetFromFileData, leaveVehicle, parkVehicle, populateData, printParkingLot} from './helper'


populateData(6)
printParkingLot()
parkVehicle('KA-01-HH-1234', 1)
parkVehicle('KA-01-HH-9999', 2)
leaveVehicle('KA-01-HH-1234', 8)
printParkingLot()

