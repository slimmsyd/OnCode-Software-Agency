# OnCode Onboarding System

This document provides an overview of the onboarding system implemented for OnCode's client projects. The onboarding system is designed to collect essential information from clients interested in our specialized secure data and blockchain solutions.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technical Implementation](#technical-implementation)
4. [User Flow](#user-flow)
5. [Future Enhancements](#future-enhancements)

## Overview

The onboarding system is a multi-step form that guides potential clients through providing the necessary information to initiate a project. It focuses on two main product offerings:

1. **PP1: Distributed Data Security Platform** - A solution using IPFS and OpenTDF for secure data handling
2. **PP2: Enterprise Blockchain SaaS** - A Hyperledger Fabric-based solution for enterprise blockchain applications

The system collects client information, project requirements, security needs, and timeline expectations to help the OnCode team prepare an appropriate project proposal.

## Features

- **Multi-step Form**: Breaks the information collection into manageable steps
- **Progress Tracking**: Visual progress bar to show completion status
- **Input Validation**: Ensures all required information is collected
- **Responsive Design**: Works smoothly on mobile, tablet, and desktop devices
- **Success Confirmation**: Confirms submission and sets expectations for next steps
- **Product Requirements Document**: A detailed PRD is available for clients to understand the technical details

## Technical Implementation

The onboarding system is built using:

- **Next.js**: For server-side rendering and routing
- **React**: For the UI components and state management
- **TypeScript**: For type safety and code quality
- **TailwindCSS**: For responsive styling

### Key Files

- `my-app/src/app/components/onboarding/OnboardingForm.tsx`: The main form component
- `my-app/src/app/onboarding/page.tsx`: The page wrapper for the onboarding form
- `my-app/src/app/onboarding/success/page.tsx`: The success page shown after form submission
- `my-app/public/documents/OnboardingProcess-PRD.md`: Product Requirements Document

## User Flow

1. **Access**: Users can access the onboarding form via the "Get Started" button in the navigation
2. **Step 1**: Basic contact information (name, company, email, phone)
3. **Step 2**: Project overview (type, description)
4. **Step 3**: Security requirements (security level, data storage preferences)
5. **Step 4**: Additional information (team size, timeline, notes)
6. **Submission**: Form data is submitted and stored
7. **Success**: User is shown a success page with next steps
8. **Follow-up**: OnCode team reaches out to the client within 1-2 business days

## Future Enhancements

Planned improvements for the onboarding system include:

1. **Backend Integration**: Connect to a database to store submissions
2. **Email Notifications**: Automated emails to clients and the OnCode team
3. **Account Creation**: Allow clients to create accounts for ongoing project tracking
4. **Document Upload**: Enable clients to upload relevant documents
5. **Calendar Integration**: Built-in scheduling for the initial consultation
6. **Analytics**: Track conversion rates and form completion metrics

---

## For Developers

To modify the onboarding system:

1. The form structure is defined in `OnboardingForm.tsx`
2. To add or modify form fields, update the form state and corresponding JSX
3. The success page content can be modified in `success/page.tsx`
4. Navigation links to the onboarding page are in `Navigation.tsx`

To deploy changes:

1. Test locally using `npm run dev`
2. Build the application using `npm run build`
3. Deploy to your hosting provider

For any questions about this implementation, please contact the development team at dev@oncode.com 