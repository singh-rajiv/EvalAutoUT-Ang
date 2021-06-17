import * as heroes_component from "./heroes.component"
// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new heroes_component.HeroesComponent()
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
        inst = new heroes_component.HeroesComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getHeroes()
        }
    
        expect(callFunction).toThrow("Cannot read property 'getHeroes' of undefined")
    })
})

// @ponicode
describe("add", () => {
    let inst: any

    beforeEach(() => {
        inst = new heroes_component.HeroesComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.add("number    ")
        }
    
        expect(callFunction).toThrow("Cannot read property 'addHero' of undefined")
    })
})
