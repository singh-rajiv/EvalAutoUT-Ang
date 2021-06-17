import * as messages_component from "./messages.component"
// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new messages_component.MessagesComponent()
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toBe(undefined)
    })
})
