import { BlockEditor } from './components/BlockEditor';
import { Popover, SlotFillProvider } from '@wordpress/components';
import { StrictMode } from '@wordpress/element';
import { FullscreenMode, InterfaceSkeleton } from '@wordpress/interface';
import { ShortcutProvider } from '@wordpress/keyboard-shortcuts';

import Notices from './components/Notices';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export const Editor = ({ settings }) => (
    <>
        <StrictMode>
            <ShortcutProvider>
                <FullscreenMode isActive={false} />
                <SlotFillProvider>
                    <InterfaceSkeleton
                        header={<Header />}
                        sidebar={<Sidebar />}
                        content={
                            <>
                                <Notices />
                                <BlockEditor settings={settings} />
                            </>
                        }
                    />
                    <Popover.Slot />
                </SlotFillProvider>
            </ShortcutProvider>
        </StrictMode>
    </>
);
