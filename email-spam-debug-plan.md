# Email Spam Debug Plan

This document outlines the steps to diagnose why emails from `info@triolympiad.ca` are landing in spam.

## Phase 1: Verify DNS Propagation (The "Is it live?" Check)
Even if you added the records, they might not have propagated yet.

**Action 1:** Run the following commands in your terminal and **paste the output here**:

```bash
# Check SPF Record
dig txt triolympiad.ca +short

# Check DKIM Record (Mailjet default selector is usually 'mailjet')
dig txt mailjet._domainkey.triolympiad.ca +short

# Check DMARC Record
dig txt _dmarc.triolympiad.ca +short
```

**Results:**
```
[PASTE RESULTS HERE]
```

---

## Phase 2: Analyze the "Show Original" (The "Why did Google block it?" Check)
Gmail tells you exactly why it marked something as spam.

**Action 2:**
1.  Open one of the emails that went to Spam in Gmail.
2.  Click the **three vertical dots** (⋮) in the top-right corner of the email.
3.  Select **Show original**.
4.  Look for the **Authentication-Results** box at the top.
5.  **Tell me the status (PASS, FAIL, or SOFTFAIL) for:**
    *   **SPF**: ?
    *   **DKIM**: ?
    *   **DMARC**: ?

*(If you can paste the full "Authentication-Results" header line, that is even better).*

**Results:**
```
[PASTE AUTHENTICATION-RESULTS HERE]
```

---

## Phase 3: The Mail-Tester Score (The "Deep Dive")
This is the most effective way to find hidden issues (e.g., blacklisted IP, broken HTML, missing headers).

**Action 3:**
1.  Go to [https://www.mail-tester.com/](https://www.mail-tester.com/).
2.  Copy the temporary email address they give you (e.g., `test-123@mail-tester.com`).
3.  Go to your website's registration page and register a new user with **that email address**.
4.  Go back to the Mail-Tester tab and click **"Check your score"**.
5.  **Tell me:**
    *   The Score (e.g., 7/10).
    *   Any sections that are **Red** or **Yellow** (e.g., "You are not fully authenticated", "Your message contains broken links").

**Results:**
- Score: [SCORE HERE]
- Issues:
  ```
  [PASTE ISSUES HERE]
  ```

---

## Phase 4: Mailjet Status
**Action 4:**
1.  Log in to your Mailjet Dashboard.
2.  Go to **Senders & Domains**.
3.  **Confirm:** Is the status for `triolympiad.ca` **Green (Active)**?

**Result:** [YES/NO]

---

## Next Steps
Once all the above information is collected, we can pinpoint exactly what is wrong and fix it.
