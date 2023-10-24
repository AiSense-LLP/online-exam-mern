import girl from '../images/contact-1.JPG';
import contact from '../images/contact-2.JPG';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Contact.css'; 
import { useFormik } from 'formik';


const validate = values => {
  const errors = {};
  if (!values.company) {
    errors.company = 'Required';
  } else if (values.company.length > 15) {
    errors.company = 'Must be 15 characters or less';
  }


  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export default function Contact() {

  const formik = useFormik({
    initialValues: {
      company: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='bg-body-tertiary container-fluid'>
      <Row>
        <Col xs={12} sm={6} className="image-col">
          <div className="bg-body-tertiary">
            <img src={girl} alt="" className="img-fluid" />
          </div>
        </Col>
        <Col xs={12} sm={6} className="form-col justify-content-center">
          <div className="isolate bg-body-tertiary px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Some contact information on how to reach out
              </p>
            </div>
            <form  className="mx-auto mt-16 max-w-xl sm:mt-20 " onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder='Company'
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={formik.handleChange}
             value={formik.values.company}

                    />
                    {formik.errors.company ? <div>{formik.errors.company}</div> : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder='Email'
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={formik.handleChange}
         value={formik.values.email}
                    />
                     {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      placeholder='Massage'
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Col>
        <Col xs={12} sm={6} className="image-col">
          <div className="bg-body-tertiary">
            <img src={contact} alt="" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </div>
  );
}


