
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen/MainScreen";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { userLogin } from "../../../api/user";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../store/slice/authSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await userLogin(values.email, values.password);
        if (res?.data.success) {
          dispatch(setCredentials(res.data.token));
          localStorage.setItem('userId', res.data.name);
          localStorage.setItem('userValue', res.data._id);
          toast.success('Successfully logged in.');
          navigate(`/mynotes`);
        } else {
          toast.error(res?.data.message || 'Login failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('An error occurred during login. Please try again later.');
      }
    },
  });

  return (
    <div>
      <Header />
      <MainScreen title="LOGIN">
        <div className="loginContainer p-4">
          <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
                placeholder="Enter email"
                className={`mt-1 block w-full px-3 py-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                {...formik.getFieldProps("password")}
                placeholder="Password"
                className={`mt-1 block w-full px-3 py-2 border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
          <div className="py-3">
            <div className="text-sm text-gray-600">
              New Customer? <Link to='/register' className="text-indigo-600 hover:text-indigo-500">Register Here</Link>
            </div>
          </div>
        </div>
      </MainScreen>
      <Footer />
    </div>
  );
};

export default LoginPage;