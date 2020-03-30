const GenerateUniqueID = require('../../src/utils/GenerateUniqueID')

describe('Generate Unique ID', () => {
    it('Should generate an unique id for an ONG', () => {
        const id = GenerateUniqueID()

        expect(id).toHaveLength(8)
    })
})