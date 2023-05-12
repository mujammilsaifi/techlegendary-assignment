import Navbar from "./components/Navbar";
import Data from "./heliverse_mock_data.json"
import React,{useState} from "react";
function App() {
  const [search, setSearch] = useState("");

  //--------------SET INITIAL STATE OF DATA TO BE RENDER------------
  const [currentPage, setCurrentPage] = useState(1)
  const recodsPerPage=20;
  const lastIndex=currentPage*recodsPerPage;
  const firstIndex=lastIndex-recodsPerPage;
  const recods=Data.slice(firstIndex,lastIndex);
  const npage=Math.ceil(Data.length/(recodsPerPage));
  const numbers=[...Array(npage+1).keys()].slice(currentPage,currentPage+6);

//---------------------HANDLE PAGINATION--------------------------
  function prevPage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage-1);
    }
  }
  function nextPage(){
    if(currentPage !== npage){
      setCurrentPage(currentPage+1);
    }
  }
  function changeCPage(id){
    setCurrentPage(id);
  }
  return (
    <>
      <Navbar setSearch={setSearch}/>
      <div className="conatiner row d-flex justify-content-center m-3">
        {recods?.filter((item) => {
                return search.toLowerCase() === '' ? item: item.first_name.toLowerCase().includes(search);
              }).map((d,i)=>(
        <div className="card m-2 shadow-lg p-1 mb-5 bg-body rounded" style={{width: '20rem'}}>
          <span className={`position-absolute top-0 translate-middle badge rounded-pill ${d.available?'bg-success':'bg-danger'}`} style={{left: '85%', zIndex: '1'}}> {d.available?'Active':"Not Active"} </span>
          <img src={d.avatar} className="card-img-top" alt={d.first_name} />
          <div className="card-body">
            <h5 className="card-title">Name: {d.first_name}&nbsp;{d.last_name}</h5>
            <p className="text">Domain: {d.domain}</p>
            <p className="text">Gender: {d.gender}</p>       
          </div>
        </div>
        ))}
      </div>
      {recods?.filter((item) => {
                return search.toLowerCase() === '' ? item: item.first_name.toLowerCase().includes(search);
              }).length >=20 ? (
                <nav aria-label="Page navigation ">
                <ul className="pagination d-flex justify-content-center">
                <li className="page-item mx-2"><a className="page-link" href="#" onClick={prevPage}>Previous</a></li>
                {numbers?.map((n,i)=>(
                  <li className={`page-item ${currentPage===n?'active':""}`} key={i}>
                    <a className="page-link" href="#" onClick={()=>changeCPage(n)}>{n}</a>
                  </li>
                  ))}
                <li className="page-item mx-2"><a className="page-link" href="#" onClick={nextPage}>Next</a></li>
                </ul>
                </nav>
              ):" "}
      

    </>
  );
}

export default App;
