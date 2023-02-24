import { ResumeProvider } from './ResumePage/Context';
import { useEffect } from 'react';
import './App.css';
// import Header from './ResumePage/element/Layouts/Header';
import Main from './ResumePage/element/Main';
import WebFont from 'webfontloader';
const Resume = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);
  return (
    <>
    <ResumeProvider>
      {/* <Header /> */}
      <Main />
    </ResumeProvider>
  </>
  );
}

export default Resume;

