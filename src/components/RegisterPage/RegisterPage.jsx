// import  { useState } from 'react';
// import { Link } from 'react-router-dom';

// // import ErrorMessage from '../../components/ErrorMessage';
// // import Loading from '../../components/Loading';

// // import { useDispatch, useSelector } from 'react-redux';
// // import { register } from '../../actions/userActions';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import MainScreen from '../MainScreen/MainScreen';
// import { signup } from '../../../api/user';

// const RegisterPage = () => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (values) => {
//         try {
//             const { name, email,  password, confirmpassword } = values;
//             const res = await signup(name, email, password, confirmpassword);
//             console.log("userdata", res);
//             if (res?.data.success) {
//                 toast.success('Successfully registered..')
//                 navigate(`/otp`, { state: { email } });
//             } else if (!res?.data.success) {
//                 toast.error(res?.data.message)
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             toast.error('An error occurred during signup. Please try again later.');
//             throw error;
//         }
//     };
//   return (
//     <div>
//       <Header />
//       <MainScreen title="REGISTER">
//         <div className="max-w-md mx-auto p-4">
//           {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
//           {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
//           {loading && <Loading />} */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-lg font-medium">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 placeholder="Enter name"
//                 onChange={(e) => setName(e.target.value)}
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-lg font-medium">Email address</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 placeholder="Enter email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-lg font-medium">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>

//             <div>
//               <label htmlFor="confirmPassword" className="block text-lg font-medium">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmpassword}
//                 placeholder="Confirm Password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>

            
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
//             >
//               Register
//             </button>
//           </form>
//           <div className="py-3 text-center">
//             <p>Have an Account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
//           </div>
//         </div>
//       </MainScreen>
//       <Footer />
//     </div>
//   );
// };

// export default RegisterPage;

// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import MainScreen from '../MainScreen/MainScreen';
// import { signup } from '../../../api/user';
// import { toast } from 'react-toastify';

// const RegisterPage = () => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmpassword) {
//       toast.error("Passwords do not match.");
//       return;
//     }
//     try {
//       const res = await signup(name, email, password, confirmpassword);
//       console.log("userdata", res);
//       if (res?.data.success) {
//         toast.success('Successfully registered..');
//         navigate(`/login`);
//       } else {
//         toast.error(res?.data.message || 'Registration failed.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast.error('An error occurred during signup. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <MainScreen title="REGISTER">
//         <div className="max-w-md mx-auto p-4">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-lg font-medium">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 placeholder="Enter name"
//                 onChange={(e) => setName(e.target.value)}
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-lg font-medium">Email address</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 placeholder="Enter email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-lg font-medium">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="confirmPassword" className="block text-lg font-medium">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmpassword}
//                 placeholder="Confirm Password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
//             >
//               Register
//             </button>
//           </form>
//           <div className="py-3 text-center">
//             <p>Have an Account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
//           </div>
//         </div>
//       </MainScreen>
//       <Footer />
//     </div>
//   );
// };

// export default RegisterPage;
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainScreen from '../MainScreen/MainScreen';
import { signup } from '../../../api/user';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one digit')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
      .required('Required'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmpassword: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await signup(values.name, values.email, values.password, values.confirmpassword);
        if (res?.data.success) {
          toast.success('Successfully registered.');
          navigate(`/login`);
        } else {
          toast.error(res?.data.message || 'Registration failed.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('An error occurred during signup. Please try again later.');
      }
    }
  });

  return (
    <div>
      <Header />
      <MainScreen title="REGISTER">
        <div className="max-w-md mx-auto p-4">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input
                type="text"
                id="name"
                {...formik.getFieldProps('name')}
                placeholder="Enter name"
                className={`mt-1 block w-full border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">Email address</label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps('email')}
                placeholder="Enter email"
                className={`mt-1 block w-full border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="password" className="block text-lg font-medium">Password</label>
              <input
                type="password"
                id="password"
                {...formik.getFieldProps('password')}
                placeholder="Password"
                className={`mt-1 block w-full border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="confirmpassword" className="block text-lg font-medium">Confirm Password</label>
              <input
                type="password"
                id="confirmpassword"
                {...formik.getFieldProps('confirmpassword')}
                placeholder="Confirm Password"
                className={`mt-1 block w-full border ${formik.touched.confirmpassword && formik.errors.confirmpassword ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
              />
              {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                <div className="text-red-500 text-sm">{formik.errors.confirmpassword}</div>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
            >
              Register
            </button>
          </form>
          <div className="py-3 text-center">
            <p>Have an Account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
          </div>
        </div>
      </MainScreen>
      <Footer />
    </div>
  );
};

export default RegisterPage;