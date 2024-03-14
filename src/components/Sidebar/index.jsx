import { createSlotFill, Panel } from '@wordpress/components';

const { Slot: InspectorSlot, Fill: InspectorFill } = createSlotFill(
    'AtlasBlockEditorSidebarInspector'
);
export const Sidebar = () => (
    <div
        className="atlas-sidebar"
        role="region"
        aria-label="Atlas Block Editor advanced settings"
        tabIndex="-1">
        <Panel header="Inspector">
            <InspectorSlot bubblesVirtually />
        </Panel>
    </div>
);

Sidebar.InspectorFill = InspectorFill;

export default Sidebar;
