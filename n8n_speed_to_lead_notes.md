# n8n Speed to Lead System Notes

*These notes were transcribed from the course materials/screenshots for the upcoming n8n workflow build.*

---

## What we are building

A **Speed to Lead** system for **Axiom AI** (https://axiom.trw-aaa.site/) an AI automation agency.

When a lead submits a contact form we want to:
1. Immediately trigger an AI-powered outbound phone call via VAPI
2. During the call, check real availability and book a discovery call via Cal.com if the lead agrees
3. After the call ends, summarise the transcript with AI, update a Google Sheet row, and email the admin

---

## Webhook Payload pinned in N8N (DO NOT UNPIN)

**⚠️ IMPORTANT NOTE FOR NEXT SESSION:** 
*The payload below is from the school's example (Axiom AI). When we build the workflow, we will adapt these fields to match the form we built on our DS Automations website (e.g., swapping `sector` for `serviceArea`, etc.).*

```json
{
  "firstName": "Derek",
  "lastName": "AI",
  "email": "trw.chwuik@gmail.com",
  "phone": "+441234567890",
  "businessEmail": "contact@axiom.trw-aaa.site",
  "businessPhone": "+449876543210",
  "gdprConsent": true,
  "sector": "Manufacturing",
  "painPoint": "Customer Onboarding Friction",
  "teamSize": "51-200 Employees",
  "submittedAt": "2026-06-29T11:49:55.723Z"
}
```

---

## Stack

| Service | Purpose |
|---------|---------|
| VAPI | AI voice call outbound call to lead, tools mid-call, analysis post-call |
| N8N | Workflow automation (self-hosted) |
| Google Sheets | Lead tracking |
| Gmail | Admin notifications and lead confirmations |

---

## Architecture

### Workflow 1 Inbound Lead (EXISTS - do not modify core flow)
- Trigger: form webhook
- Rule: add a **parallel branch** that fires a VAPI outbound call touch nothing else
- VAPI call passes lead data via `assistantOverrides.variableValues`, including `currentDateTime` computed at call time in London timezone (see Variable placeholders section)

### Workflow 2 Post-Call (build from scratch)
- Trigger: VAPI webhook -> `call-ended` event
- Steps: AI node summarises transcript -> update Google Sheet row -> email admin
- Also handles `no_answer` / `voicemail_left` outcomes: send lead a follow-up email with the Cal.com booking link

### Workflow A VAPI Tool: Check Availability (build from scratch)
- Trigger: `POST /webhook/vapi-check-availability`
- Called mid-call by VAPI when lead agrees to book
- Hits Cal.com v2 slots API, returns top 4 formatted slots as a readable string

### Workflow B VAPI Tool: Book Meeting (build from scratch)
- Trigger: `POST /webhook/vapi-book-meeting`
- Called mid-call after lead confirms a slot
- Creates Cal.com booking, emails lead confirmation, emails admin, updates Google Sheet row

---

## VAPI Assistant Pre-decided Configuration
*(Note: The details for this section were cut off in the screenshots provided!)*

---

## Files to Create

Set up the project by creating all of these before writing any implementation plan:

### 1. `CLAUDE.md`
Full project context for Claude Code include: overview, credential map, AI model strategy, architecture summary, session management instructions, all rules and conventions.

### 2. `DS open` (bash, no extension)
Reads the most recent file in `sessions/` and prints it. If no sessions exist, prints "Fresh start" + project name. Used at the start of every work session.

### 3. `DS Close` (bash, no extension)
Prints the target session file path (`sessions/YYYY-MM-DD_HH-MM.md`) and instructs Claude to generate and write the session summary there.

### 4. `.env.example`
All keys from the credentials section above, with empty or placeholder values. Committed to git. Real `.env` is never committed.

### 5. `.gitignore`
Must include at minimum:
```text
.env
*.env.local
```
