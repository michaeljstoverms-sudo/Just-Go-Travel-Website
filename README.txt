# Just Go Travel website

## Files
- `index.html` — page structure and content
- `style.css` — visual design and responsive layout
- `script.js` — automatic slideshow, navigation, and form helpers

## Publish with GitHub Pages
1. Create a GitHub repository (or open the one you want to use).
2. Upload these three files to the repository's main/root folder.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. GitHub will provide the website URL after deployment.

## Important: activate the contact form
The form uses FormSubmit and sends requests to `michaelstover@justgotravel.com`.
1. Publish the website.
2. Submit one test request using a real email address you control.
3. FormSubmit will send an activation/confirmation email to the business inbox.
4. Open that email and confirm the form. After activation, future submissions will be delivered to the inbox.
5. The HTML currently has a placeholder redirect (`https://example.com/thank-you.html`). Remove the `_next` hidden input line for FormSubmit's default success page, or replace its value with the actual live thank-you page URL once you create one.

FormSubmit is a third-party service; its first-time activation is required. Do not put passwords or private API keys in the public repository.

## Before launch
- Replace the sample destination photos/copy if desired.
- The "About Michael" wording is intentionally general. Add a real bio, photo, credentials, and specialties only when supplied.
- No fabricated testimonials or fixed package prices are included. Add genuine customer reviews and verified offers when available.
- Test the site on desktop and mobile and submit a test form.
