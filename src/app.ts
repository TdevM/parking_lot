import {processLineByLine} from './fileHelpers'
import {addVehicle, createParkingLot, leaveVehicle, printParkingLot} from "./data";

createParkingLot(6)
addVehicle('KA-01-HH-1234')
addVehicle('KA-01-HH-9999')
addVehicle('KA-01-BB-0001')
addVehicle('KA-01-HH-7777')
addVehicle('KA-01-HH-2701')
addVehicle('KA-01-HH-3141')

leaveVehicle('KA-01-HH-3141', 4)

printParkingLot()
addVehicle('KA-01-P-333')
addVehicle('DL-12-AA-9999')

leaveVehicle('KA-01-HH-1234', 4)
leaveVehicle('KA-01-BB-0001', 6)
leaveVehicle('DL-12-AA-9999', 2)

addVehicle('KA-09-HH-0987')
addVehicle('CA-09-IO-1111')
addVehicle('KA-09-HH-0123')

printParkingLot()
