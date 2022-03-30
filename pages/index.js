import { CalloutCard, Card, Frame, Heading, Layout, Navigation, Page, SkeletonBodyText, TextContainer } from '@shopify/polaris'
// import { url } from 'koa-router';
import React from 'react';
import AppNavigation from './components/appNavigation';
import DashBoard from './components/DashBoard';

const navigation = <AppNavigation />;

function Dashboard() {
  return (    
    <Frame
      navigation={navigation}
    >
      <DashBoard />
    </Frame>
    
  );
}

export default Dashboard;