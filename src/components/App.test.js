import React from "react"
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import App from "./App"

Enzyme.configure({adapter: new Adapter()})

describe("App", () => {
    const app = shallow(<App />)

    it("renders correctly", () => {
        expect(app).toMatchSnapshot()
    })

    it("initializes the `state` with an empty list of gifts", () => {
        expect(app.state().gifts).toEqual([])
    })

    describe("when `Add Gift` button clicked", () => {
        const id = 1

        beforeEach(() => {
            app.find(".btn-add").simulate("click")
        })

        afterEach(() => {
            app.setState({gifts: []})
        })

        it("adding new gift to the state when add gift button is clicked", () => {
            expect(app.state().gifts).toEqual([{id}])
        })
    
        it("renders a new gift item when the add gift button is clicked", () => {
            expect(app.find(".gift-list").children().length).toEqual(id)
        })

        it("creates a Gift component", () => {
            expect(app.find("Gift").exists()).toBe(true)
        })

        describe("and the user wants to remove the gift", () => {
            beforeEach(() => {
                app.instance().removeGift(id)
            })
    
            it("removes the gift from state", () => {
                expect(app.state().gifts).toEqual([])
            })
        })
    })
})