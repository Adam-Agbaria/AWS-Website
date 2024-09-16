<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <header style="background-color: #4CAF50; color: white; padding: 10px 0; text-align: center;">
    <h1>Resume Website Deployment</h1>
  </header>

  <section id="introduction" style="padding: 20px;">
    <h2>Introduction</h2>
    <p>This project provides a serverless solution for deploying a fully responsive resume website using AWS services like Lambda, S3, and CodePipeline.</p>
  </section>

  <section id="table-of-contents" style="padding: 20px;">
    <h2>Table of Contents</h2>
    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#architecture-overview">Architecture Overview</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#project-structure">Project Structure</a></li>
      <li><a href="#getting-started">Getting Started</a></li>
      <li><a href="#deployment">Deployment</a></li>
      <li><a href="#license">License</a></li>
    </ul>
  </section>

  <section id="architecture-overview" style="padding: 20px;">
    <h2>Architecture Overview</h2>
    <p>The project is built on AWS using the following services:</p>
    <ul>
      <li><strong>AWS Lambda</strong> for serverless computing.</li>
      <li><strong>Amazon S3</strong> for hosting static website files.</li>
      <li><strong>AWS CodePipeline</strong> for continuous integration and deployment.</li>
    </ul>
  </section>

  <section id="features" style="padding: 20px;">
    <h2>Features</h2>
    <ul>
      <li>Fully automated deployment pipeline.</li>
      <li>Integration with S3 for hosting static websites.</li>
      <li>Notifications upon successful deployment.</li>
      <li>Serverless architecture for efficient scaling.</li>
    </ul>
  </section>

  <section id="project-structure" style="padding: 20px;">
    <h2>Project Structure</h2>
    <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 4px; overflow: auto;">
resume-website/
├── src/
│   ├── website/                 # Website HTML, CSS, JS files
│   │   ├── index.html           # Main HTML file for the website
│   │   ├── css/
│   │   │   └── styles.css       # Website styling
│   │   ├── js/
│   │   │   └── script.js        # Website JavaScript logic
│   │   └── assets/
│   │       ├── images/          # Images used in the website
│   │       └── videos/          # Videos used in the website
│   ├── build_function/          # Lambda function for build stage
│   │   ├── app.py               # Main Python script for building
│   │   └── requirements.txt     # Python dependencies
│   ├── deploy_function/         # Lambda function for deployment
│   │   ├── app.py               # Main Python script for deployment
│   │   └── requirements.txt     # Python dependencies
│   ├── notifications/           # Lambda function for notifications
│   └── pipeline_manager/        # Lambda function for managing the pipeline
├── template.yaml                # SAM template
└── buildspec.yml                # CodeBuild configuration
    </pre>
  </section>

  <section id="getting-started" style="padding: 20px;">
    <h2>Getting Started</h2>
    <p>Follow these steps to set up and deploy the website:</p>
    <ol>
      <li>Clone the repository.</li>
      <li>Install the necessary AWS SAM dependencies.</li>
      <li>Deploy using AWS CodePipeline.</li>
    </ol>
  </section>

  <section id="deployment" style="padding: 20px;">
    <h2>Deployment</h2>
    <p>Deploy the application by running the following command:</p>
    <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 4px;">
sam deploy --template-file template.yaml --stack-name ResumeWebsiteStack --capabilities CAPABILITY_IAM --s3-bucket your-s3-bucket
    </pre>
  </section>

  <section id="license" style="padding: 20px;">
    <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>
  </section>
</body>
</html>
