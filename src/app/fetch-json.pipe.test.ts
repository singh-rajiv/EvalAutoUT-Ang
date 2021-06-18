import * as fetch_json_pipe from "./fetch-json.pipe"
// @ponicode
describe("transform", () => {
    let inst: any

    beforeEach(() => {
        inst = new fetch_json_pipe.FetchJsonPipe()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.transform("ponicode.com")
        }
    
        expect(callFunction).toThrow("Cannot read property 'get' of undefined")
    })
})
