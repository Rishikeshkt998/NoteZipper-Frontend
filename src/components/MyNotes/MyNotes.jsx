import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainScreen from "../MainScreen/MainScreen";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useState,useEffect } from "react";
import { deleteNotesByid, getnotes } from "../../../api/notes";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Loading from './../Loading/Loading';

const MyNotes = () => {
  // eslint-disable-next-line no-unused-vars
  const [notes,setNotes]=useState([])
  const [openNoteId,setOpenNoteId]=useState("")
  const [loading,setloading]=useState(false)

  const navigate=useNavigate
  const userInfo = localStorage.getItem('userId');
const id= localStorage.getItem('userValue');



  useEffect(() => {
    async function findnotes(){
        
        try {
          setloading(true)
      const res = await getnotes(id);
      console.log("userdata", res);
      setNotes(res?.data)
      if (res?.data.success) {
        setloading(false)
        
        console.log("userdata",res.data)
        navigate(`/createnote`);
      } else {
        setloading(false )
        toast.error(res?.data.message || 'login failed');
      }
    } catch (error) {
        setloading(false )
      console.error('Error submitting form:', error);
      toast.error('An error occurred during signup. Please try again later.');
    }

    }
    findnotes()
        

  }, [id]);

  const deleteHandler = async(noteid,event) => {
    event.stopPropagation();
    if (window.confirm("Are you sure?")) {
      setloading(true)
        let res=await deleteNotesByid(noteid,id)
        if(res){
            setNotes(notes.filter(note => note._id !== noteid));
            setloading(false)
        }
      console.log("data",res)
      navigate("/mynotes");
    }
  };
  

  return (
  <>
    <div className="w-full">
      <Header />
      <MainScreen title={`Welcome Back ${userInfo}..`}>
        {console.log(notes)}
        <Link to="/createnote">
          <button className="ml-2 mb-2 px-4 py-2 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600" >
            Create new Note
          </button>
        </Link>
        {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {errorDelete && <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>} */}
        {loading && <Loading />}
        {/* {loadingDelete && <Loading />} */}

        <div className="w-full">
          {notes?.reverse().map((note) => (
            <div key={note._id} className="border border-gray-200 rounded-lg mb-2">
              <div
                onClick={() => setOpenNoteId(openNoteId === note._id ? null : note._id)}
                className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
              >
                <span className="text-gray-800 text-lg">{note.title}</span>
                <div className="flex items-center">
                  <Link to={`/note/${note._id}`}>
                    <button className="mx-1 px-3 py-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="mx-1 px-3 py-1 border border-red-500 text-red-500 rounded-lg hover:bg-red-100"
                    onClick={() => deleteHandler(note._id,event)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              {openNoteId === note._id && (
                <div className="p-4">
                  <h4 className="text-green-500 text-lg mb-2">Category - {note.category}</h4>
                  <ReactMarkdown>{note.content}</ReactMarkdown>
                  <footer className="mt-4 text-gray-600 text-sm">
                    Created on <cite title="Source Title">{note.createdAt.substring(0, 10)}</cite>
                  </footer>
                </div>
                 )} 
            </div>
           ))} 
        </div>
      </MainScreen>
      <Footer />
    </div>
    </>
  );
};

export default MyNotes;
