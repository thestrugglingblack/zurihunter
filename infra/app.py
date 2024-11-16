#!/usr/bin/env python3
import os

import aws_cdk as cdk

from infra.zh_lighstail import ZHLightSailStack
from infra.zh_ecr import ZHECRStack


app = cdk.App()
account_id = os.getenv('AWS_ID')
region= os.getenv('AWS_REGION')
env = cdk.Environment(account=account_id, region=region)

ecr_stack = ZHECRStack(app, 'ZHECRStack', env=env)
# lightsail_stack = ZHLightSailStack(app, "ZHLightSailStack", env=env, ecr=ecr_stack )

app.synth()
