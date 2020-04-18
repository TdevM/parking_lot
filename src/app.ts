import * as fileHelper from './fileHelpers'
import * as parkingHelper from "./parkingHelpers";


parkingHelper.populateData(6)
parkingHelper.printParkingLot()
parkingHelper.parkVehicle('KA-01-HH-1234', 1)
parkingHelper.parkVehicle('KA-01-HH-9999', 2)
parkingHelper.parkVehicle('KA-01-BB-0001', 3)
parkingHelper.parkVehicle('KA-01-HH-7777', 4)
parkingHelper.parkVehicle('KA-01-HH-2701', 5)
parkingHelper.parkVehicle('KA-01-HH-3141', 6)
parkingHelper.leaveVehicle('KA-01-HH-3141', 8)
parkingHelper.printParkingLot()



parkingHelper.printParkingLot()
