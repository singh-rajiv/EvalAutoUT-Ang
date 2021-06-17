import * as hero_detail_component from "./hero-detail.component"
// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new hero_detail_component.HeroDetailComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.ngOnInit()
        }
    
        expect(callFunction).toThrow("Cannot read property 'snapshot' of undefined")
    })
})

// @ponicode
describe("getHero", () => {
    let inst: any

    beforeEach(() => {
        inst = new hero_detail_component.HeroDetailComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getHero()
        }
    
        expect(callFunction).toThrow("Cannot read property 'snapshot' of undefined")
    })
})

// @ponicode
describe("goBack", () => {
    let inst: any

    beforeEach(() => {
        inst = new hero_detail_component.HeroDetailComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.goBack()
        }
    
        expect(callFunction).toThrow("Cannot read property 'back' of undefined")
    })
})

// @ponicode
describe("save", () => {
    let inst: any

    beforeEach(() => {
        inst = new hero_detail_component.HeroDetailComponent()
    })

    test("0", () => {
        inst.save()
        expect(inst).toMatchObject({ route: undefined, heroService: undefined, location: undefined })
    })
})
