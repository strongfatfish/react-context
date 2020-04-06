import React,{ createContext,useState } from "react";
const store = createContext();
const { Provider } =store;
export default store;
export function AppProvider(props) {
    const [list,setList] = useState([
        {
            id:1,
            text:"从你的全世界路过"
        },
        {
            id: 2,
            text: "此去别离"
        }
    ]);
    return (
        <Provider value={{list,setList}}>
            {props.children}
        </Provider>
    )
}