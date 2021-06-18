import * as message_new_service from "./message-new.service"
// @ponicode
describe("add", () => {
    let inst: any

    beforeEach(() => {
        inst = new message_new_service.MessageNewService()
    })

    test("0", () => {
        let param2: any = ["user@host:300", "something@example.com", "ponicode.com"]
        let result: any = inst.add("function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }", param2)
        expect(result).toBe(4)
        expect(param2).toEqual(["user@host:300", "something@example.com", "ponicode.com", "function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }"])
    })

    test("1", () => {
        let param2: any = []
        let result: any = inst.add("", param2)
        expect(result).toBe(1)
        expect(param2).toEqual([""])
        expect(param2).toEqual([""])
    })
})

// @ponicode
describe("get", () => {
    let inst: any

    beforeEach(() => {
        inst = new message_new_service.MessageNewService()
    })

    test("0", () => {
        let result: any = inst.get(1, ["user1+user2@mycompany.com", "email@Google.com"])
        expect(result).toBe("email@Google.com")
    })

    test("1", () => {
        let result: any = inst.get(NaN, [])
        expect(result).toBe(undefined)
    })
})

// @ponicode
describe("clear", () => {
    let inst: any

    beforeEach(() => {
        inst = new message_new_service.MessageNewService()
    })

    test("0", () => {
        let result: any = inst.clear(["user1+user2@mycompany.com", "something.example.com", "ponicode.com", "user@host:300", "email@Google.com"])
        expect(result).toBe(0)
    })
})
