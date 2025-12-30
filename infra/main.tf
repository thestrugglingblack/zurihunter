resource "aws_apprunner_auto_scaling_configuration_version" "zh_apprunner_autoscaling" {
  auto_scaling_configuration_name = "zh_apprunner_auto_scalling"
  max_concurrency = 100
  max_size        = 5
  min_size        = 1

  tags = {
    Name = "zh_apprunner_auto_scalling"
  }
}

resource "aws_apprunner_service" "zh_apprunner_service_ecr" {
  service_name = "zh_apprunner"

  source_configuration {
    image_repository {
      image_configuration {
        port = "1992"
      }
      image_identifier      = "378737770782.dkr.ecr.us-east-1.amazonaws.com/site/zurihunter:latest"
      image_repository_type = "ECR"
    }
    authentication_configuration{
      access_role_arn = aws_iam_role.zh_apprunner_role.arn
    }
    auto_deployments_enabled = true
  }

  auto_scaling_configuration_arn = aws_apprunner_auto_scaling_configuration_version.zh_apprunner_autoscaling.arn

  health_check_configuration {
          healthy_threshold   = 1
          interval            = 10
          path                = "/"
          protocol            = "TCP"
          timeout             = 5
          unhealthy_threshold = 5
        }

  tags = {
    Name = "zh_apprunner_service"
  }
}

output "zh_apprunner_url" {
  value = aws_apprunner_service.zh_apprunner_service_ecr.service_url
}

resource "aws_route53_record" "zh_apprunner_route53_record" {
  zone_id = "Z0414415ZA28UYA3FL53"
  name    = "www.zuri-hunter.com"
  type    = "A"

  alias {
    name = aws_apprunner_service.zh_apprunner_service_ecr.service_url
    zone_id = "Z01915732ZBZKC8D32TPT"
    evaluate_target_health = false
  }
}

resource "aws_apprunner_custom_domain_association" "zh_apprunner_custom_domain" {
  service_arn = aws_apprunner_service.zh_apprunner_service_ecr.arn
  domain_name = "zuri-hunter.com"
}