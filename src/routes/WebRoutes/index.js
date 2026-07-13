import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Layout from '../../Components/Layout';
import Slider from '../../Components/Slider';
import About from '../../Pages/About';
import Vision from '../../Pages/Vision';
import Manager from '../../Pages/Manager';
import Principal from '../../Pages/Principal';
import GeneralInstruction from '../../Pages/GeneralInstruction'; // Fixed camelCase
import SpecialFeatures from '../../Pages/SpecialFeatures'; // Fixed camelCase
import AcademicSystem from '../../Pages/AcademicSystem'; // Fixed camelCase
import AdmissionProcedure from '../../Pages/AdmissionProcedure'; // Fixed camelCase
import TransferCertificate from '../../Pages/TransferCertificate'; // Fixed camelCase
import Curriculum from '../../Pages/Curriculum';
import CoCurricularActivity from '../../Pages/CoCurricularActivity'; // Fixed camelCase
import Infrastructural from '../../Pages/Infrastructural';
import Classroom from '../../Pages/Classroom'; // Fixed camelCase
import SchoolLibrary from '../../Pages/SchoolLibrary'; // Fixed camelCase
import SchoolLab from '../../Pages/SchoolLab'; // Fixed camelCase
import Playground from '../../Pages/Playground'; // Fixed camelCase
import PhotoAlbum from '../../Pages/PhotoAlbum'; // Fixed camelCase
import Downloads from '../../Pages/Downloads';
import RecentActivity from '../../Pages/RecentActivity'; // Fixed camelCase
import Career from '../../Pages/Career';
import AdminLogin from '../../Pages/AdminLogin'; // Fixed camelCase
import ContactInfo from '../../Pages/ContactInfo'; // Fixed camelCase
import Enquiry from '../../Pages/Enquiry';
import MandatoryDisclosure from '../../Pages/MandatoryDisclosure'; // Fixed camelCase

function WebRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Default route */}
        <Route index element={<Slider />} />
        
        {/* Other routes */}
        <Route path="/home" element={<Slider />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/general-instruction" element={<GeneralInstruction />} />
        <Route path="/facilities" element={<SpecialFeatures />} />
        <Route path="/academicsystem" element={<AcademicSystem />} />
        <Route path="/procedure" element={<AdmissionProcedure />} />
        <Route path="/student-tc" element={<TransferCertificate />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/cocurricular" element={<CoCurricularActivity />} />
        <Route path="/building" element={<Infrastructural />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/library" element={<SchoolLibrary />} />
        <Route path="/lab1" element={<SchoolLab />} />
        <Route path="/play" element={<Playground />} />
        <Route path="/photo_album" element={<PhotoAlbum />} />
        <Route path="/down" element={<Downloads />} />
        <Route path="/activity" element={<RecentActivity />} />
        <Route path="/career" element={<Career />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/contact" element={<ContactInfo />} />
        <Route path="/inquiry" element={<Enquiry />} />
        <Route path="/M_summary" element={<MandatoryDisclosure />} />
      </Route>
    </Routes>
    
  );
}

export default WebRoutes;
