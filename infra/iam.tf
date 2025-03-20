resource "aws_iam_role" "zh_apprunner_role" {
   name = "zh_apprunner_role"
   assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": [
          "build.apprunner.amazonaws.com",
          "tasks.apprunner.amazonaws.com"
        ]
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_policy" "zh_apprunner_autoscaling_policy" {
  name = "zh_apprunner_autoscaling_policy"
  description = "Policy to allow App Runner AutoScaling Configuration"
  policy      = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "apprunner:CreateAutoScalingConfiguration",
        "apprunner:UpdateAutoScalingConfiguration",
        "apprunner:DeleteAutoScalingConfiguration",
        "apprunner:TagResource"
      ],
      "Resource": "*"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "zh_apprunner_attach" {
   role       = aws_iam_role.zh_apprunner_role.name
   policy_arn = "arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess"
}

resource "aws_iam_user_policy_attachment" "attach_zh_apprunner_autoscaling_policy" {
  user = "thestrugglingblack"
  policy_arn = aws_iam_policy.zh_apprunner_autoscaling_policy.arn
}

resource "aws_iam_policy" "zh_apprunner_user_policy" {
  name = "zh_apprunner_user_policy"
  description = "Policy to allow user to create App Runner AutoScaling Configuration"
  policy      = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "apprunner:CreateAutoScalingConfiguration",
        "apprunner:UpdateAutoScalingConfiguration",
        "apprunner:DeleteAutoScalingConfiguration",
        "apprunner:TagResource"
      ],
      "Resource": "*"
    }
  ]
}
EOF
}

resource "aws_iam_user_policy_attachment" "attach_zh_apprunner_user_policy" {
  user = "thestrugglingblack"
  policy_arn = aws_iam_policy.zh_apprunner_user_policy.arn
}