import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import { registerCoreBlocks } from '@wordpress/block-library';
import { Editor } from './Editor';
import './main.scss';

domReady(() => {
    const settings = window.getEditorSettings || {};
    registerCoreBlocks();
    render(<Editor settings={settings} />, document.getElementById('atlasEditorRoot'));
});

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
