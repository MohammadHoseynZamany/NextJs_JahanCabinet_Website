import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    home: "nav-link",
    aboutUs: "nav-link",
    contactUs: "nav-link",
    samples: "nav-link"
}

const active = "nav-link active rounded-top-2"

const moduleSlice = createSlice({
    name: 'headerNavigation',
    initialState,
    reducers: {
        changeActivePage(state, activePage){
            const page = activePage.payload
            if (page == '/'){
                state.home = active
            } else if (page == '/aboutus'){
                state.aboutUs = active
            } else if (page == '/contactus'){
                state.contactUs = active
            } else if (page == '/samples'){
                state.samples = active
            }
        },
        removeActivePage(state){
            for (let item in state){
                if (state[item] !== "nav-link") {
                    state[item] = "nav-link"
                }
            }
        }
    }
})

export const {changeActivePage, removeActivePage} = moduleSlice.actions

export default moduleSlice.reducer