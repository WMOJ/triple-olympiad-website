# Registration Flow & Google Sheets Integration Plan

## 1. Overview
We will implement a registration section at the bottom of the main landing page. This section will contain a form matching the specified fields. When a user submits the form, the data will be sent to a Next.js API route, which will then securely append the data to a Google Sheet using a Service Account.

## 2. Architecture

### Frontend
- **Component**: `src/components/RegistrationForm.tsx`
- **Styling**: 
  - Use the existing global CSS variables for colors and fonts.
  - Implement the "glassmorphism" aesthetic (translucent backgrounds, blurs, borders) to match the rest of the site.
  - Responsive design for mobile and desktop.
- **State Management**:
  - Handle form input state.
  - Handle submission states: `idle`, `submitting`, `success`, `error`.
  - Show a success message upon completion.

### Backend (Next.js API Route)
- **Endpoint**: `src/app/api/register/route.ts`
- **Functionality**:
  - Receive JSON data from the frontend.
  - Authenticate with Google APIs using Service Account credentials.
  - Append a new row to the specified Google Sheet.
- **Dependencies**: `googleapis`

## 3. Required Credentials & Configuration
To connect to Google Sheets, we need to set up a **Google Cloud Service Account**.

**You will need to provide (or set in `.env.local`) the following:**
1.  **`GOOGLE_SERVICE_ACCOUNT_EMAIL`**: The email address of the service account (e.g., `my-service-account@project-id.iam.gserviceaccount.com`).
2.  **`GOOGLE_PRIVATE_KEY`**: The long private key string from the service account JSON file (starts with `-----BEGIN PRIVATE KEY-----`).
3.  **`GOOGLE_SHEET_ID`**: The ID of the Google Sheet where data will be stored.
    - Found in the URL: `https://docs.google.com/spreadsheets/d/[THIS_IS_THE_ID]/edit`

**Action Required from User:**
1.  Create a project in Google Cloud Console.
2.  Enable the **Google Sheets API**.
3.  Create a **Service Account** and download the JSON key file.
4.  Create a new Google Sheet.
5.  **Share** the Google Sheet with the `GOOGLE_SERVICE_ACCOUNT_EMAIL` (give it "Editor" access).

## 4. Implementation Steps

### Step 1: Setup & Dependencies
- Install the Google APIs client library:
  ```bash
  npm install googleapis
  ```
- Create `.env.local` file to store the credentials securely.

### Step 2: Backend Implementation
- Create `src/app/api/register/route.ts`.
- Implement the logic to initialize the Google Sheets client and append the row.
- Map form fields to sheet columns:
  - Column A: Timestamp
  - Column B: Full Name
  - Column C: Grade
  - Column D: Sections (Comma separated)
  - Column E: Food Allergies
  - Column F: Questions/Comments

### Step 3: Frontend Component (`RegistrationForm.tsx`)
- Build the form UI with the following fields:
  - **Full Name** (Text Input)
  - **Grade** (Radio Group: 9, 10, 11, 12, Other)
  - **Sections** (Checkbox Group: Physics, Math, CS)
  - **Allergies** (Text Input, Optional)
  - **Questions** (Text Area, Optional)
- Apply glassmorphism styling.
- Connect the form `onSubmit` to the `/api/register` endpoint.

### Step 4: Integration
- Import `RegistrationForm` in `src/app/page.tsx`.
- Place it at the bottom of the page (before the Footer).

### Step 5: Testing
- Verify the form looks good on all devices.
- Submit a test entry.
- Verify the data appears in the Google Sheet.
