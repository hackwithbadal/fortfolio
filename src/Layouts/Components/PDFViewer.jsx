import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core'
import Resume from '../../assets/docs/MERN.pdf'

function PDFViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={Resume}
                    theme={{theme:'dark'}}
                    plugins={[
                        // Register plugins
                        defaultLayoutPluginInstance

                    ]}
                />
            </Worker>
        </div>
    )
}

export default PDFViewer;