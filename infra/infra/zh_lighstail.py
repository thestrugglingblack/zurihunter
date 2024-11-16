from aws_cdk import (
    Stack,
    aws_lightsail as lightsail
)
from constructs import Construct


class ZHLightSailStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, ecr, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        container_service_deployment = lightsail.CfnContainer.ContainerServiceDeploymentProperty(
            containers=[
                lightsail.CfnContainer.ContainerProperty(
                    container_name='site/zurihunter',
                    image='',
                    environment={
                        "EM_PROVIDER":"",
                        "EM_NAME":"",
                        "EM_PASSWORD":""
                    },
                    ports={
                        "1992": lightsail.CfnContainer.PortInfoProperty(
                            port="80",
                            protocol='HTTP'
                        )
                    }
                )
            ],
            public_endpoint= lightsail.CfnContainer.PublicEndpointProperty(
                container_name='',
                container_port=1992,
                health_check_config= lightsail.CfnContainer.HealthCheckConfigProperty(
                    healthy_threshold=2,
                    unhealthy_threshold=2,
                    timeout_seconds=5,
                    interval_seconds=10,
                    path='/'
                )
            )
        )

        private_registry_access = lightsail.CfnContainer.PrivateRegistryAccessProperty(
            ecr_image_puller_role=lightsail.CfnContainer.EcrImagePullerRoleProperty(
                is_active=True
            )
        )

        site = lightsail.CfnContainer(
            self,
           id='ZHLightSailContainer',
           power='nano',
           service_name='site-zurihunter',
           scale=1,
           container_service_deployment=container_service_deployment,
           private_registry_access=private_registry_access,
           public_domain_names='',
           tags=[
               {
                   "project": "site"
               },
               {
                   "environment" : "production"
               }
           ],
           is_disabled=False
       )