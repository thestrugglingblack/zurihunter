```text                                                                                
 _______ _______ _______ _______     _______ _______ _______ _______ _______ _______ 
|\     /|\     /|\     /|\     /|   |\     /|\     /|\     /|\     /|\     /|\     /|
| +---+ | +---+ | +---+ | +---+ |   | +---+ | +---+ | +---+ | +---+ | +---+ | +---+ |
| |   | | |   | | |   | | |   | |   | |   | | |   | | |   | | |   | | |   | | |   | |
| |Z  | | |u  | | |r  | | |i  | |   | |H  | | |u  | | |n  | | |t  | | |e  | | |r  | |
| +---+ | +---+ | +---+ | +---+ |   | +---+ | +---+ | +---+ | +---+ | +---+ | +---+ |
|/_____\|/_____\|/_____\|/_____\|   |/_____\|/_____\|/_____\|/_____\|/_____\|/_____\|                                                                                   
```

## Table of Contents
* [Overview](#overview)
* [Dependencies](#prerequisites)
* [Project Structure](#project-structure)
* [CI/CD](#cicd)
* [Resources](#resources)

## Overview
This codebase powers my **personal website**, which is deployed on **AWS** using **App Runner** and **Route 53**. It is built with **Node.js (v19.3.0)** and leverages **Docker** for containerization, while **Terraform** is used for infrastructure provisioning. The project includes server-side logic, email handling, templated views, and scripts for automation and deployment.  

### Features
- **Infrastructure as Code (Terraform):** Creates IAM roles and assign policies, provider configuration, and other AWS resources.  
- **Containerized Deployment (Docker):** Ensures consistency across environments with a **Node.js container**.  
- **CI/CD Integration:** Automates the build and deployment process.  
- **SEO & Content Management:** Includes `robots.txt` for SEO optimization and `content.js` for dynamic content.  
- **Email Functionality:** A `send-email.php` script handles email processing.  
- **Templated Frontend Views:** Uses **Handlebars** for dynamic HTML rendering.  

My website is structured to be **scalable, automated, and easy to maintain**, making it a robust foundation for hosting my personal site efficiently on AWS.

## Prerequisites
* Node v19.3.0
* Docker
* AWS
* Terraform

## Project Structure
```
├── Dockerfile                              -> Node Container
├── README.md
├── ecosystem.config.js                     -> Nodemon Configuration
├── infra                                   -> Terraform Scripts
│   ├── iam.tf
│   ├── main.tf
│   └── provider.tf
├── js                                      -> JS Files
│   └── content.js
├── package.json
├── robot.txt                               -> SEO
├── scripts                                 -> Bash Scripts
│   └── setup_env.sh
├── send-email.php                          -> Email Script
├── server.js                        
└── views                                   -> Template HTML
    └── index.handlebars
```

## CI/CD
This project implements a **continuous integration and deployment (CI/CD) pipeline** that automates the process of building, tagging, and deploying the application to **AWS App Runner** via **Amazon ECR**.
- **Automatic Deployments:** The `auto_deployments_enabled = true` setting in the **App Runner service** ensures that any new image pushed to the **ECR repository** is automatically deployed without manual intervention.  
- **AWS GitHub Actions Workflow:**  
  - Builds, tags, and pushes the latest Docker image to Amazon ECR.  
  - App Runner automatically detects and deploys the updated image, ensuring seamless and hands-free deployments.
This setup ensures that the latest changes are quickly and efficiently deployed to production, reducing downtime and manual effort.

## Resources
* [App Runner HostID](https://docs.aws.amazon.com/general/latest/gr/apprunner.html)
* [Font Awesome v4](https://fontawesome.com/v4/cheatsheet/)