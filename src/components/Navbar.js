import React,{useState}from 'react'
const Navbar = ({setSearch}) => { 
  const [checked, setChecked] = useState([]);
  

 //HANDLE CHECKED AND FILTER
 const handleFilter=(value,id)=>{
  let all=[...checked]
  if(value){
    all.push(id);
  }else{
    all=all.filter((c)=>c!==id);
  }
  setChecked(all);
}
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
  <div className="container-fluid ">
    <a className="navbar-brand text-white" href="/">TECHLEGENDARY</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-4 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">Link</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search By Name" aria-label="Search" onChange={(e)=>setSearch(e.target.value) }/>
    
      </form>

      <div className="dropdown mx-3">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
        Select Filter
      </button>
      <ul className="dropdown-menu  " aria-labelledby="dropdownMenuButton2">
        <li><input className='mx-3' type="checkbox"  onChange={(e)=>handleFilter(e.target.checked,"domain")}/>Domain</li>
        <li><input className='mx-3' type="checkbox"  onChange={(e)=>handleFilter(e.target.checked,"gender")}/>Gender</li>
        <li><input className='mx-3' type="checkbox"  onChange={(e)=>handleFilter(e.target.checked,"available")}/>Available</li>
       
      </ul>
</div>

    </div>
  </div>
</nav>

  )
}

export default Navbar