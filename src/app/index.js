import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Footer } from "../components/Footer";
import { MainContainer } from "../components/MainContainer";
import { Header } from "../components/Header";
import PDFViewer from "../components/PDFViewer";
import "../styles/App.css";
import { FixedAppBar } from "../components/FixedAppBar";

function App() {
  return (
    <Router>
      <div className="app">
        <CssBaseline />
        <FixedAppBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MainContainer />
              </>
            }
          />
          <Route
            path="/:fileName"
            element={
              <>
                <PDFViewerWrapper />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Wrapper component to handle fetching the PDF file based on the route parameter
const PDFViewerWrapper = () => {
  // Use useParams hook from react-router-dom to access the fileName parameter
  let { fileName } = useParams();

  // Assuming your PDF files are stored in a public accessible directory,
  // construct the file URL here. You might need to adjust based on your actual file location.
  // For example, if your PDFs are stored in the public folder under pdfs/,
  // and the fileName does not include the .pdf extension, it should be added.
  const fileUrl = require(`../img/${fileName}.pdf`);

  return <PDFViewer file={fileUrl} />;
};

export default App;
