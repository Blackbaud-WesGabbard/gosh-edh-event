# Shelter Virtual Event

This site was built using the Services Site Template, which aims to serve as a starting place for bespoke website development using EDH & JG APIs. It includes custom registration and supporter pages out of the box.

- [Staging](shelter-virtual-event.blackbaud-sites.com)
- Production TBC

## Getting started

For more information about how we build sites, read [our documentation here](https://blackbaud-professional-services.github.io/services-engineering).

### System Requirements

- Node (version 8): local JavaScript runtime to run the application
- Yarn: reliable dependency management for Node applications

[Guide to installing Node and Yarn on Mac](https://medium.com/@itsromiljain/the-best-way-to-install-node-js-npm-and-yarn-on-mac-osx-4d8a8544987a)

### Running Site Locally

#### 1. Install dependencies

```
yarn install
```

This may take a few mintues.

#### 2. Run the application

```
yarn start
```

The development server will now be serving your app, and can be viewed at [http://localhost:8080](http://localhost:8080).

Note that the development server will live re-load changes to your browser as you make changes to the codebase.

### Deployment

Deployments are handled by [travis](https://travis-ci.com/blackbaud-services/shelter-virtual-event)

#### Staging

All pushes to `master` or any `staging/*` branch will deploy the site to staging

#### Production

All pushes to `master` will deploy the site to production
