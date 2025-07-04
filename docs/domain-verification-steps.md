# Domain Verification Steps for Resend with Zoho

## Step 1: Log into Resend
1. Go to https://resend.com and log in to your account
2. Navigate to the "Domains" section
3. Click "Add Domain"
4. Enter your domain: `corvusbpo.com`
5. Resend will provide you with DNS records to add

## Step 2: Access Zoho DNS Management
1. Log in to your Zoho account
2. Go to Zoho Domains or DNS Management
3. Select your domain: `corvusbpo.com`
4. Look for "DNS Records" or "Advanced DNS Settings"

## Step 3: Add DNS Records
You'll need to add these types of records from Resend:

1. **SPF Record**
   - Type: `TXT`
   - Name: `@` (or leave blank)
   - Value: Will be provided by Resend, looks like: `v=spf1 include:spf.resend.com -all`

2. **DKIM Record**
   - Type: `CNAME`
   - Name: Will be provided by Resend (usually starts with `dkim._domainkey`)
   - Value: Will be provided by Resend

3. **Return-Path Record**
   - Type: `MX`
   - Name: Will be provided by Resend
   - Value: Will be provided by Resend
   - Priority: Will be provided by Resend (usually 10)

## Step 4: Verify Records
1. After adding the records, wait a few minutes
2. Go back to Resend's domain verification page
3. Click "Verify DNS records"
4. Resend will check if the records are properly configured

## Important Notes:
- DNS changes can take 24-48 hours to propagate fully
- Make sure not to delete or modify any existing Zoho email records
- If you have existing SPF records, you'll need to merge them with Resend's SPF record
- Keep the existing MX records for your Zoho email service

## Need Help?
If you need help with the exact DNS records from Resend:
1. Log into Resend
2. Go to Domains section
3. Add your domain
4. Copy the exact records provided
5. Share them with us, and we can provide specific instructions for adding them to Zoho

## After Verification
Once verified, update the FROM_EMAIL in the contact form API route to use:
`contact@corvusbpo.com`

## Testing
After domain verification is complete:
1. Try submitting the contact form
2. Check `hello@corvusbpo.com` for the notification email
3. Check the sender's email for the confirmation message