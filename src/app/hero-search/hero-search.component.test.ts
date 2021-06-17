import * as hero_search_component from "./hero-search.component"
// @ponicode
describe("search", () => {
    let inst: any

    beforeEach(() => {
        inst = new hero_search_component.HeroSearchComponent()
    })

    test("0", () => {
        inst.search("123")
        expect(inst).toMatchObject({ heroService: undefined, searchTerms: { _isScalar: false, observers: [], closed: false, isStopped: false, hasError: false, thrownError: null } })
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new hero_search_component.HeroSearchComponent()
    })

    test("0", () => {
        inst.ngOnInit()
    })
})
