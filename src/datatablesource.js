export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];


export const jobsColumns = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "clientname",
    headerName: "Client",
    width: 100,
  },
  {
    field: "assignedto",
    headerName: "Assignee",
    width: 100,
  },
  {
    field: "job",
    headerName: "Job",
    width: 170,
  },
  {
    field: "jobdate",
    headerName: "Date",
    width: 115,
    renderCell: (params) => {
      return (
        <div >
          {Date(params.row.jobdate.seconds)}
        </div>
      );
    },
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 100,
  },
  {
    field: "jobstatus",
    headerName: "Job Status",
    width: 130,
  },
  {
    field: "information",
    headerName: "Information",
    width: 300,
  },
];
