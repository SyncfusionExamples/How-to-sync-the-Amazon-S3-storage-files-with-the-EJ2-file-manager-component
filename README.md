# How-to-sync-the-Amazon-S3-storage-files-with-the-EJ2-file-manager-component
This example demonstrates how to synchronize the Amazon S3 object files with the EJ2 file manager component.

## Getting Started

To get started you need to clone the `How-to-sync-the-Amazon-S3-storage-files-with-the-EJ2-file-manager-component` repository and navigate to `How-to-sync-the-Amazon-S3-storage-files-with-the-EJ2-file-manager-component` location.

```
git clone https://github.com/SyncfusionExamples/How-to-sync-the-Amazon-S3-storage-files-with-the-EJ2-file-manager-component
cd How-to-sync-the-Amazon-S3-storage-files-with-the-EJ2-file-manager-component
```

## Installing

We can get all the Essential JS 2 components in a single npm package [`ej2`](https://www.npmjs.com/package/@syncfusion/ej2).

We already configure the required packages in the `package.json` file.

You can run the below command to install all dependent packages related to this seed project.

```
npm install
```

## Testing

This application is preconfigured with End-to-End testing and the test case is written in Jasmine.

We run the test scripts with [Protractor](http://www.protractortest.org/#/) end-to-end test runner. The test case file can be found in the `e2e` folder.

Protractor can interact with our web application and verify the test scripts.

We have to install WebDriver and also need to ensure it is updated. Open a separate terminal and run the below npm script.

```
npm run update-webdriver
```

Open another terminal and run the below npm script. It will start web server to serve our application.

```
npm run serve
```

Once the web server is up and running, we can run the end-to-end tests using the below npm script

```
npm run test
```

> **Note:** Since Protractor is using the Selenium Standalone Server, the Java Development Kit (JDK) need to be installed in your local machine.

If JDK is not installed in your local machine, you can download it from [here](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

## Running

The application is configured with `browser-sync`, so it will serve the web application in your default browser.

We used `webpack` to bundle the source file, before running the application in browser.

You can use the below npm script to run the web application.

```
npm run start
```
