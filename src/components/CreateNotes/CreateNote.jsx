import  { useEffect, useState } from "react";
import MainScreen from "../MainScreen/MainScreen";
// import { useDispatch, useSelector } from "react-redux";
// import { createNoteAction } from "../../actions/notesActions";
// import Loading from "../../components/Loading";
// import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { createNote } from "../../../api/notes";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const id= localStorage.getItem('userValue');
  const userInfo = useSelector((state) => state.auth.userInfo);
  



  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler =async (e) => {
    e.preventDefault();
    try {
      const res = await createNote(id,title,content,category,userInfo);
      console.log("userdata", res);
      if (res?.data.success) {
        toast.success('Successfully loggedin..');
        navigate(`/createnote`);
      } else {
        toast.error(res?.data.message || 'login failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred during signup. Please try again later.');
    }

    navigate("/mynotes");
  };

  useEffect(() => {}, []);

  return (
    <>
    <Header/>
    <MainScreen title="Create a Note">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-semibold">Create a new Note</h2>
        </div>
        <form onSubmit={submitHandler} className="space-y-4">
          {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
          <div>
            <label htmlFor="title" className="block text-lg font-medium">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Enter the title"
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-lg font-medium">Content</label>
            <textarea
              id="content"
              value={content}
              placeholder="Enter the content"
              rows={4}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {content && (
            <div className="bg-gray-100 border border-gray-300 rounded-md p-4 mt-4">
              <h3 className="text-lg font-medium border-b border-gray-300 pb-2">Note Preview</h3>
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}

          <div>
            <label htmlFor="category" className="block text-lg font-medium">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              placeholder="Enter the Category"
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {/* {loading && <Loading size={50} />} */}
          <div className="flex space-x-4">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Create Note
            </button>
            <button type="button" onClick={resetHandler} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
              Reset Fields
            </button>
          </div>
        </form>
        <div className="mt-4 text-gray-500">
          Creating on - {new Date().toLocaleDateString()}
        </div>
      </div>
    </MainScreen>
    <Footer/>
    </>
  );
}

export default CreateNote;