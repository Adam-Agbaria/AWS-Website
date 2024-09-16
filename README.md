<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume Website Project</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
    }
    header {
      background: #4CAF50;
      color: white;
      padding: 10px 0;
      text-align: center;
    }
    h1, h2, h3, h4 {
      color: #333;
    }
    section {
      padding: 20px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    ul li {
      padding: 10px 0;
    }
    code {
      background: #f4f4f4;
      padding: 5px;
      border-radius: 4px;
      display: block;
      margin: 10px 0;
    }
    pre {
      background: #f4f4f4;
      padding: 10px;
      border-radius: 4px;
      overflow: auto;
    }
    .toc ul {
      padding-left: 15px;
    }
  </style>
</head>
<body>

<header>
  <h1>Resume Website Deployment</h1>
  <p>A serverless pipeline for deploying a resume website using AWS services.</p>
</header>

<section>
  <h2>Table of Contents</h2>
  <div class="toc">
    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#architecture-overview">Architecture Overview</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#technologies-used">Technologies Used</a></li>
      <li><a href="#setup-and-installation">Setup and Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#deployment">Deployment</a></li>
      <li><a href="#project-structure">Project Structure</a></li>
      <li><a href="#ci-cd-pipeline">CI/CD Pipeline</a></li>
      <li><a href="#aws-services-utilized">AWS Services Utilized</a></li>
      <li><a href="#security-considerations">Security Considerations</a></li>
      <li><a href="#cost-management">Cost Management</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ul>
  </div>
</section>

<section id="introduction">
  <h2>Introduction</h2>
  <p>This project automates the deployment of a resume website using a serverless pipeline in AWS. It leverages AWS services like Lambda, S3, and CodePipeline to deploy and manage the website effortlessly.</p>
</section>

<section id="architecture-overview">
  <h2>Architecture Overview</h2>
  <p>The architecture involves multiple AWS services to achieve a fully automated deployment pipeline:</p>
  <ul>
    <li><strong>S3</strong> for website hosting.</li>
    <li><strong>Lambda</strong> functions for build, deployment, and notifications.</li>
    <li><strong>CodePipeline</strong> to automate the CI/CD workflow.</li>
  </ul>
</section>

<section id="features">
  <h2>Features</h2>
  <ul>
    <li>Automated deployment pipeline using AWS CodePipeline.</li>
    <li>Serverless functions for build and deployment stages.</li>
    <li>Notifications sent via Lambda after successful deployment.</li>
  </ul>
</section>

<section id="technologies-used">
  <h2>Technologies Used</h2>
  <ul>
    <li><strong>Languages:</strong> Python</li>
    <li><strong>AWS Services:</strong> Lambda, S3, DynamoDB, CloudFormation, CodePipeline</li>
    <li><strong>Framework:</strong> AWS SAM (Serverless Application Model)</li>
  </ul>
</section>

<section id="setup-and-installation">
  <h2>Setup and Installation</h2>
  <p>Follow the steps below to set up the project on your local machine:</p>
  <ol>
    <li>Install <code>AWS CLI</code>, <code>SAM CLI</code>, and <code>Python 3.11</code>.</li>
    <li>Clone the repository: <code>git clone https://github.com/your-repo/resume-website.git</code></li>
    <li>Run <code>sam build</code> to build the application.</li>
    <li>Deploy the application using <code>sam deploy --guided</code>.</li>
  </ol>
</section>

<section id="usage">
  <h2>Usage</h2>
  <p>After deployment, the website can be accessed at the custom domain. The Lambda functions handle build and deployment tasks automatically.</p>
</section>

<section id="deployment">
  <h2>Deployment</h2>
  <p>The project is deployed via AWS CodePipeline, which automates the entire process from build to deployment. Any code changes automatically trigger the pipeline and deploy updates to the website.</p>
</section>

<section id="project-structure">
  <h2>Project Structure</h2>
  <pre>
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
  │   │   ├── app.py               # Main Python script for notifications
  │   │   └── requirements.txt     # Python dependencies
  │   └── pipeline_manager/        # Lambda function for managing the deployment pipeline
  │       ├── app.py               # Main Python script for managing pipeline
  │       └── requirements.txt     # Python dependencies
  ├── template.yaml                # SAM template for defining AWS resources
  ├── buildspec.yml                # CodeBuild configuration file
  └── README.md                    # Project documentation
  </pre>
</section>


<section id="ci-cd-pipeline">
  <h2>CI/CD Pipeline</h2>
  <p>The CI/CD pipeline is built using AWS CodePipeline and consists of the following stages:</p>
  <ul>
    <li><strong>Source:</strong> Code is pulled from GitHub.</li>
    <li><strong>Build:</strong> Code is built and packaged using AWS SAM.</li>
    <li><strong>Deploy:</strong> The website is deployed to S3.</li>
  </ul>
</section>

<section id="aws-services-utilized">
  <h2>AWS Services Utilized</h2>
  <ul>
    <li><strong>S3:</strong> Hosting static files for the website.</li>
    <li><strong>Lambda:</strong> Running serverless functions for deployment automation.</li>
    <li><strong>Route 53:</strong> Managing the custom domain.</li>
    <li><strong>CloudFormation:</strong> Managing AWS infrastructure as code.</li>
    <li><strong>DynamoDB:</strong> Storing pipeline configuration.</li>
  </ul>
</section>

<section id="security-considerations">
  <h2>Security Considerations</h2>
  <ul>
    <li>Ensure appropriate IAM roles are set up with least privilege access for Lambda functions.</li>
    <li>S3 bucket permissions are configured to allow public read access for static website hosting.</li>
  </ul>
</section>

<section id="cost-management">
  <h2>Cost Management</h2>
  <p>Estimated monthly costs based on current usage:</p>
  <ul>
    <li><strong>S3 Storage:</strong> $0.01/month</li>
    <li><strong>Lambda Executions:</strong> $0.02/month</li>
    <li><strong>CodePipeline:</strong> $0.15/month for build minutes</li>
  </ul>
  <p>Set up AWS Billing Alerts to monitor and manage costs effectively.</p>
</section>

<section id="faq">
  <h2>FAQ</h2>
  <ul>
    <li><strong>Q:</strong> How do I change the website content?<br>
      <strong>A:</strong> Update the files in the <code>src/website</code> directory and push changes to trigger the deployment pipeline.
    </li>
    <li><strong>Q:</strong> How do I set up a custom domain?<br>
      <strong>A:</strong> Use Route 53 to configure the domain and point it to the S3 bucket hosting the website.
    </li>
  </ul>
</section>

<section id="contributing">
  <h2>Contributing</h2>
  <p>We welcome contributions! Please follow these steps:</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch for your feature or bug fix.</li>
    <li>Submit a pull request with a detailed description of your changes.</li>
  </ol>
</section>

<section id="license">
  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>
</section>

<section id="acknowledgments">
  <h2>Acknowledgments</h2>
  <p>Thanks to AWS for providing the services used in this project and the open-source community for inspiration.</p>
</section>

</body>
</html>
