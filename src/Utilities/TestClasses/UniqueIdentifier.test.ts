import UniqueIdentifier from '../UniqueIdentifier'

describe('Unique Identifier', () => {
  it('Should throw an error if constructed with invalid id', () => {
    expect(() => new UniqueIdentifier('I am not a valid UUID')).toThrow(
      'Id: "I am not a valid UUID" is not a valid UniqueIdentifier'
    )
  })
})
