import * as highlight_directive from "./highlight.directive"
// @ponicode
describe("onMouseEnter", () => {
    let inst: any

    beforeEach(() => {
        inst = new highlight_directive.HighlightDirective()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.onMouseEnter()
        }
    
        expect(callFunction).toThrow("Cannot read property 'nativeElement' of undefined")
    })
})

// @ponicode
describe("onMouseLeave", () => {
    let inst: any

    beforeEach(() => {
        inst = new highlight_directive.HighlightDirective()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.onMouseLeave()
        }
    
        expect(callFunction).toThrow("Cannot read property 'nativeElement' of undefined")
    })
})

// @ponicode
describe("highlight", () => {
    let inst: any

    beforeEach(() => {
        inst = new highlight_directive.HighlightDirective()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.highlight("rgb(0,100,200)")
        }
    
        expect(callFunction).toThrow("Cannot read property 'nativeElement' of undefined")
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.highlight("yellow")
        }
    
        expect(callFunction).toThrow("Cannot read property 'nativeElement' of undefined")
    })
})
