# Nanosnap

A simple micorservice for taking screenshots of websites.

## Install

```
$ npm install nanosnap
```

## Usage

### Start server

```
nanosnap
```

### Take a screenshot

```
https://<instance-url>/?url=<url>[&width=<width>&height=<height>&delay=<delay>]
```

#### Options

| Name   | Default | Description                     | Optional |
| -----  | ------- | ------------------------------- | -------- |
| url    | `null`  | The website's url               | ✖       |
| width  | `1200`  | The screenshot's width          | ✔       |
| height | `950`   | The screenshot's height         | ✔       |
| delay  | `0`     | Delay after the network is idle | ✔       |

## CLI

```
$ npm install --global nanosnap
```

```
$ nanosnap

  Usage
    nanosnap

  Options
    --port The port you want nanosnap to listen to [Default: 3000]

  Examples
    $ nanosnap --port 80
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
