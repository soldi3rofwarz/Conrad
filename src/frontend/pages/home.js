import React from 'react';
import {LayoutWithSidebar} from './../elements/theme/components/layout-with-sidebar';
import {WorksContainer} from './../elements/works/containers';
import {WorkAddContainer} from './../elements/works/containers/add-container';

export const Home = () => {
    return (
        <LayoutWithSidebar>
            <WorksContainer />
            <WorkAddContainer />
        </LayoutWithSidebar>
    );
};