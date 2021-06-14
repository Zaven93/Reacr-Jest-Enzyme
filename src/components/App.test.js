import React from "react"
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import App from "./App"

Enzyme.configure({adapter: new Adapter()})

const app = shallow(<App />)

it("renders correctly", () => {
    expect(app).toMatchSnapshot()
})

it("initializes the `state` with an empty list of gifts", () => {
    expect(app.state().gifts).toEqual([])
})

it("adding new gift to the state when add gift button is clicked", () => {
    app.find(".btn-add").simulate("click")

    expect(app.state().gifts).toEqual([{id: 1}])
})