import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Footer } from "../components/Footer";
// import { MainContainer } from "../components/MainContainer";
import { Header } from "../components/Header";
import PDFViewer from "../components/PDFViewer";
import "../styles/App.css";
import { FixedAppBar } from "../components/FixedAppBar";
import LoadingScreen from "../components/LoadingScreen";
import useSiteData from "../hooks/useSiteData";

const MainContainer = React.lazy(() => import("../components/MainContainer"));

function App() {
  const { siteData } = useSiteData();
  return (
    <Router>
      <Suspense fallback={<LoadingScreen data={siteData} />}>
        <div className="app">
          <CssBaseline />
          <FixedAppBar data={siteData} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header data={siteData} />
                  <MainContainer data={siteData} />
                </>
              }
            />
            <Route
              path="/:fileName"
              element={
                <>
                  <PDFViewerWrapper data={siteData} />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

// Wrapper component to handle fetching the PDF file based on the route parameter
const PDFViewerWrapper = ({ data }) => {
  const ASSET_URL = `${data?.assetUrl}${data?.groupName}`;
  let { fileName } = useParams();
  const fileUrl = `${ASSET_URL}/${fileName}.pdf`;
  return <PDFViewer file={fileUrl} />;
};

export default App;
