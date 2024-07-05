import React, { useEffect, useState } from 'react';

const DelayedApp = React.lazy(() =>
    new Promise(resolve => {
        setTimeout(() => resolve(import('./App')), 4000); 
    })
);

export default DelayedApp;
