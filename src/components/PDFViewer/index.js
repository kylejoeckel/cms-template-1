import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // For annotation layer CSS

const PDFViewer = ({ file }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "120px",
      }}
    >
      <iframe
        src={file}
        width="80%"
        height="900px"
        style={{ border: "none", background: "black", margin: "0 auto" }}
        title="PDF Viewer"
      />
    </div>
  );
};

export default PDFViewer;
