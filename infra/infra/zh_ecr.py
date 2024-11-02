from aws_cdk import (
    Stack,
    aws_ecr as ecr,
    aws_iam as iam,
    RemovalPolicy
)
from constructs import Construct

class ZHECRStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)



        repository = ecr.Repository(
            self, "ZHECRRepository",
            repository_name="site/zurihunter",
            removal_policy=RemovalPolicy.RETAIN
        )

        lightsail_access_policy = iam.Policy(
            actions=[
                "lightsail:*"
            ],
            resources=[repository.repository_arn],
            effect=iam.Effect.ALLOW
        )

        repository.add_to_resource_policy()