# Local monitoring stack

## Get Helm repository info

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

helm upgrade -i prom --values k8s/prom-stack.yml prometheus-community/kube-prometheus-stack


## Usage

Some metrics:

```
rate(tick_time_count[5s])
online_players
```