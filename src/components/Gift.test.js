import React from "react"
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Gift from "./Gift"

Enzyme.configure({adapter: new Adapter()})

describe("Gift", () => {
    const mockRemove = jest.fn()
    const id = 1
    const props = {gift: {id}, removeGift: mockRemove}
    const gift = shallow(<Gift {...props} />)

    it("renders correctly", () => {
        expect(gift).toMatchSnapshot()
    })

    it("initializes the state with person and present fields", () => {
        expect(gift.state()).toEqual({person: "", present: ""})
    })

    describe("when typing into the person input", () => {
        const person = "Zaven"
        beforeEach(() => {
            gift.find(".input-person").simulate("change", {target: {value: person}})
        })

        it("updates the person in state", () => {
            expect(gift.state().person).toEqual(person)
        })
    })

    describe("When typing into the present input", () => {
        const present = "Present"

        beforeEach(() => {
            gift.find(".input-present").simulate("change", {target: {value: present}})
        })

        it("updates the present in state", () => {
            expect(gift.state().present).toEqual(present)
        })
    })

    describe("when clicking the remove gift button", () => {
        beforeEach(() => {
            gift.find(".btn-remove").simulate("click")
        })

        it("calls the removeGift callback", () => {
            expect(mockRemove).toHaveBeenCalledWith(id)
        })
    })
})