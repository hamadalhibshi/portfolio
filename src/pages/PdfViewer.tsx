import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
  RPConfig,
} from "@pdf-viewer/react";
import { documents } from "../constants";

const PdfViewer = () => {
  return (
    <RPConfig>
      <RPProvider src={documents.resume}>
        <RPDefaultLayout style={{ height: "900px" }}>
          <RPPages />
        </RPDefaultLayout>
      </RPProvider>
    </RPConfig>
  );
};
export default PdfViewer;
