
import  {  useLayoutEffect, useState } from "react";
import MainScreen from "../MainScreen/MainScreen";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNotesByid, getNotesbyId, updateNotebyId } from "../../../api/notes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SingleNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const userid= localStorage.getItem('userValue');
  
  const navigate = useNavigate();
  const { id } = useParams();
  const deleteHandler = async(id) => {
    if (window.confirm("Are you sure?")) {
    let res=await deleteNotesByid(id,userid)
      console.log("data",res)
      navigate("/mynotes");
    }
  };

  useLayoutEffect(() => {
    const fetching = async () => {
      let res=await getNotesbyId(id)
      console.log("data",res)

      setTitle(res?.data?.note?.title);
      setContent(res?.data?.note?.content);
      setCategory(res?.data?.note?.category);
      setDate(res?.data?.note?.updatedAt);
    };

    fetching();
  }, [id]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = async(e) => {
    e.preventDefault();
    if (!title || !content || !category) return;
    let res=await updateNotebyId(id,userid,title,content,category,date)
    console.log("data",res)
    resetHandler();
    navigate("/mynotes");
  };

  return (
    <>
    <Header/>
    <MainScreen title="Edit Note">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit your Note</h2>
        <form onSubmit={updateHandler}>
          {/* {loadingDelete && <Loading />}
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {errorDelete && <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>} */}
          
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter the title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              placeholder="Enter the content"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {content && (
            <div className="mb-4">
              <div className="border border-gray-300 rounded-md">
                <div className="bg-gray-100 p-2 font-semibold">Note Preview</div>
                <div className="p-4">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </div>
              </div>
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              id="category"
              placeholder="Enter the Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* {loading && <Loading size={50} />} */}

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Note
            </button>
            <button
              type="button"
              onClick={() => deleteHandler(id)}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete Note
            </button>
          </div>
        </form>

        <div className="mt-4 text-gray-600 text-sm">
          Updated on - {date.substring(0, 10)}
        </div>
      </div>
    </MainScreen>
    <Footer/>
    </>
  );
}

export default SingleNote;