import * as hero_service from "./hero.service"
// @ponicode
describe("log", () => {
    let inst: any

    beforeEach(() => {
        inst = new hero_service.HeroService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.log("")
        }
    
        expect(callFunction).toThrow("Cannot read property 'add' of undefined")
    })
})

// @ponicode
describe("getHeroes", () => {
    let inst: any

    beforeEach(() => {
        inst = new hero_service.HeroService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getHeroes()
        }
    
        expect(callFunction).toThrow("Cannot read property 'get' of undefined")
    })
})

// @ponicode
describe("getHeroNo404", () => {
    let inst: any

    beforeEach(() => {
        inst = new hero_service.HeroService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getHeroNo404(500)
        }
    
        expect(callFunction).toThrow("Cannot read property 'get' of undefined")
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.getHeroNo404(400)
        }
    
        expect(callFunction).toThrow("Cannot read property 'get' of undefined")
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.getHeroNo404(550)
        }
    
        expect(callFunction).toThrow("Cannot read property 'get' of undefined")
    })
})

// @ponicode
describe("searchHeroes", () => {
    let inst: any

    beforeEach(() => {
        inst = new hero_service.HeroService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.searchHeroes("username")
        }
    
        expect(callFunction).toThrow("Cannot read property 'get' of undefined")
    })
})

// @ponicode
describe("addHero", () => {
    let inst: any

    beforeEach(() => {
        inst = new hero_service.HeroService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.addHero({ id: 200, name: "array" })
        }
    
        expect(callFunction).toThrow("Cannot read property 'post' of undefined")
    })
})
