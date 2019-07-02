import React from 'react';
import { createDefaultLayout } from 'utils/presets';

const LayoutContext = React.createContext(createDefaultLayout());

export default LayoutContext;
