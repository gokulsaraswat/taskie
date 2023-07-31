import "./listjob.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableJob from "../../components/datatableJob/DatatableJob"

const ListJob = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableJob/>
      </div>
    </div>
  )
}

export default ListJob