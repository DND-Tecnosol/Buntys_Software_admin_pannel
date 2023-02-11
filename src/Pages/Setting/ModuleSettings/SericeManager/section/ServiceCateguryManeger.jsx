import React,{useState} from 'react'
import { IconButton,Button } from '@mui/material';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
// 
import apiRoutes,{appAxios as axios} from '../../../../../Constants/apiRoutes';
import { fetchserviceCetegury } from '../../../../../Store/Slice/types/allCetegurytypesSlice';

export default function ServiceCateguryManeger() {
  const categury = useSelector(state => state.categury.serviceCetegury)
  console.log(categury);
  return (
    <>
    <div className="container d-flex justify-content-between">
      <div className="">
      </div>
      <Button variant='contained' data-toggle="modal"
            data-target="#addCateservices" className='my-3' color='warning'>
        Add Service
      </Button>
    </div>
      <div className="table-card bg-white rounded-lg m-3">
        <table class="table border-0">
          <thead className='border-0'>
            <tr className='border-0'>
              <th scope="col">Categury Name</th>
              <th scope="col">Satus</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              categury.map((categury, index) => {
                const { name, status } = categury
                return (<>
                  <tr>
                    {/* <th scope="row">{++index}</th> */}
                    <td>{name}</td>
                    <td>{status ? <span className='text-success'>Active</span> : <span className='text-danger'>DeActive</span>}</td>
                    <td>
                      <IconButton>
                        <MdEdit color='orange' size={20} />
                      </IconButton>
                      <IconButton>
                        <MdDelete color='red' size={20} />
                      </IconButton>
                    </td>
                  </tr>
                </>)
              })
            }
          </tbody>
        </table>
      </div>
      <AddCategury id={'addCateservices'} />
    </>
  )
}

const AddCategury=({id})=>{
   const [name, setName] = useState("")
   const [msg, setMsg] = useState("")
   const dispatch= useDispatch()
   const submit=()=>{
    const data={
      name:name
    }
    axios.post(apiRoutes.Servicetype,data).then(e=>{
      setMsg(e.data.msg)
      dispatch(fetchserviceCetegury())
    })
  }
  return(
  <>
  <div>
      <div
        class="modal fade"
        id={id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content border-0">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="exampleModalLabel">
                New Sevice
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form class="needs-validation" novalidate>
              <div class="modal-body">
                {msg ? <Alertmsg msg={msg} /> : null}

                <div className="container">
                  <div class="form-row">
                    <Input
                      onchange={(e) => setName(e.target.value)}
                      plase={'Service Name'}
                      value={name}
                      title={"Service Name"}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer border-0">
                <input type="reset" class="btn btn-danger" />

                <button type="button" onClick={submit} class="btn btn-primary">
                  Create New Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}


const Input = ({ title, plase, onchange, ...props }) => {
  return (
    <>
      <div class="col-md-12 mb-3">
        <label for="validationCustomUsername">{title}</label>
        <input
          class="form-control"
          id="validationCustomUsername"
          onChange={onchange}
          placeholder={plase}
          aria-describedby="inputGroupPrepend"
          {...props}
        />
      </div>
    </>
  );
}

const Alertmsg = ({ msg }) => {
  return (<>
    <div class="alert alert-success" role="alert">
      {msg}
    </div>
  </>)
}