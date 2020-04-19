import {
    calculateParkingCharges, createParkingLot
} from './data'


describe('Create parking lot.', () => {
    test('Should return an empty array representing queue in parking lot', () => {
        expect(createParkingLot(4)).toEqual(expect.arrayContaining([1, 2, 3, 4]))
    })
})

describe('Calculate parking charges.', () => {
    test('Should return charges $30 for 4 hours', () => {
        expect(calculateParkingCharges('KA-01-HH-7777', 4)).toBe(30)
    })
    test('Should return charges $10 for 2 hours', () => {
        expect(calculateParkingCharges('KA-01-HH-7777', 2)).toBe(10)
    })
    test('Should return charges $10 for 0.5 hours', () => {
        expect(calculateParkingCharges('KA-01-HH-7777', 0.5)).toBe(10)
    })
    test('Should return charges $3990 for 400 hours', () => {
        expect(calculateParkingCharges('KA-01-HH-7777', 400)).toBe(3990)
    })
})


