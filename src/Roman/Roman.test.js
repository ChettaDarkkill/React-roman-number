import { Roman } from './Roman'

it('Should return "I" when input 1', () => {
  const actual = Roman(1)
  expect(actual).toEqual("I")
})

it('Should return "II" when input 2', () => {
    const actual = Roman(2)
    expect(actual).toEqual("II")
})

it('Should return "III" when input 3', () => {
    const actual = Roman(3)
    expect(actual).toEqual("III")
})

it('Should return "IV" when input 4', () => {
    const actual = Roman(4)
    expect(actual).toEqual("IV")
})

it('Should return "V" when input 5', () => {
    const actual = Roman(5)
    expect(actual).toEqual("V")
})