import {
    BlockBreadcrumb,
    BlockEditorKeyboardShortcuts,
    BlockEditorProvider,
    BlockList,
    BlockTools,
    BlockInspector,
    WritingFlow,
    ObserveTyping,
} from '@wordpress/block-editor';
import { useEffect } from 'react';
import { useMemo, useState } from 'react';
import { serialize, parse } from '@wordpress/blocks';

import Sidebar from '../Sidebar';

// WP shows a snackbar message using this function.
// const { createInfoNotice } = useDispatch('core/notices');
const createInfoNotice = (msg, options = {}) => {
    console.info('msg');
};

export const BlockEditor = ({ settings: _settings }) => {
    const [blocks, updateBlocks] = useState([]);

    // NOTE: In WP this is to check user permission
    const canUserCreateMedia = false;

    // NOTE: In WP this would enable user to upload media
    const settings = useMemo(() => {
        if (!canUserCreateMedia) {
            return _settings;
        }
    }, [canUserCreateMedia, _settings]);

    const handleUpdateBlocks = (_blocks) => {
        updateBlocks(_blocks);
    };

    const handlePersistBlocks = (newBlocks) => {
        updateBlocks(newBlocks);
        window.localStorage.setItem('atlasBlocks', serialize(newBlocks));
    };

    useEffect(() => {
        const storedBlocks = window.localStorage.getItem('atlasBlocks');

        if (storedBlocks?.length) {
            handleUpdateBlocks(() => parse(storedBlocks));
            createInfoNotice('Blocks loaded from local storage', {
                type: 'snackbar',
                isDismissable: true,
            });
        }
    }, []);

    return (
        <BlockEditorProvider
            value={blocks}
            onInput={handleUpdateBlocks}
            onChange={handlePersistBlocks}
            settings={settings}>
            <BlockBreadcrumb />
            <Sidebar.InspectorFill>
                <BlockInspector />
            </Sidebar.InspectorFill>
            <div className="editor-styles-wrapper">
                <BlockEditorKeyboardShortcuts.Register />
                <BlockTools>
                    <WritingFlow>
                        <ObserveTyping>
                            <BlockList className="atlas-block-editor__block-list" />
                        </ObserveTyping>
                    </WritingFlow>
                </BlockTools>
            </div>
        </BlockEditorProvider>
    );
};
