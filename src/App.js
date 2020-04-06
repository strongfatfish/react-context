import React,{ useContext } from 'react';
import store  from './store'
import Input from "./components/Input";

function App() {
    const { list,setList } = useContext(store);
    const handleDel = (id) => {
        const data=list.filter(item => {
            return item.id !== id
        });
        setList([...data])
    };
  return (
    <div className="container">
        <Input />
        <ul className="list-group shadow m-4">
            {
                list.map((item) =>{
                    return <li key={item.text}
                               className="list-group-item list-group-flush"
                               onClick={handleDel.bind(null,item.id)}
                           >
                                    <span>{item.text}</span>
                           </li>
                })
            }
        </ul>
    </div>
  );
}

export default App;
