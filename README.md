# Planning Poker Interactive Web App
Planning poker is a great way to estimate work. It promotes discussion and proper understanding in the team doing the work so there are fewer surprises.

I have found a total lack of a good online app to make it a simple process. So this is my attempt to create that simple online application to make it as simple as possible for anyone to participate. Either in the room on their phone or on the otherside of the planet.

## Aims
- No need to log in (Do not ask for details from the user)
- Make it as simple as possible to use
- Make it interactive
- Let it be installed on a phone
- Focus on helping a team do simple quick planning poker

## Application
The application is a simple Angular application with a focus on lightweight (but simple) while not asking for login details. This isn't about making the lightest and fastest application. Just a simple app that is easy to create, update, and understand that does the job.

### Running it locally
You can run the application locally for development
1. Clone the application from the repository
```
git clone xxx
```

2. Install the packages
```
npm install
```

3. Run the application
```
npm start
````

That will build the application with the development configuration and run it locally on `http://localhost:4200`. This is a standard Angular application and doesn't do anyhting special

### Tailwind CSS
The application uses Tailwind CSS as it's approach to UX. There are commands build into package.json to build the production css or development css.