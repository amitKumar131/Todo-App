import React ,{useState} from "react";
import './form.css'

const Form =()=>{
    const [title, setTitle] = useState('');
    const [items, setItems] = useState([]);
    // const [checkBox, setCheckBox] =useState(false);
    const [count, setCount] = useState(1);

    const addItem =(event) =>{
        event.preventDefault();
        setCount(count+1);
        setItems([...items,{
          'id': count,
          'task':title,
          'complete': false
        }]);
        setTitle('');

      }

      const taskUpdate =(id)=>{
       
        const list = items.map(item =>{
          return item.id === id ? {...item, complete: !item.complete} : {...item};
        });
        setItems(list);
      }
      
      const remove =(id)=>{
        const newItems = items.filter((item) =>{
          return item.id !== id
        })
        setItems(newItems);
    
      }

return(
    <>
    <form  onSubmit={addItem}>
        <div className='flex-row justify-content-center input-group mb-3 '>
      <input tpye="text" value={title} onChange={event => setTitle(event.target.value)}/>
      <button className='btn btn-success' tpye="submit"  >Add</button>
      </div>
      </form>
      <div className='flex-row justify-content-center input-group mb-3 '>
      <ul className='container'>
      {
        items.map((item) =>{
          return(
            <div className='d-flex justify-content-center m-3'>
            <li className={item.complete ? 'text-decoration-line-through':''} key={item.id}>
              {item.task}
            </li>
            <div>
            <input className="form-check-input ms-5 me-2" type="checkbox" id="flexCheckDefault" onClick={()=>{taskUpdate(item.id)}}></input>
            <button className=" align-end btn btn-danger " onClick={() => {remove(item.id)}}>
              Remove
              </button>
              </div>
            
            </div>
          )
        })
      }
      </ul>
    </div>
    </>
    );
  }


export default Form;

