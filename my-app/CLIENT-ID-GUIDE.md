# Client ID Guide for MVP Checklist

This guide explains how to use client IDs with the OnCode MVP Checklist system.

## Overview

The client ID feature allows you to:
1. Create personalized onboarding experiences for different clients
2. Track which clients are completing the MVP checklist
3. Customize the UI with client-specific branding
4. Collect analytics on client engagement

## How It Works

Each client gets a unique ID in the URL:

```
https://yourdomain.com/onboarding/{clientId}
```

For example:
- `https://yourdomain.com/onboarding/acme` for Acme Corporation
- `https://yourdomain.com/onboarding/globex` for Globex Corporation
- `https://yourdomain.com/onboarding/initech` for Initech

## Currently Configured Clients

| Client ID | Company Name | Industry | Primary Color |
|-----------|--------------|----------|---------------|
| `acme` | Acme Corporation | Manufacturing | Blue (#2563eb) |
| `globex` | Globex Corporation | Technology | Emerald (#059669) |
| `initech` | Initech | Finance | Violet (#7c3aed) |

## Sending Links to Clients

1. Copy the appropriate URL with the client's ID
2. Send it directly to your client in an email or message
3. When they access the URL, they'll see a personalized onboarding experience

Example email template:

```
Subject: Your OnCode MVP Development Checklist

Hello [Client Name],

We're excited to help you build your MVP! To get started, please complete our
MVP development checklist using the personalized link below:

[URL with client ID]

This checklist will help us understand your requirements and create a tailored
development plan for your project.

Best regards,
The OnCode Team
```

## Adding New Clients

To add a new client, you'll need to:

1. Edit `my-app/src/app/onboarding/[clientId]/page.tsx` and add the client to the `clientData` object:
   ```javascript
   'newclient': {
     name: 'New Client Name',
     industry: 'Their Industry',
     primaryColor: '#HEX_COLOR',
   }
   ```

2. Also add the client to `my-app/src/app/onboarding/[clientId]/success/page.tsx` with additional contact details:
   ```javascript
   'newclient': {
     name: 'New Client Name',
     industry: 'Their Industry',
     primaryColor: '#HEX_COLOR',
     contactEmail: 'contact@example.com',
     contactName: 'Contact Person'
   }
   ```

3. Deploy the changes to your website

## Tracking Submissions

When a client submits the form:

1. The data is stored with their client ID
2. The submission includes a timestamp
3. You can view the console logs for form data (during development)
4. In production, you would connect this to your backend API

## Best Practices

- Use client IDs that are simple, lowercase, and without spaces
- Choose brand colors that match the client's official branding
- Consider the industry when customizing messaging
- Regularly check analytics to see which clients have engaged with the form

For any questions about the client ID system, please contact the development team. 