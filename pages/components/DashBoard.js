import { CalloutCard, Card, Heading, Layout, Page, SkeletonBodyText, TextContainer } from '@shopify/polaris';
import React from 'react';


function DashBoard() {
  return (
    <Page title="Dashboard">
        <Layout>
          <Layout.Section>
            <CalloutCard
              title="Customize the style of your checkout"
              illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
              primaryAction={{content: 'Customize checkout'}}
              secondaryAction={{content: 'Learn more about customizing checkout', url: '#'}}
            >
              <p>Upload your store’s logo, change colors and fonts, and more.</p>
            </CalloutCard>
          </Layout.Section>
          <Layout.Section>
            <Card title="Default" sectioned>
              <TextContainer>
                <Heading element='h4'>Default Header Title</Heading>
                <SkeletonBodyText lines={20}/>
              </TextContainer>  
            </Card>                      
          </Layout.Section>

          <Layout.Section secondary>
            <Card sectioned>
              <TextContainer>
                <p>
                    Shopify is the easiest way to sell your products in person. Available
                    for iPad, iPhone, and Android.
                </p>
              </TextContainer>
            </Card>
          </Layout.Section>
        </Layout>
          
      </Page>
  );
}

export default DashBoard;