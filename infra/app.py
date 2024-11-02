#!/usr/bin/env python3
import os

import aws_cdk as cdk

from infra.zh_lighstail import ZHLightSailStack


app = cdk.App()
account_id = os.get('AWS_ID')
region= os.get('AWS_REGION')
env = cdk.Environment(account=account_id, region=region)

ZHLightSailStack(app, "ZHLightSailStack", env)

app.synth()
