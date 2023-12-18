 import './homepage.css'

const homepage = () => {
  return (
    <div>
   <div className='heading'>Hello! Welcome to my Web page</div>
   <div className='nav'>
    <h1 style={{textAlign:'center',}}>Please choose your Form</h1>
    <a href ='./form_login'><button type='button'>Create Form</button></a>
    <a href='./login_update'><button type='button'>Update Form</button></a>
   </div>
   </div>
  )
}

export default homepage;