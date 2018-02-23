Qualendar
=========

A Quick Calendar app. Back end at https://github.com/pzhine/qualendar-api.

Getting Started
---------------
1. Install the dependencies:
```
yarn install
```

2. Test your setup:
```
yarn test
```

3. Run the development server (http://localhost:3030)
```
yarn run dev
```

4. Configure the dev API endpoint in `/src/content/config.json`. If you want to
run the API locally, you can clone the [the Rails app](https://github.com/pzhine/qualendar-api)
and follow the installation instructions. Alternatively, you can point the API to the
staged version on heroku: http://qualendar-api.herokuapp.com


Production
----------
1. Build the app
```
yarn run build
```
2. Test your production server
```
yarn start
```

Documentation
-------------
The app uses [Storybook](https://github.com/storybooks/storybook) to enumerate
and document its constituent components and their states.
```
yarn run storybook
```
View the storybook app at: http://localhost:6006. Note that the sandbox depends
on the dev server for some static assets.

Exercise:
---------
The goal for this exercise was to develop a small, calendar management React app with the following minimum requirements:
- A month-only view, in order to keep things simple
- A way to navigate through the months, starting with the current one
- Creation and removal of events for a specific time in a specific day

Code objectives:
- Elegant, simple and potentially reusable code, markup and architecture that adds a properly nice, usable design to the application
- A scalable, sober design and interaction that accpepts more features and, in general, allows big changes easily
