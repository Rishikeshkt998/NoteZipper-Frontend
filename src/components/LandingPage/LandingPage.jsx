import { Link} from "react-router-dom"
// import { useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import background1 from '../../assets/background1.jpg'

const LandingPage = () => {
//   const navigate = useNavigate()
//   useEffect(() => {
//     const userInfo = localStorage.getItem("userInfo")
//     if (userInfo) {
//       navigate('/mynotes')
//     }
//   }, [navigate])

  return (
    <div>
      <Header />
      <div className="main flex items-center justify-center min-h-[93vh] bg-cover" style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
        <div className="container mx-auto text-center">
          <div className="intro-text w-full text-center">
            <h1 className="title text-[94px] md:text-[50px] px-2 lg:px-[100px] font-bold">
              Welcome to Note Zipper
            </h1>
            <p className="subtitle text-[25px] pt-2">
              One Safe Place for all your notes
            </p>
            <div className="buttonContainer mt-12 flex justify-evenly lg:px-[200px]">
              <Link to='/login'>
                <button className="landingButton w-[200px] h-[55px] md:w-[150px] md:h-[50px] bg-blue-500 text-white py-2 px-4 rounded-lg text-lg">
                  Login
                </button>
              </Link>
              <Link to='/register'>
                <button className="landingButton w-[200px] h-[55px] md:w-[150px] md:h-[50px] bg-transparent text-blue-500 py-2 px-4 rounded-lg text-lg border border-blue-500">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
