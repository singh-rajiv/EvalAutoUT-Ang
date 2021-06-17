import * as dashboard_component from "./dashboard.component"
// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new dashboard_component.DashboardComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.ngOnInit()
        }
    
        expect(callFunction).toThrow("Cannot read property 'getHeroes' of undefined")
    })
})

// @ponicode
describe("getHeroes", () => {
    let inst: any

    beforeEach(() => {
        inst = new dashboard_component.DashboardComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getHeroes()
        }
    
        expect(callFunction).toThrow("Cannot read property 'getHeroes' of undefined")
    })
})
