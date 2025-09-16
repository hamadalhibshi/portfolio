import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
  RPConfig,
} from "@pdf-viewer/react";

const PdfViewer = () => {
  return (
    <RPConfig>
      <RPProvider src="src/assets/Hamad_Alhibshi_CV.pdf">
        <RPDefaultLayout style={{ height: "900px" }}>
          <RPPages />
        </RPDefaultLayout>
      </RPProvider>
    </RPConfig>
  );
};
export default PdfViewer;
