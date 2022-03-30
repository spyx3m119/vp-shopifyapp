import { Heading, Page, TextContainer } from '@shopify/polaris'
import React from 'react'

function install() {
  return (
    <Page title="Install Page">
        <TextContainer>
            <Heading element='p'>Install script will be added here</Heading>
            <p>
                Shopify is the easiest way to sell your products in person. Available
                for iPad, iPhone, and Android.
            </p>
        </TextContainer>
        
    </Page>
  )
}

export default install;