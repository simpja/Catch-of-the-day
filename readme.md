# Catch of the Day - React fundamentals

A simple React application built with Wes Bos' React For Beginners course: <a href="https://ReactForBeginners.com/">Learn React</a>

Fantastic course, as always from Wes!

## To Start

**Note** - One of the dependencies is Xcode. While installing, if you run into an error that says, `gyp: No Xcode or CLT version detected!` please do the following:

1. Execute `xcode-select --install` in terminal.
2. Delete the "node_modules" folder located within the "catch-of-the-day" folder.
3. Execute `npm install` once more.

### Code Use

You are welcome to use this code in your own applications. If you would like to use it for training purposes, please shoot Wes Bos a message first to make sure it's okay.

#### :question: `npm start` doesn't update the app on file save, or doesn't run correctly.

There may be a few different causes for this:

- Webpack currently can't handle folder/file names that contain parentheses.
- Webpack also has problems running inside folders for Dropbox/Google Drive type services. Git is recommended for keeping your files in sync across multiple computers.

#### :question: I get `permission_denied` warnings in my console when setting up Firebase

Be sure to select "Realtime database" as as your database type inside Firebase. If you created your database as a Cloud Firestore type, you can change it in the Database tab.

#### :question: I can't log in to the store after I deployed to Netlify/Apache

Firebase by default only allows logins from localhost or the Firebase website. You'll need to add your deploy URL to the Authorized Domains in the Sign-in method area of your Firebase console.

## htaccess

Here is the .htaccess file we use in the apache deployment video

```
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```
