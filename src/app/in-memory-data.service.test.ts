import * as in_memory_data_service from "./in-memory-data.service"
// @ponicode
describe("createDb", () => {
    let inst: any

    beforeEach(() => {
        inst = new in_memory_data_service.InMemoryDataService()
    })

    test("0", () => {
        let result: any = inst.createDb()
        let object: any = [{ id: 11, name: "Dr Nice" }, { id: 12, name: "Narco" }, { id: 13, name: "Bombasto" }, { id: 14, name: "Celeritas" }, { id: 15, name: "Magneta" }, { id: 16, name: "RubberMan" }, { id: 17, name: "Dynama" }, { id: 18, name: "Dr IQ" }, { id: 19, name: "Magma" }, { id: 20, name: "Tornado" }]
        expect(result).toEqual({ heroes: object })
    })
})

// @ponicode
describe("genId", () => {
    let inst: any

    beforeEach(() => {
        inst = new in_memory_data_service.InMemoryDataService()
    })

    test("0", () => {
        let result: any = inst.genId([])
        expect(result).toBe(11)
    })

    test("1", () => {
        let param1: any = [{ id: 400, name: "number" }, { id: 500, name: "object" }, { id: 200, name: "string" }, { id: 200, name: "string" }, { id: 500, name: "string" }]
        let result: any = inst.genId(param1)
        expect(result).toBe(501)
    })

    test("2", () => {
        let param1: any = [{ id: 429, name: "string" }, { id: 400, name: "object" }, { id: 404, name: "number" }, { id: 404, name: "object" }]
        let result: any = inst.genId(param1)
        expect(result).toBe(430)
    })
})
