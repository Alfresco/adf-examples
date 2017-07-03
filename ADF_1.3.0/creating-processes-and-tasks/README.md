# Creating processes and tasks (ADF 1.3.0 example)

This project is part of the [Alfresco Application Developer Framework](https://github.com/Alfresco/alfresco-ng2-components) collection of examples.
For further details about the repository and all the available examples please check the [introduction](https://github.com/Alfresco/adf-examples).

## About this project

This project implements an [Alfresco ADF](https://github.com/Alfresco/alfresco-ng2-components) application, creating processes and tasks.
By its nature, the application interacts with Alfresco Process Services as BPM System.

## Prerequisites

Before running the application, please check the assumptions listed below.

- Alfresco Activiti Enterprise v1.5.2.1+ running on `localhost` on port `9999`. You can check [here](https://community.alfresco.com/docs/DOC-6614-installing-activiti-bpm-as-adf-service-layer) for further details on how to install and setup Alfresco Activiti as Alfresco ADF Service Layer.

- [Node.js](https://nodejs.org) JavaScript runtime version 6.9+. Together with its package ecosystem named [npm](https://www.npmjs.com/).

## Running the application

Once the prerequisites will be checked, follow the tasks below to run the application.

- Open a terminal and change the directory to be in the `creating-processes-and-tasks` folder.

- Install dependencies executing the command below. The execution of this command will require some time to be completed. If some warnings will appear into the terminal, don't worry.

```sh
npm install
```

- Compile and run the application executing the command below. The command compiles and starts the project in watch mode (some errors with description `npm ERR! peer dep missing...` may appear). Upon start, you can navigate to `http://localhost:3000` with your preferred browser. The browser will automatically reload upon changes to the source code.

```sh
npm start
```

- Accessing to the web aopplication, you will see there is only the `Task app` application and this means you don't have project models available and can only create new tasks. To create a new project model and publish it in a new App, you can see the [tutorial here](https://community.alfresco.com/docs/DOC-6627-activiti-components-in-action) for all the details.

- Once new project models are created and published in a App, you can choose to create a new process or create a new task. After creating one (or more) process and/or task, access to the Alfresco Process Services User Interface and check the new instances in the BPM System. Press the question mark icon on the top right of the web page, to view a helping description.

ATTENTION: This script is recommended for development environment and not suited for headless servers and network access.

## Screenshots

Below some screenshots of the application as an example.

![Login page](public/img/screenshot.1.png)

![Creating processes and tasks](public/img/screenshot.2.png)

![Process creation done](public/img/screenshot.3.png)

![Task creation](public/img/screenshot.4.png)

![Left menu](public/img/screenshot.5.png)

## Feedback, issues or support

For feedback, issues or simply to request support, che the introduction [introduction](https://github.com/Alfresco/adf-examples) for further details.

## Disclaimer

All the content available in this tutorial has been developed and tested using Alfresco ADF v1.3.0 LA release, NodeJs 6.10.0 on a Linux Ubuntu 16.04.01 LTS as Operating System.
Each variation to the listed versions and tools could affect the success of the execution, even if the involved technologies and tasks have been defined to be as more general as possible, not related to any specific context or platform.

## License

Copyright (C) 2017 Alfresco Software Limited

Alfresco Software Limited licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
