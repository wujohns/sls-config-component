# sls-config-component
pure config serverless component for serverless component v2

## Using
The sls-config-component help you to save component config by using your inputs as outputs

for example:

```yaml
# serverless.yml (project A)
org: demo
app: config
stage: prod
component: sls-config
name: configA

inputs:
  region: ap-shanghai
  runtime: Nodejs10.15
```

```yaml
# serverless.yml (project B)
org: demo
app: config
stage: prod
component: express
name: expressDemo

inputs:
  src: ./src
  region: ${output:prod:${app}:configA.region}
  runtime: ${output:prod:${app}:configA.runtime}
  apigatewayConf:
    protocols:
      - http
      - https
    environment: release
```

In this example, the project B can get the config which is set in project A
